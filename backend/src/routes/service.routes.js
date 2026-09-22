import express from "express";
import serviceController from "../controllers/service.controller.js";

const router = express.Router();

/**
 * Create a new service
 * Route: POST /api/services/
 * Access: PROVIDER (broker or logistics provider)
 */
router.post("/", serviceController.createService);

/**
 * Get all services of logged-in provider
 * Route: GET /api/services/my
 * Access: PROVIDER ONLY
 */
router.get("/my", serviceController.getAllService);

/**
 * Get a single service by ID
 * Route: GET /api/services/:id
 * Access: Public
 */
router.get("/:id", serviceController.getService);

/**
 * Update a service
 * Route: PUT /api/services/:id
 * Access: Provider who owns it
 */
router.put("/:id", serviceController.updateService);

/**
 * Delete a service
 * Route: DELETE /api/services/:id
 * Access: Provider who owns it
 */
router.delete("/:id", serviceController.deleteService);

export default router;
