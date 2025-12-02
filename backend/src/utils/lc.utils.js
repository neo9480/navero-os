import prisma from "../db/prismaClient.js";

async function createLC(
  importerId,
  exporterId,
  bankId,
  lcNumber,
  amount,
  currency,
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

async function updateLCStatus(lcId, status) {
  return prisma.lC.update({
    where: { id: lcId },
    data: { status },
  });
}

export default {
  createLC,
  updateLCStatus,
};
