// utils/stats.utils.js
import prisma from "../db/prismaClient.js";
import { subDays, startOfDay, endOfDay } from "date-fns";

/**
 * Helper: sum revenue for a given where clause
 */
async function sumRevenue(where) {
  const res = await prisma.transaction.aggregate({
    _sum: { amount: true },
    where,
  });
  return Number(res._sum.amount ?? 0);
}

/**
 * Compute live totals (current totals from DB)
 */
export async function computeLiveStats() {
  const [
    usersTotal,
    shipmentsTotal,
    bookingsTotal,
    servicesTotal,
    transactionsTotal,
    revenueTotal,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.shipment.count(),
    prisma.booking.count(),
    prisma.service.count(),
    prisma.transaction.count(),
    // revenue: sum of COMPLETED transactions for payment types
    sumRevenue({
      status: "COMPLETED",
      type: "SUBSCRIPTION_FEE",
    }),
  ]);

  return {
    usersTotal,
    shipmentsTotal,
    bookingsTotal,
    servicesTotal,
    transactionsTotal,
    revenueTotal,
  };
}

/**
 * Count new records between start and end
 */
async function countNewBetween(modelName, start, end) {
  // modelName must match Prisma models: 'user', 'shipment', 'booking', 'service', 'transaction'
  return prisma[modelName].count({
    where: {
      createdAt: {
        gte: start,
        lt: end,
      },
    },
  });
}

/**
 * Create daily snapshot for a specific date (dateAt should be a Date at midnight local time)
 */
export async function recordDailySnapshot(dateAt = new Date()) {
  // Normalize to startOfDay local time
  const dayStart = startOfDay(dateAt);
  const dayEnd = endOfDay(dateAt);

  // totals (up-to-date) and new in the day
  const [
    usersTotal,
    usersNew,
    shipmentsTotal,
    shipmentsNew,
    bookingsTotal,
    bookingsNew,
    servicesTotal,
    servicesNew,
    transactionsTotal,
    transactionsNew,
    revenueTotal,
    revenueNew,
  ] = await Promise.all([
    prisma.user.count(),
    countNewBetween("user", dayStart, dayEnd),

    prisma.shipment.count(),
    countNewBetween("shipment", dayStart, dayEnd),

    prisma.booking.count(),
    countNewBetween("booking", dayStart, dayEnd),

    prisma.service.count(),
    countNewBetween("service", dayStart, dayEnd),

    prisma.transaction.count(),
    countNewBetween("transaction", dayStart, dayEnd),

    // revenueTotal = sum all completed up to now
    sumRevenue({
      status: "COMPLETED",
      type: "SUBSCRIPTION_FEE",
    }),
    // revenueNew = sum completed with createdAt in the day
    sumRevenue({
      status: "COMPLETED",
      type: "SUBSCRIPTION_FEE",
      createdAt: { gte: dayStart, lt: dayEnd },
    }),
  ]);

  // Upsert snapshot for that date (in case cron runs multiple times)
  const snapshot = await prisma.dailyStats.upsert({
    where: { date: dayStart },
    update: {
      usersTotal,
      usersNew,
      shipmentsTotal,
      shipmentsNew,
      bookingsTotal,
      bookingsNew,
      servicesTotal,
      servicesNew,
      transactionsTotal,
      transactionsNew,
      revenueTotal,
      revenueNew,
    },
    create: {
      date: dayStart,
      usersTotal,
      usersNew,
      shipmentsTotal,
      shipmentsNew,
      bookingsTotal,
      bookingsNew,
      servicesTotal,
      servicesNew,
      transactionsTotal,
      transactionsNew,
      revenueTotal,
      revenueNew,
    },
  });

  return snapshot;
}

/**
 * Return daily trend arrays for the last N days (including today).
 * Each element: { date: ISOString, usersNew, shipmentsNew, bookingsNew, transactionsNew, revenueNew }
 */
export async function getDailyTrends(days = 30) {
  const start = startOfDay(subDays(new Date(), days - 1));
  // Fetch rows from DailyStats where date >= start
  const rows = await prisma.dailyStats.findMany({
    where: { date: { gte: start } },
    orderBy: { date: "asc" },
  });

  // Map to complete list: ensure we have an entry per day (fill zeros if missing)
  const mapByDate = new Map(
    rows.map((r) => [startOfDay(new Date(r.date)).toISOString(), r]),
  );

  const results = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = startOfDay(subDays(new Date(), i));
    const key = d.toISOString();
    const r = mapByDate.get(key);
    results.push({
      date: key,
      usersNew: r ? r.usersNew : 0,
      shipmentsNew: r ? r.shipmentsNew : 0,
      bookingsNew: r ? r.bookingsNew : 0,
      transactionsNew: r ? r.transactionsNew : 0,
      revenueNew: r ? Number(r.revenueNew) : 0,
    });
  }

  return results;
}

/**
 * Compute growth KPIs (MoM, WoW) based on DailyStats.
 * This implementation uses sums over windows:
 * - last N days vs previous N days for relative growth
 */
export async function computeGrowthMetrics({ windowDays = 30 } = {}) {
  const today = startOfDay(new Date());
  const endCurrent = today; // use current day as end (snapshots stored midnight)
  const startCurrent = subDays(endCurrent, windowDays - 1);
  const startPrev = subDays(startCurrent, windowDays);
  const endPrev = subDays(endCurrent, windowDays);

  // fetch daily stats for the two windows
  const allRows = await prisma.dailyStats.findMany({
    where: {
      date: { gte: startPrev, lt: endCurrent },
    },
  });

  // helper to sum field for date ranges
  const sumField = (rows, start, end, field) =>
    rows
      .filter((r) => {
        const t = startOfDay(new Date(r.date));
        return t >= start && t < end;
      })
      .reduce((s, row) => s + Number(row[field] ?? 0), 0);

  const currentUsersNew = sumField(
    allRows,
    startCurrent,
    endCurrent,
    "usersNew",
  );
  const prevUsersNew = sumField(allRows, startPrev, startCurrent, "usersNew");

  const currentRevenue = sumField(
    allRows,
    startCurrent,
    endCurrent,
    "revenueNew",
  );
  const prevRevenue = sumField(allRows, startPrev, startCurrent, "revenueNew");

  const pct = (curr, prev) => {
    if (prev === 0) return curr === 0 ? 0 : 100;
    return ((curr - prev) / Math.abs(prev)) * 100;
  };

  return {
    users: {
      current: currentUsersNew,
      previous: prevUsersNew,
      growthPct: Number(pct(currentUsersNew, prevUsersNew).toFixed(2)),
    },
    revenue: {
      current: Number(currentRevenue.toFixed(2)),
      previous: Number(prevRevenue.toFixed(2)),
      growthPct: Number(pct(currentRevenue, prevRevenue).toFixed(2)),
    },
    windowDays,
  };
}
