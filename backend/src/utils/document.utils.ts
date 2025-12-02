import prisma from "../db/prismaClient.js";

async function uploadDocument(
  userId: any,
  fileUrl: any,
  type: any,
  shipmentId: any,
  lcId: any,
) {
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

async function verifyDocument(documentId: any, userId: any) {
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
