import prisma from "../db/prismaClient.js";

/**
 * Transaction service: create and query transactions
 */

/**
 * Create a transaction (user-centric)
 * payload: { userId, amount, currency, type, shipmentId?, lcApplicationId?, reference? }
 */
async function createTransaction(payload) {
  return prisma.transaction.create({
    data: {
      userId: payload.userId,
      amount: payload.amount,
      currency: payload.currency || "USD",
      type: payload.type,
      shipmentId: payload.shipmentId || null,
      lcApplicationId: payload.lcApplicationId || null,
      reference: payload.reference || null,
    },
  });
}

/**
 * Find transactions for a user
 * @param {string} userId
 */
async function findByUser(userId) {
  return prisma.transaction.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
}

export default {
  createTransaction,
  findByUser,
};
