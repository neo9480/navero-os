-- DropForeignKey
ALTER TABLE "Operations" DROP CONSTRAINT "Operations_shipmentId_fkey";

-- AlterTable
ALTER TABLE "OTP" ALTER COLUMN "expiresAt" SET DEFAULT (now() + interval '5 minutes');

-- AlterTable
ALTER TABLE "Operations" ALTER COLUMN "shipmentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Operations" ADD CONSTRAINT "Operations_shipmentId_fkey" FOREIGN KEY ("shipmentId") REFERENCES "Shipment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
