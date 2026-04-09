import prisma from "../db/prismaClient.js";
import crypto from "crypto";

async function createDocument(fileId, docType, fileUrl,filePath, userId) {
  if (!docType || !fileUrl || !userId) {
    return null;
  }
  return prisma.document.create({
    data: {
      id: fileId,
      type: docType,
      fileUrl: fileUrl,
      filePath: filePath,
      uploadedById: userId,
      // to add shipmentId and other params in body
    },
  });
}

async function findDocsById(docId) {
  return prisma.document.findFirst( {
    where: {id: docId}
  })
}

async function findDocsByUserId(userId) {
  return prisma.document.findMany( {
    where: { uploadedById: userId}
  })
}

async function updateDoc(where, data) {
  return prisma.document.update( {
    where: where,
    data: data
  })
}

export default { createDocument, findDocsById, findDocsByUserId, updateDoc };
