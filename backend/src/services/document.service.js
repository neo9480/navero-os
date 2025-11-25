import prisma from "../db/prismaClient.js";

async function uploadDocument(userId, fileUrl, type, shipmentId, lcId) {
  return prisma.document.create({
    data: {
      uploadedById: userId,
      fileUrl,
      type,
      shipmentId,
      lcId,
    },
  });
}

async function verifyDocument(documentId, userId) {
  return prisma.document.update({
    where: { id: documentId },
    data: {
      verified: true,
      verifiedById: userId,
    },
  });
}

export default {
  uploadDocument,
  verifyDocument,
};
