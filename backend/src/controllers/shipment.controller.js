// src/controllers/shipment.controller.js
// Full file — replaces your existing one.

import serviceUtils from "../utils/service.utils.js";
import shipmentUtils from "../utils/shipment.utils.js";
import userUtils from "../utils/user.utils.js";
import sseService from "../services/sse.service.js";
import emailService from "../services/email.service.js";

// ─── EXISTING CONTROLLERS (unchanged) ────────────────────────────────────────

async function createShipment(req, res) {
  try {
    const {
      importerId,
      exporterId,
      brokerId,
      serviceId,
      carrier,
      origin,
      destination,
    } = req.body;
    const operationId = req.params.operationId;

    if (
      !importerId ||
      !exporterId ||
      !carrier ||
      !origin ||
      !destination ||
      !operationId
    ) {
      return res.status(400).json({ message: "Incomplete information" });
    }

    const importer = await userUtils.findUserById(importerId);
    if (!importer)
      return res
        .status(400)
        .json({ message: "Importer by this id does not exist" });

    const exporter = await userUtils.findUserById(exporterId);
    if (!exporter)
      return res
        .status(400)
        .json({ message: "Exporter by this id does not exist" });

    if (brokerId) {
      const broker = await userUtils.findUserById(brokerId);
      if (!broker)
        return res
          .status(400)
          .json({ message: "Broker by this id does not exist" });
    }

    if (serviceId) {
      const service = await serviceUtils.getServiceById(serviceId);
      if (!service)
        return res
          .status(400)
          .json({ message: "Service by this id does not exist" });
    }

    const shipment = await shipmentUtils.createShipment(
      importerId,
      exporterId,
      brokerId,
      serviceId,
      operationId,
      carrier,
      origin,
      destination,
    );

    // Geocode origin + destination in the background (don't block response)
    Promise.all([
      shipmentUtils.geocodeLocation(origin),
      shipmentUtils.geocodeLocation(destination),
    ]).then(([originCoords, destCoords]) => {
      if (originCoords || destCoords) {
        shipmentUtils
          .updateShipmentTracking(shipment.id, {
            originLat: originCoords?.lat,
            originLng: originCoords?.lng,
            destLat: destCoords?.lat,
            destLng: destCoords?.lng,
          })
          .catch(console.error);
      }
    });

    return res
      .status(200)
      .json({ message: "Shipment created successfully", shipment });
  } catch (err) {
    console.error("Failed to create a shipment", err);
    return res.status(400).json({ message: "Failed to create a shipment" });
  }
}

async function getAllUserShipment(req, res) {
  try {
    const userId = req.params.userId;
    if (!userId) return res.status(400).json({ message: "userId is required" });

    const user = await userUtils.findUserById(userId);
    if (!user) return res.status(400).json({ message: "User not found" });

    const getShipments = async () => {
      if ( user.role === "IMPORTER" )
        return await shipmentUtils.getImporterShipments( userId );
      else if ( user.role === "EXPORTER" )
        return await shipmentUtils.getExporterShipments( userId );
      else if ( user.role === "BROKER" )
        return await shipmentUtils.getBrokerShipments( userId );
    }
    const shipments = await getShipments()
    return res
      .status(200)
      .json({ message: "Shipments fetched successfully", shipment: shipments });
  } catch (err) {
    console.error("Failed to fetch shipments for user", err);
    return res
      .status(400)
      .json({ message: "Failed to fetch shipments for user" });
  }
}

async function getAllShipmentInOperation(req, res) {
  try {
    const operationId = req.params.operationId;
    if (!operationId)
      return res.status(400).json({ message: "Operation id is required" });

    const shipment = await shipmentUtils.getAllShipmentInOperation(operationId);
    if (!shipment)
      return res
        .status(404)
        .json({ message: "No shipment for this operation found" });

    return res
      .status(200)
      .json({
        message: "Successfully fetched shipments in the operation",
        shipment,
      });
  } catch (err) {
    console.error("Failed to get shipments in this operation", err);
    return res
      .status(400)
      .json({ message: "Failed to get shipments in this operation" });
  }
}

// ─── NEW / COMPLETED CONTROLLERS ─────────────────────────────────────────────

/**
 * GET /shipments/:id
 * Fetch a single shipment with full tracking history + geocoords
 */
