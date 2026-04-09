/*
  Warnings:

  - The values [PENDING_REVIEW,APPROVED,REJECTED,VERIFIED] on the enum `DocumentStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "DocumentApproval" AS ENUM ('PENDING_REVIEW', 'APPROVED', 'REJECTED');

-- AlterEnum
BEGIN;
CREATE TYPE "DocumentStatus_new" AS ENUM ('DRAFT', 'SUBMITTED', 'ARCHIVED');
ALTER TYPE "DocumentStatus" RENAME TO "DocumentStatus_old";
ALTER TYPE "DocumentStatus_new" RENAME TO "DocumentStatus";
DROP TYPE "public"."DocumentStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "Document" ADD COLUMN     "approval" "DocumentApproval" NOT NULL DEFAULT 'PENDING_REVIEW';

-- AlterTable
ALTER TABLE "OTP" ALTER COLUMN "expiresAt" SET DEFAULT (now() + interval '5 minutes');
