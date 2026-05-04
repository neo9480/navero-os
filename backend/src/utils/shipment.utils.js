// src/utils/shipment.utils.js  — ADD these functions to your existing file

import prisma from "../db/prismaClient.js";

// ─── EXISTING FUNCTIONS (keep them) ─────────────────────────────────────────
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

async function getImporterShipments(userId) {
  return prisma.shipment.findMany({
    where: { importerId: userId },
  });
}

async function getExporterShipments(userId) {
  return prisma.shipment.findMany({
    where: { exporterId: userId },
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

async function deleteShipment(id) {
  return prisma.shipment.delete({
    where: { id },
  });
}

// ─── NEW TRACKING UTILS ──────────────────────────────────────────────────────

/**
 * Geocode a place name → { lat, lng } using OpenStreetMap Nominatim (free, no key)
 * Call this once when creating/updating a shipment, store results on Shipment row.
 */
async function geocodeLocation(placeName) {
  try {
    const encoded = encodeURIComponent(placeName);
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encoded}&format=json&limit=1`,
      { headers: { "User-Agent": "NaveroOS/1.0" } },
    );
    const data = await res.json();
    if (data.length === 0) return null;
    return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
  } catch {
    return null;
  }
}

/**
 * Add a tracking event (manual or from carrier).
 * Also broadcasts via SSE if listeners exist.
 */
async function addTrackingEvent(
  shipmentId,
  { type, message, lat, lng, location, userId },
) {
  const event = await prisma.shipmentEvent.create({
    data: {
      shipmentId,
      userId: userId ?? null,
      type,
      message: message ?? null,
      lat: lat ?? null,
      lng: lng ?? null,
      location: location ?? null,
    },
    include: { user: { select: { companyName: true, email: true } } },
  });
  return event;
}

/**
 * Get all tracking events for a shipment, ordered chronologically.
 */
async function getTrackingEvents(shipmentId) {
  return prisma.shipmentEvent.findMany({
    where: { shipmentId },
    orderBy: { createdAt: "asc" },
    include: { user: { select: { companyName: true, email: true } } },
  });
}

/**
 * Get a single shipment with full tracking data including geocoded coords.
 */
async function getShipmentWithTracking(shipmentId) {
  return prisma.shipment.findUnique({
    where: { id: shipmentId },
    include: {
      events: {
        orderBy: { createdAt: "asc" },
        include: { user: { select: { companyName: true } } },
      },
      importer: { select: { companyName: true, email: true } },
      exporter: { select: { companyName: true, email: true } },
      broker: { select: { companyName: true, email: true } },
    },
  });
}

/**
 * Update shipment ETA and/or carrierTrackingId
 */
async function updateShipmentTracking(
  shipmentId,
  { eta, carrierTrackingId, originLat, originLng, destLat, destLng },
) {
  return prisma.shipment.update({
    where: { id: shipmentId },
    data: {
      ...(eta !== undefined && { eta: new Date(eta) }),
      ...(carrierTrackingId && { carrierTrackingId }),
      ...(originLat !== undefined && { originLat }),
      ...(originLng !== undefined && { originLng }),
      ...(destLat !== undefined && { destLat }),
      ...(destLng !== undefined && { destLng }),
    },
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
  geocodeLocation,
  addTrackingEvent,
  getTrackingEvents,
  getShipmentWithTracking,
  updateShipmentTracking,
};
