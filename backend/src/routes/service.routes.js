import express from "express";

const router = express.Router();

/**
 * Create a new service
 * Route: POST /api/services/
 * Access: PROVIDER (broker or logistics provider)
 */
router.post("/");

/**
 * Get all services of logged-in provider
 * Route: GET /api/services/my
 * Access: PROVIDER ONLY
 */
router.get("/my");

/**
 * Get a single service by ID
 * Route: GET /api/services/:id
 * Access: Public
 */
router.get("/:id");

/**
 * Update a service
 * Route: PUT /api/services/:id
 * Access: Provider who owns it
 */
router.put("/:id");

/**
 * Delete a service
 * Route: DELETE /api/services/:id
 * Access: Provider who owns it
 */
router.delete("/:id");

export default router;
