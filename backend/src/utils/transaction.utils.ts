import prisma from "../db/prismaClient.js";

/**
 * Create a financial transaction.
 *
 * @param {Object} params
 * @param {String} params.userId - The user performing the transaction.
 * @param {Number} params.amount - Amount in decimal / float.
 * @param {"DEBIT"|"CREDIT"} params.direction - DEBIT = money out, CREDIT = money in.
 * @param {"SERVICE_PAYMENT"|"BOOKING_PAYMENT"|"LC_FEE"|"SHIPMENT_FEE"|"SUBSCRIPTION_FEE"} params.type
 * @param {"PENDING"|"COMPLETED"|"FAILED"|"CANCELLED"} params.status
 * @param {String|null} params.referenceId - ID of the linked object (shipment, LC, booking, service...).
 * @param {"SHIPMENT"|"LC"|"BOOKING"|"SERVICE"|"OTHER"|null} params.referenceType
 */
async function createTransaction({
  userId,
  amount,
  direction,
  type,
  status = "PENDING",
  referenceId = null,
  referenceType = "OTHER",
}: {
  userId: string;
  amount: number;
  direction: "DEBIT" | "CREDIT";
  type:
    | "SERVICE_PAYMENT"
    | "BOOKING_PAYMENT"
    | "LC_FEE"
    | "SHIPMENT_FEE"
    | "SUBSCRIPTION_FEE";
  status?: "PENDING" | "COMPLETED" | "FAILED" | "CANCELLED";
  referenceId?: string | null;
  referenceType?: "SHIPMENT" | "LC" | "BOOKING" | "SERVICE" | "OTHER" | null;
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
async function getUserTransactions(userId: string) {
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
async function getTransactionById(transactionId: string) {
  return prisma.transaction.findUnique({
    where: { id: transactionId },
  });
}

/**
 * Update transaction status (ex: marking payment as failed).
 * @param {String} transactionId
 * @param {"PENDING"|"COMPLETED"|"FAILED"|"CANCELLED"} status
 */
async function updateTransactionStatus(
  transactionId: string,
  status: "PENDING" | "COMPLETED" | "FAILED" | "CANCELLED",
) {
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
  updateTransactionStatus,
};
