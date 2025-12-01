-- CreateTable
CREATE TABLE "DailyStats" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "usersTotal" INTEGER NOT NULL,
    "usersNew" INTEGER NOT NULL,
    "shipmentsTotal" INTEGER NOT NULL,
    "shipmentsNew" INTEGER NOT NULL,
    "bookingsTotal" INTEGER NOT NULL,
    "bookingsNew" INTEGER NOT NULL,
    "servicesTotal" INTEGER NOT NULL,
    "servicesNew" INTEGER NOT NULL,
    "transactionsTotal" INTEGER NOT NULL,
    "transactionsNew" INTEGER NOT NULL,
    "revenueTotal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "revenueNew" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DailyStats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DailyStats_date_key" ON "DailyStats"("date");
