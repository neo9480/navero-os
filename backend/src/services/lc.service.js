import prisma from "../db/prismaClient.js";

/**
 * Letter of Credit service
 * Basic flows:
 *  - importer applies (create LC record with status APPLIED)
 *  - bank issues LC (update status to APPROVED/ACTIVE, set lcNumber)
 *  - exporter bank may advise (status ADVISING/ADVISED)
 */

/**
 * Apply for an LC (importer)
 * @param {Object} payload
 */
async function applyLC(payload) {
  // payload should include: importerId, exporterId, bankId, amount, currency
  return prisma.lC.create({
    data: {
      lcNumber: payload.lcNumber || null,
      amount: payload.amount,
      currency: payload.currency || "USD",
      importerId: payload.importerId,
      exporterId: payload.exporterId,
      bankId: payload.bankId,
      status: "APPLIED",
    },
  });
}

/**
 * Bank issues an LC (sets lcNumber, status APPROVED or ACTIVE)
 * @param {string} lcId
 * @param {Object} updates { lcNumber, status, issueDate, expiryDate }
 */
async function issueLC(lcId, updates = {}) {
  const data = {};
  if (updates.lcNumber) data.lcNumber = updates.lcNumber;
  if (updates.status) data.status = updates.status;
  if (updates.issueDate) data.issueDate = updates.issueDate;
  if (updates.expiryDate) data.expiryDate = updates.expiryDate;

  return prisma.lC.update({
    where: { id: lcId },
    data,
  });
}

/**
 * Attach a document to LC (presented docs)
 * @param {string} lcId
 * @param {string} documentId
 */
async function attachDocumentToLC(lcId, documentId) {
  return prisma.tradeDocument.update({
    where: { id: documentId },
    data: { lcId },
  });
}

/**
 * Get LC by id (with related docs & transactions)
 * @param {string} id
 */
async function getLCById(id) {
  return prisma.lC.findUnique({
    where: { id },
    include: {
      documents: true,
      transactions: true,
      importer: true,
      exporter: true,
      bank: true,
    },
  });
}

export default {
  applyLC,
  issueLC,
  attachDocumentToLC,
  getLCById,
};
