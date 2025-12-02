import express from "express";

const router = express.Router();

/**
 * Respond to importer quote requests.
 * Exporter sends pricing/terms here.
 */
router.post("/quote-response");

/**
 * Get all quote responses created by this exporter.
 */
router.get("/quote-response/my");

/**
 * Upload shipment documents (invoice, packing list, BL, etc.).
 */
router.post("/docs/upload");

/**
 * Fetch all documents uploaded by this exporter.
 */
router.get("/docs/my");

/**
 * Trigger the start of shipment after documents are ready.
 */
router.post("/shipment/trigger");

/**
 * Get all shipments initiated by this exporter.
 */
router.get("/shipments/my");

export default router;
