import express from "express";

const router = express.Router();

/**
 * Check the current customs status of a shipment.
 * Used by internal systems to poll clearance progress.
 */
router.get("/status/:shipmentId");

/**
 * Receive customs events (clearance, holds, inspections, etc.).
 * Works like a webhook endpoint for external customs systems.
 */
router.post("/event");

export default router;