async function getShipment(req, res) {
  try {
    const shipment = await shipmentUtils.getShipmentWithTracking(req.params.id);
    if (!shipment)
      return res.status(404).json({ message: "Shipment not found" });

    // Auth guard: only parties on the shipment can view it
    const uid = req.user.id;
    const allowed = [
      shipment.importerId,
      shipment.exporterId,
      shipment.brokerId,
    ].filter(Boolean);
    if (
      !allowed.includes(uid) &&
      req.user.role !== "SUPER_ADMIN" &&
      req.user.role !== "ADMIN"
    ) {
      return res.status(403).json({ message: "Access denied" });
    }

    return res.status(200).json({ message: "Shipment fetched", shipment });
  } catch (err) {
    console.error("Failed to get shipment", err);
    return res.status(400).json({ message: "Failed to get shipment" });
  }
}

/**
 * PATCH /shipments/:id
 * Update carrier, ETA, carrierTrackingId
 */
async function updateShipment(req, res) {
  try {
    const { eta, carrierTrackingId, carrier, origin, destination } = req.body;
    const { id } = req.params;

    // If origin/destination changed, re-geocode
    if (origin || destination) {
      const [oCoords, dCoords] = await Promise.all([
        origin ? shipmentUtils.geocodeLocation(origin) : Promise.resolve(null),
        destination ?
          shipmentUtils.geocodeLocation(destination)
        : Promise.resolve(null),
      ]);
      await shipmentUtils.updateShipmentTracking(id, {
        ...(oCoords && { originLat: oCoords.lat, originLng: oCoords.lng }),
        ...(dCoords && { destLat: dCoords.lat, destLng: dCoords.lng }),
      });
    }

    const updated = await shipmentUtils.updateShipmentTracking(id, {
      eta,
      carrierTrackingId,
    });
    return res
      .status(200)
      .json({ message: "Shipment updated", shipment: updated });
  } catch (err) {
    console.error("Failed to update shipment", err);
    return res.status(400).json({ message: "Failed to update shipment" });
  }
}

/**
 * POST /shipments/:id/status
 * Update ShipmentStatus (CREATED → COMPLETED) and emit event
 */
async function updateShipmentStatus(req, res) {
  try {
    const { status, message } = req.body;
    const { id } = req.params;

    const shipment = await shipmentUtils.getShipmentWithTracking(id);
    if (!shipment)
      return res.status(404).json({ message: "Shipment not found" });

    // Map status to event type
    const statusToEvent = {
      COMPLETED: "DELIVERED",
    };
    const eventType = statusToEvent[status] ?? "IN_TRANSIT";

    const event = await shipmentUtils.addTrackingEvent(id, {
      type: eventType,
      message: message ?? `Status changed to ${status}`,
      userId: req.user.id,
    });

    // Broadcast live update
    sseService.broadcast(id, {
      type: eventType,
      event,
      shipmentStatus: status,
    });

    // Email notification to importer
    try {
      await emailService.sendEmail({
        to: shipment.importer.email,
        subject: `Shipment Update — ${shipment.origin} → ${shipment.destination}`,
        html: `
          <p>Hi ${shipment.importer.companyName ?? "there"},</p>
          <p>Your shipment status has been updated to <strong>${status}</strong>.</p>
          ${message ? `<p>${message}</p>` : ""}
          <p>Track it live on the Navero platform.</p>
        `,
      });
    } catch (emailErr) {
      console.warn("Email notification failed:", emailErr.message);
    }

    return res.status(200).json({ message: "Status updated", event });
  } catch (err) {
    console.error("Failed to update shipment status", err);
    return res
      .status(400)
      .json({ message: "Failed to update shipment status" });
  }
}

/**
 * POST /shipments/tracking/:shipmentId/events
 * Manually add a tracking event (operator/customs use)
 * Body: { type, message, lat, lng, location }
 */
async function addTrackingEvent(req, res) {
  try {
    const { shipmentId } = req.params;
    const { type, message, lat, lng, location } = req.body;

    if (!type)
      return res.status(400).json({ message: "Event type is required" });

    const VALID_TYPES = [
      "IN_TRANSIT",
      "CUSTOMS_HOLD",
      "DELIVERED",
      "DELAYED",
      "LOCATION_UPDATE",
      "PICKED_UP",
      "OUT_FOR_DELIVERY",
    ];
    if (!VALID_TYPES.includes(type)) {
      return res
        .status(400)
        .json({
          message: `Invalid event type. Valid: ${VALID_TYPES.join(", ")}`,
        });
    }

    const shipment = await shipmentUtils.getShipmentWithTracking(shipmentId);
    if (!shipment)
      return res.status(404).json({ message: "Shipment not found" });

    const event = await shipmentUtils.addTrackingEvent(shipmentId, {
      type,
      message,
      lat,
      lng,
      location,
      userId: req.user.id,
    });

    // Broadcast to all live listeners
    sseService.broadcast(shipmentId, { type, event, eta: shipment.eta });

    // Email on significant status changes (not every location ping)
    const notifyTypes = [
      "IN_TRANSIT",
      "CUSTOMS_HOLD",
      "DELIVERED",
      "DELAYED",
      "PICKED_UP",
    ];
    if (notifyTypes.includes(type)) {
      try {
        await emailService.sendEmail({
          to: shipment.importer.email,
          subject: `Shipment Alert: ${type.replace(/_/g, " ")} — ${shipment.origin} → ${shipment.destination}`,
          html: `
            <p>Hi ${shipment.importer.companyName ?? "there"},</p>
            <p>Update on your shipment: <strong>${type.replace(/_/g, " ")}</strong></p>
            ${location ? `<p>Location: ${location}</p>` : ""}
            ${message ? `<p>${message}</p>` : ""}
            <p>Track it live on the Navero platform.</p>
          `,
        });
      } catch (emailErr) {
        console.warn("Email notification failed:", emailErr.message);
      }
    }

    return res.status(200).json({ message: "Tracking event added", event });
  } catch (err) {
    console.error("Failed to add tracking event", err);
    return res.status(400).json({ message: "Failed to add tracking event" });
  }
}

