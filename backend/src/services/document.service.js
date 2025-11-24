import prisma from "../db/prismaClient.js";

/**
 * Document service:
 * - upload trade documents referencing shipment or LC
 * - verify documents (broker/bank/customs)
 */

/**
 * Upload a document and attach to shipment or LC
 * @param {Object} payload { uploadedById, type, fileUrl, shipmentId?, lcId?, metadata? }
 */
async function uploadDocument({
  uploadedById,
  type,
  fileUrl,
  shipmentId = null,
  lcId = null,
  metadata = null,
}) {
  return prisma.tradeDocument.create({
    data: {
      uploaderId: uploadedById,
      type,
      fileUrl,
      shipmentId,
      lcId,
      metadata,
    },
  });
}

/**
 * Get documents for a shipment
 * @param {string} shipmentId
 */
async function getDocumentsByShipment(shipmentId) {
  return prisma.tradeDocument.findMany({
    where: { shipmentId },
    orderBy: { createdAt: "desc" },
    include: {
      uploadedBy: { select: { id: true, email: true, companyName: true } },
    },
  });
}

/**
 * Mark document as verified and set verifier
 * @param {string} documentId
 * @param {string} verifierId
 */
async function verifyDocument(documentId, verifierId) {
  return prisma.tradeDocument.update({
    where: { id: documentId },
    data: {
      verified: true,
      verifiedById: verifierId,
    },
  });
}

/**
 * Delete a document
 * @param {string} documentId
 */
async function deleteDocument(documentId) {
  return prisma.tradeDocument.delete({ where: { id: documentId } });
}

export default {
  uploadDocument,
  getDocumentsByShipment,
  verifyDocument,
  deleteDocument,
};
