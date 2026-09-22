// src/routes/shipment.routes.js — full replacement

import express from "express";
import shipmentController from "../controllers/shipment.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// ─── SHIPMENT CRUD ───────────────────────────────────────────────────────────
router.get(
  "/user/:userId",
  authMiddleware,
  shipmentController.getAllUserShipment,
);
router.post(
  "/operations/:operationId",
  authMiddleware,
  shipmentController.createShipment,
);
router.get(
  "/operations/:operationId",
  authMiddleware,
  shipmentController.getAllShipmentInOperation,
);
router.get("/:id", authMiddleware, shipmentController.getShipment);
router.patch("/:id", authMiddleware, shipmentController.updateShipment);
router.post(
  "/:id/status",
  authMiddleware,
  shipmentController.updateShipmentStatus,
);
router.post(
  "/:id/insurance",
  authMiddleware,
  shipmentController.createShipmentInsurance,
);
router.post(
  "/:id/insurance/claim",
  authMiddleware,
  shipmentController.fileShipmentInsuranceClaim,
);

// ─── TRACKING EVENTS (REST) ──────────────────────────────────────────────────
router.post(
  "/tracking/:shipmentId/events",
  authMiddleware,
  shipmentController.addTrackingEvent,
);
router.get(
  "/tracking/:shipmentId/events",
  authMiddleware,
  shipmentController.getAllTrackingEvent,
);

// ─── LIVE STREAM (SSE) ───────────────────────────────────────────────────────
// The browser opens this and keeps it alive. Server pushes JSON events.
// Auth token should be passed as ?token=<accessToken> since EventSource
// doesn't support custom headers natively.
router.get(
  "/tracking/:shipmentId/stream",
  authMiddleware,
  shipmentController.streamTracking,
);

export default router;
