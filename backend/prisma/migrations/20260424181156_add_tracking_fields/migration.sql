-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ShipmentEventType" ADD VALUE 'LOCATION_UPDATE';
ALTER TYPE "ShipmentEventType" ADD VALUE 'PICKED_UP';
ALTER TYPE "ShipmentEventType" ADD VALUE 'OUT_FOR_DELIVERY';

-- AlterTable
ALTER TABLE "OTP" ALTER COLUMN "expiresAt" SET DEFAULT (now() + interval '5 minutes');

-- AlterTable
ALTER TABLE "Shipment" ADD COLUMN     "carrierTrackingId" TEXT,
ADD COLUMN     "destLat" DOUBLE PRECISION,
ADD COLUMN     "destLng" DOUBLE PRECISION,
ADD COLUMN     "originLat" DOUBLE PRECISION,
ADD COLUMN     "originLng" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "ShipmentEvent" ADD COLUMN     "lat" DOUBLE PRECISION,
ADD COLUMN     "lng" DOUBLE PRECISION,
ADD COLUMN     "location" TEXT;