/**
 * GET /shipments/tracking/:shipmentId/events
 * Fetch full event history for a shipment
 */
async function getAllTrackingEvent(req, res) {
  try {
    const { shipmentId } = req.params;

    const shipment = await shipmentUtils.getShipmentWithTracking(shipmentId);
    if (!shipment)
      return res.status(404).json({ message: "Shipment not found" });

    // Auth guard
    const uid = req.user.id;
    const allowed = [
      shipment.importerId,
      shipment.exporterId,
      shipment.brokerId,
    ].filter(Boolean);
    if (
      !allowed.includes(uid) &&
      req.user.role !== "SUPER_ADMIN" &&
      req.user.role !== "ADMIN"
    ) {
      return res.status(403).json({ message: "Access denied" });
    }

    const events = await shipmentUtils.getTrackingEvents(shipmentId);
    return res
      .status(200)
      .json({ message: "Events fetched", events, shipment });
  } catch (err) {
    console.error("Failed to get tracking events", err);
    return res.status(400).json({ message: "Failed to get tracking events" });
  }
}

/**
 * GET /shipments/tracking/:shipmentId/stream
 * Server-Sent Events stream for live tracking updates
 * The browser keeps this connection open; server pushes events as they happen.
 */
async function streamTracking(req, res) {
  const { shipmentId } = req.params;

  // Verify access
  const shipment = await shipmentUtils.getShipmentWithTracking(shipmentId);
  if (!shipment) return res.status(404).json({ message: "Shipment not found" });

  const uid = req.user.id;
  const allowed = [
    shipment.importerId,
    shipment.exporterId,
    shipment.brokerId,
  ].filter(Boolean);
  if (
    !allowed.includes(uid) &&
    req.user.role !== "SUPER_ADMIN" &&
    req.user.role !== "ADMIN"
  ) {
    return res.status(403).json({ message: "Access denied" });
  }

  // SSE headers
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("X-Accel-Buffering", "no"); // disable Nginx buffering
  res.flushHeaders();

  // Send initial snapshot immediately
  res.write(
    `data: ${JSON.stringify({
      type: "SNAPSHOT",
      shipment: {
        id: shipment.id,
        origin: shipment.origin,
        destination: shipment.destination,
        originLat: shipment.originLat,
        originLng: shipment.originLng,
        destLat: shipment.destLat,
        destLng: shipment.destLng,
        eta: shipment.eta,
        etd: shipment.etd,
        carrier: shipment.carrier,
        carrierTrackingId: shipment.carrierTrackingId,
        status: shipment.status,
      },
      events: shipment.events,
    })}\n\n`,
  );

  // Heartbeat every 25s to keep connection alive through proxies
  const heartbeat = setInterval(() => {
    res.write(": heartbeat\n\n");
  }, 25_000);

  // Register this client
  sseService.addClient(shipmentId, res);

  // Clean up on disconnect
  req.on("close", () => {
    clearInterval(heartbeat);
    sseService.removeClient(shipmentId, res);
  });
}

// Stubs (implement when needed)
async function createShipmentInsurance(req, res) {
  return res.status(501).json({ message: "Not implemented yet" });
}
async function fileShipmentInsuranceClaim(req, res) {
  return res.status(501).json({ message: "Not implemented yet" });
}

export default {
  createShipment,
  getAllUserShipment,
  getAllShipmentInOperation,
  getShipment,
  updateShipment,
  updateShipmentStatus,
  createShipmentInsurance,
  fileShipmentInsuranceClaim,
  addTrackingEvent,
  getAllTrackingEvent,
  streamTracking,
};
