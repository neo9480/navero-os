import prisma from "../db/prismaClient.js";

/**
 * Shipment service: create shipments, assign broker, add events, link documents.
 */

/**
 * Create a shipment (exporter)
 * payload should include: exporterId, importerId (optional), origin, destination, serviceId (optional), vessel/airway fields
 */
async function createShipment(payload) {
  const data = {
    exporterId: payload.exporterId,
    importerId: payload.importerId || null,
    brokerId: payload.brokerId || null,
    serviceId: payload.serviceId || null,
    origin: payload.origin,
    destination: payload.destination,
    vesselName: payload.vesselName || null,
    airwayBill: payload.airwayBill || null,
    etd: payload.etd || null,
    eta: payload.eta || null,
  };

  return prisma.shipment.create({ data });
}

/**
 * Assign a broker to a shipment
 * @param {string} shipmentId
 * @param {string} brokerId
 */
async function assignBroker(shipmentId, brokerId) {
  return prisma.shipment.update({
    where: { id: shipmentId },
    data: { brokerId },
  });
}

/**
 * Add an event to a shipment (customs update, document verified, etc.)
 * @param {string} shipmentId
 * @param {Object} payload { userId, type, message }
 */
async function addShipmentEvent(
  shipmentId,
  { userId = null, type, message = null },
) {
  return prisma.shipmentEvent.create({
    data: {
      shipmentId,
      userId,
      type,
      message,
    },
  });
}

/**
 * Get shipments by exporter or importer
 * @param {Object} opts { exporterId, importerId, brokerId }
 */
async function findShipments({ exporterId, importerId, brokerId } = {}) {
  const where = {};
  if (exporterId) where.exporterId = exporterId;
  if (importerId) where.importerId = importerId;
  if (brokerId) where.brokerId = brokerId;

  return prisma.shipment.findMany({
    where,
    orderBy: { createdAt: "desc" },
    include: { documents: true, events: true, service: true },
  });
}

export default {
  createShipment,
  assignBroker,
  addShipmentEvent,
  findShipments,
};
