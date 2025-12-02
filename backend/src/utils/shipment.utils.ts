import prisma from "../db/prismaClient.js";

async function createShipment(
  importerId: string,
  exporterId: string,
  brokerId: string,
  serviceId: string,
  etd: Date,
  eta: Date,
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

async function getShipmentById(id: string) {
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

async function getImporterShipments(userId: string) {
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

async function getExporterShipments(userId: string) {
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

async function getBrokerShipments(userId: string) {
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

async function deleteShipment(id: string) {
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
  deleteShipment,
};
