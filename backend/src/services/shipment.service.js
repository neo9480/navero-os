import prisma from "../db/prismaClient.js";

async function createShipment(
  importerId,
  exporterId,
  brokerId,
  serviceId,
  etd,
  eta,
) {
  return prisma.shipment.create({
    data: {
      importerId,
      exporterId,
      brokerId,
      serviceId,
      etd,
      eta,
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
  return prisma.shipment.findMany({
    include: {
      importer: true,
      exporter: true,
      broker: true,
      service: true,
    },
  });
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
  deleteShipment,
};
