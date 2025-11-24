import express from "express";

const router = express.Router();

/**
 * Create a new service listing.
 * Only authenticated service providers can hit this.
 * Typical payload: service name, pricing, category, description, etc.
 */
router.post("/");

/**
 * Retrieve all services created by the currently logged-in provider.
 * Useful for dashboard views and managing listings.
 */
router.get("/my");

/**
 * Fetch details of a single service by ID.
 * Returned data usually includes provider info, pricing, and metadata.
 */
router.get("/:id");

/**
 * Update an existing service.
 * Provider can adjust price, availability, description, etc.
 */
router.put("/:id");

/**
 * Permanently delete a service listing.
 * Soft-delete or hard-delete depends on your controller logic.
 */
router.delete("/:id");

export default router;
