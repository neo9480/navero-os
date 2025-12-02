import prisma from "../db/prismaClient.js";

async function createLC(
  importerId: any,
  exporterId: any,
  bankId: any,
  lcNumber: any,
  amount: any,
  currency: any,
) {
  return prisma.lC.create({
    data: {
      importerId,
      exporterId,
      bankId,
      lcNumber,
      amount,
      currency,
    },
  });
}

async function updateLCStatus(lcId: any, status: any) {
  return prisma.lC.update({
    where: { id: lcId },
    data: { status },
  });
}

export default {
  createLC,
  updateLCStatus,
};
