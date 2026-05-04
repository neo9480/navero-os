-- AlterTable
ALTER TABLE "OTP" ALTER COLUMN "expiresAt" SET DEFAULT (now() + interval '5 minutes');

-- AlterTable
ALTER TABLE "Shipment" ALTER COLUMN "etd" DROP NOT NULL,
ALTER COLUMN "eta" DROP NOT NULL;
