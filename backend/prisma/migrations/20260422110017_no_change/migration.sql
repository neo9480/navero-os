/*
  Warnings:

  - You are about to drop the column `dstination` on the `Shipment` table. All the data in the column will be lost.
  - Added the required column `destination` to the `Shipment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OTP" ALTER COLUMN "expiresAt" SET DEFAULT (now() + interval '5 minutes');

-- AlterTable
ALTER TABLE "Shipment" DROP COLUMN "dstination",
ADD COLUMN     "destination" TEXT NOT NULL;
