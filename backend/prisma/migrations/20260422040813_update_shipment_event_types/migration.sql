/*
  Warnings:

  - The values [BOOKED,CARGO_RECEIVED,LOADED,DEPARTED,ARRIVED_PORT,DISCHARGED,AT_CFS,DOCUMENT_VERIFIED,CUSTOMS_CLEARED,OUT_FOR_DELIVERY,EXCEPTION] on the enum `ShipmentEventType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `airwayBill` on the `Shipment` table. All the data in the column will be lost.
  - You are about to drop the column `vesselName` on the `Shipment` table. All the data in the column will be lost.
  - Added the required column `carrier` to the `Shipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dstination` to the `Shipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `origin` to the `Shipment` table without a default value. This is not possible if the table is not empty.
  - Made the column `etd` on table `Shipment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `eta` on table `Shipment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ShipmentEventType_new" AS ENUM ('IN_TRANSIT', 'CUSTOMS_HOLD', 'DELIVERED', 'DELAYED');
ALTER TABLE "ShipmentEvent" ALTER COLUMN "type" TYPE "ShipmentEventType_new" USING ("type"::text::"ShipmentEventType_new");
ALTER TYPE "ShipmentEventType" RENAME TO "ShipmentEventType_old";
ALTER TYPE "ShipmentEventType_new" RENAME TO "ShipmentEventType";
DROP TYPE "public"."ShipmentEventType_old";
COMMIT;

-- AlterTable
ALTER TABLE "OTP" ALTER COLUMN "expiresAt" SET DEFAULT (now() + interval '5 minutes');

-- AlterTable
ALTER TABLE "Shipment" DROP COLUMN "airwayBill",
DROP COLUMN "vesselName",
ADD COLUMN     "carrier" TEXT NOT NULL,
ADD COLUMN     "dstination" TEXT NOT NULL,
ADD COLUMN     "origin" TEXT NOT NULL,
ALTER COLUMN "etd" SET NOT NULL,
ALTER COLUMN "eta" SET NOT NULL;
