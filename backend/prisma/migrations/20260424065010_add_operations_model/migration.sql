/*
  Warnings:

  - Added the required column `operationId` to the `Shipment` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OperationStatus" AS ENUM ('INITIATED', 'ON_GOING', 'COMPLETED');

-- AlterTable
ALTER TABLE "OTP" ALTER COLUMN "expiresAt" SET DEFAULT (now() + interval '5 minutes');

-- AlterTable
ALTER TABLE "Shipment" ADD COLUMN     "operationId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Operations" (
    "id" TEXT NOT NULL,
    "importerId" TEXT NOT NULL,
    "exporterId" TEXT NOT NULL,
    "brokerId" TEXT,
    "serviceId" TEXT,
    "bankId" TEXT,
    "logisticsId" TEXT,
    "shipmentId" TEXT NOT NULL,
    "status" "OperationStatus" NOT NULL DEFAULT 'INITIATED',

    CONSTRAINT "Operations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Operations" ADD CONSTRAINT "Operations_importerId_fkey" FOREIGN KEY ("importerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operations" ADD CONSTRAINT "Operations_exporterId_fkey" FOREIGN KEY ("exporterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operations" ADD CONSTRAINT "Operations_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operations" ADD CONSTRAINT "Operations_brokerId_fkey" FOREIGN KEY ("brokerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operations" ADD CONSTRAINT "Operations_logisticsId_fkey" FOREIGN KEY ("logisticsId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operations" ADD CONSTRAINT "Operations_shipmentId_fkey" FOREIGN KEY ("shipmentId") REFERENCES "Shipment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operations" ADD CONSTRAINT "Operations_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;
