-- AlterTable
ALTER TABLE "OTP" ALTER COLUMN "expiresAt" SET DEFAULT (now() + interval '5 minutes');
