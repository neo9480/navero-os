import prisma from "../db/prismaClient.js";

async function createShipment(
  importerId,
  exporterId,
  brokerId,
  serviceId,
  operationId,
  carrier,
  origin,
  destination,
  documents,
) {
  return prisma.shipment.create({
    data: {
      importerId,
      exporterId,
      brokerId,
      serviceId,
      operationId,
      carrier,
      origin,
      destination,
      documents,
    },
  });
}

async function getShipmentById(id) {
  return prisma.shipment.findUnique({
    where: { id },
    include: {
      importer: true,
      exporter: true,
      broker: true,
      service: true,
      events: true,
      documents: true,
    },
  });
}

async function getShipments() {
  return prisma.shipment.findMany({orderBy: createdAt});
}

async function getImporterShipments(userId) {
  return prisma.shipment.findMany({
    where: { importerId: userId },
    include: {
      importer: true,
      exporter: true,
      broker: true,
      service: true,
      events: true,
      documents: true,
    },
  });
}

async function getExporterShipments(userId) {
  return prisma.shipment.findMany({
    where: { exporterId: userId },
    include: {
      importer: true,
      exporter: true,
      broker: true,
      service: true,
      events: true,
      documents: true,
    },
  });
}

async function getBrokerShipments(userId) {
  return prisma.shipment.findMany({
    where: { brokerId: userId },
    include: {
      importer: true,
      exporter: true,
      broker: true,
      service: true,
      events: true,
      documents: true,
    },
  });
}

async function getAllShipmentInOperation(id) {
  return prisma.shipment.findMany( {
    where: { operationId: id },
  })
}

async function deleteShipment(id) {
  return prisma.shipment.delete({
    where: { id },
  });
}

export default {
  createShipment,
  getShipmentById,
  getShipments,
  getImporterShipments,
  getExporterShipments,
  getBrokerShipments,
  getAllShipmentInOperation,
  deleteShipment,
};
