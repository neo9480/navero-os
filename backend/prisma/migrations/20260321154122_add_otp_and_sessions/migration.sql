/*
  Warnings:

  - The values [INSURANCE_CERT] on the enum `DocumentType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `RefreshToken` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "DocumentType_new" AS ENUM ('COMMERCIAL_INVOICE', 'PACKING_LIST', 'BILL_OF_LADING', 'AIRWAY_BILL', 'CERTIFICATE_OF_ORIGIN', 'INSURANCE_CERTIFICATE', 'EXPORT_DECLARATION', 'IMPORT_DECLARATION', 'CUSTOMS_CLEARANCE', 'PAYMENT_RECEIPT', 'OTHER');
ALTER TABLE "Document" ALTER COLUMN "type" TYPE "DocumentType_new" USING ("type"::text::"DocumentType_new");
ALTER TYPE "DocumentType" RENAME TO "DocumentType_old";
ALTER TYPE "DocumentType_new" RENAME TO "DocumentType";
DROP TYPE "public"."DocumentType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "RefreshToken" DROP CONSTRAINT "RefreshToken_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "RefreshToken";

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL,
    "revoked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OTP" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "otpHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OTP_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_refreshToken_key" ON "Session"("refreshToken");

-- CreateIndex
CREATE UNIQUE INDEX "OTP_userId_key" ON "OTP"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "OTP_email_key" ON "OTP"("email");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OTP" ADD CONSTRAINT "OTP_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
