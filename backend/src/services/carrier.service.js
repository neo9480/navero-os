// src/services/carrier.service.js
// Pluggable carrier API adapter — add new carriers by implementing the interface below.
// Each adapter must export: { supports(carrier), getLatestEvent(trackingId) }
// getLatestEvent must return: { lat, lng, location, status, message, eta } | null

import sseService from "./sse.service.js";
import prisma from "../db/prismaClient.js";

// ─── CARRIER ADAPTERS ────────────────────────────────────────────────────────

// Generic fallback — returns null (manual tracking only)
const genericAdapter = {
  supports: () => true,
  getLatestEvent: async () => null,
};

// Maersk adapter (replace with real API key + endpoint)
const maerskAdapter = {
  supports: (carrier) => carrier?.toLowerCase().includes("maersk"),
  getLatestEvent: async (trackingId) => {
    try {
      // TODO: replace with real Maersk Track & Trace API
      // const res = await fetch(`https://api.maersk.com/track/${trackingId}`, {
      //   headers: { "Consumer-Key": process.env.MAERSK_API_KEY }
      // });
      // const data = await res.json();
      // return { lat: data.lat, lng: data.lng, location: data.location, status: data.status, message: data.description }
      return null; // placeholder
    } catch {
      return null;
    }
  },
};

// MSC adapter (placeholder)
const mscAdapter = {
  supports: (carrier) => carrier?.toLowerCase().includes("msc"),
  getLatestEvent: async (trackingId) => {
    // TODO: implement MSC API
    return null;
  },
};

const ADAPTERS = [maerskAdapter, mscAdapter, genericAdapter];

function getAdapter(carrier) {
  return ADAPTERS.find((a) => a.supports(carrier)) ?? genericAdapter;
}

// ─── POLLING JOB ─────────────────────────────────────────────────────────────

const POLL_INTERVAL_MS = 60_000; // poll every 60 seconds
let pollingInterval = null;

async function pollAllActiveShipments() {
  try {
    const activeShipments = await prisma.shipment.findMany({
      where: {
        status: "CREATED",
        carrierTrackingId: { not: null },
      },
      select: {
        id: true,
        carrier: true,
        carrierTrackingId: true,
        eta: true,
      },
    });

    for (const shipment of activeShipments) {
      // Only poll if someone is watching (saves API calls)
      if (sseService.getListenerCount(shipment.id) === 0) continue;

      const adapter = getAdapter(shipment.carrier);
      const event = await adapter.getLatestEvent(shipment.carrierTrackingId);
      if (!event) continue;

      // Persist the event
      const saved = await prisma.shipmentEvent.create({
        data: {
          shipmentId: shipment.id,
          type: "LOCATION_UPDATE",
          message: event.message ?? "Location updated",
          lat: event.lat,
          lng: event.lng,
          location: event.location,
        },
      });

      // Broadcast to live listeners
      sseService.broadcast(shipment.id, {
        type: "LOCATION_UPDATE",
        event: saved,
        eta: event.eta ?? shipment.eta,
      });
    }
  } catch (err) {
    console.error("[CarrierPoller] Poll failed:", err.message);
  }
}

function startPolling() {
  if (pollingInterval) return;
  pollingInterval = setInterval(pollAllActiveShipments, POLL_INTERVAL_MS);
  console.log(
    "[CarrierPoller] Started — polling every",
    POLL_INTERVAL_MS / 1000,
    "s",
  );
}

function stopPolling() {
  if (pollingInterval) {
    clearInterval(pollingInterval);
    pollingInterval = null;
  }
}

export default { startPolling, stopPolling, getAdapter };
