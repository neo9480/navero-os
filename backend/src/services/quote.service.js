import prisma from "../db/prismaClient.js";

// Importer creates quote request
async function createQuoteRequest(importerId, payload) {
  return prisma.quoteRequest.create({
    data: {
      importerId,
      ...payload,
    },
  });
}

// Exporter responds
async function createQuoteResponse(exporterId, quoteRequestId, payload) {
  return prisma.quoteResponse.create({
    data: {
      exporterId,
      quoteRequestId,
      ...payload,
    },
  });
}

export default {
  createQuoteRequest,
  createQuoteResponse,
};
