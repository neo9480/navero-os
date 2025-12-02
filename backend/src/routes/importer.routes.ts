import express from "express";

const router = express.Router();

/**
 * Create a new quote request.
 * Importer sends product details, quantity, incoterms, etc.
 * Exporters will later respond to this request.
 */
router.post("/quote-request");

/**
 * Fetch all quote requests made by this importer,
 * including responses received from exporters.
 */
router.get("/quotes/my");

/**
 * Submit an LC (Letter of Credit) application to importer’s bank.
 * Usually includes proforma invoice, contract details, and terms.
 */
router.post("/lc/apply");

/**
 * Get all LC applications submitted by this importer,
 * along with their current status (pending, issued, rejected).
 */
router.get("/lc/my");

/**
 * Fetch all shipments linked to this importer.
 * Includes status updates from exporter, broker, and customs.
 */
router.get("/shipments/my");

/**
 * Fetch details of a specific shipment by ID.
 */
router.get("/shipment/:id");

export default router;
