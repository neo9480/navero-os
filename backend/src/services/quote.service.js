import prisma from "../db/prismaClient.js";

/**
 * Quote Request & Response service
 * - Importers create QuoteRequest
 * - Exporters create QuoteResponse tied to a QuoteRequest
 */

/**
 * Create a quote request (importer)
 * @param {Object} payload
 * @param {string} payload.importerId
 * @param {string} payload.productName
 * @param {number} payload.quantity
 * @param {string} [payload.unit]
 * @param {string} [payload.incoterm]
 * @param {string} [payload.originCountry]
 * @param {string} [payload.destCountry]
 */
async function createQuoteRequest(payload) {
  return prisma.quoteRequest.create({
    data: payload,
  });
}

/**
 * List quote requests for an importer
 * @param {string} importerId
 */
async function listQuoteRequestsForImporter(importerId) {
  return prisma.quoteRequest.findMany({
    where: { importerId },
    orderBy: { createdAt: "desc" },
    include: { responses: true },
  });
}

/**
 * Exporter responds to a quote
 * @param {Object} payload
 * @param {string} payload.quoteRequestId
 * @param {string} payload.exporterId
 * @param {number} payload.price
 * @param {number} [payload.validityDays]
 * @param {string} [payload.notes]
 */
async function respondToQuote(payload) {
  // Basic existance check
  const qr = await prisma.quoteRequest.findUnique({
    where: { id: payload.quoteRequestId },
  });
  if (!qr) throw new Error("QUOTE_REQUEST_NOT_FOUND");

  return prisma.quoteResponse.create({ data: payload });
}

/**
 * Get responses for a quote request
 * @param {string} quoteRequestId
 */
async function getResponsesForRequest(quoteRequestId) {
  return prisma.quoteResponse.findMany({
    where: { quoteRequestId },
    orderBy: { createdAt: "asc" },
    include: {
      exporter: { select: { id: true, email: true, companyName: true } },
    },
  });
}

export default {
  createQuoteRequest,
  listQuoteRequestsForImporter,
  respondToQuote,
  getResponsesForRequest,
};
