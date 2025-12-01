import prisma from "../db/prismaClient.js";

/**
 * Create a financial transaction.
 *
 * @param {Object} params
 * @param {String} params.userId - The user performing the transaction.
 * @param {Number} params.amount - Amount in decimal / float.
 * @param {"DEBIT"|"CREDIT"} params.direction - DEBIT = money out, CREDIT = money in.
 * @param {"PAYMENT"|"REFUND"|"WALLET_TOPUP"|"SERVICE_FEE"|"LC_FEE"|"OTHER"} params.type
 * @param {"PENDING"|"SUCCESS"|"FAILED"} params.status
 * @param {String|null} params.referenceId - ID of the linked object (shipment, LC, booking, service...).
 * @param {"SHIPMENT"|"LC"|"BOOKING"|"SERVICE"|"USER"|"OTHER"|null} params.referenceType
 */
async function createTransaction({
  userId,
  amount,
  direction,
  type,
  status = "SUCCESS",
  referenceId = null,
  referenceType = "OTHER",
}) {
  if (!userId) throw new Error("Missing userId in createTransaction()");
  if (!amount || amount <= 0)
    throw new Error("Invalid amount in createTransaction()");
  if (!direction) throw new Error("Missing direction in createTransaction()");
  if (!type) throw new Error("Missing type in createTransaction()");

  const transaction = await prisma.transaction.create({
    data: {
      userId,
      amount,
      direction,
      type,
      status,
      referenceId,
      referenceType,
    },
  });

  return transaction;
}

/**
 * Fetch all transactions for a user.
 * @param {String} userId
 */
async function getUserTransactions(userId) {
  return prisma.transaction.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
}

async function getAllUserTransactions() {
  return prisma.transaction.findMany();
}

/**
 * Fetch a specific transaction by ID.
 * @param {String} transactionId
 */
async function getTransactionById(transactionId) {
  return prisma.transaction.findUnique({
    where: { id: transactionId },
  });
}

/**
 * Update transaction status (ex: marking payment as failed).
 * @param {String} transactionId
 * @param {"PENDING"|"SUCCESS"|"FAILED"} status
 */
async function updateTransactionStatus(transactionId, status) {
  return prisma.transaction.update({
    where: { id: transactionId },
    data: { status },
  });
}

export default {
  createTransaction,
  getUserTransactions,
  getAllUserTransactions,
  getTransactionById,
  updateTransactionStatus
}