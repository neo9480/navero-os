import prisma from "../db/prismaClient.js";

async function createOperation(data) {
  return await prisma.operations.create({
    data: data,
  });
}

async function findOperationById(id) {
  return prisma.operations.findUnique({
    where: { id: id },
  });
}

async function getImporterOperations(id) {
  return prisma.operations.findMany({
    where: { importerId: id },
  });
}

async function updateOperation(operationId, data) {
  return prisma.operations.update( {
    where: { id: operationId },
    data: data
  } );
}

export default { createOperation, findOperationById, updateOperation };
