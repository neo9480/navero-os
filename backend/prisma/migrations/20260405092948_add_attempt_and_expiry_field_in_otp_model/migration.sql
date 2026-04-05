-- AlterTable
ALTER TABLE "OTP" ADD COLUMN     "attempts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL DEFAULT (now() + interval '5 minutes');
