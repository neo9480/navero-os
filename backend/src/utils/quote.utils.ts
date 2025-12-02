import prisma from "../db/prismaClient.js";

// Importer creates quote request
async function createQuoteRequest(importerId: any, payload: any) {
  return prisma.quoteRequest.create({
    data: {
      importerId,
      ...payload,
    },
  });
}

// Exporter responds
async function createQuoteResponse(
  exporterId: any,
  quoteRequestId: any,
  payload: any,
) {
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
