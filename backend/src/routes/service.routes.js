import express from "express";
import auth from "../middlewares/auth.middleware.js";
import * as serviceController from "../controllers/service.controller.js";
import {
  createServiceValidator,
  updateServiceValidator,
} from "../validators/service.validators.js";

const router = express.Router();

/**
 * Create a new service
 * Route: POST /api/services/
 * Access: PROVIDER (broker or logistics provider)
 */
router.post(
  "/",
  auth.requireUser,
  auth.requireRole(["BROKER", "EXPORTER"]), // Adjust if needed
  createServiceValidator,
  serviceController.createService,
);

/**
 * Get all services of logged-in provider
 * Route: GET /api/services/my
 * Access: PROVIDER ONLY
 */
router.get(
  "/my",
  auth.requireUser,
  auth.requireRole(["BROKER", "EXPORTER"]),
  serviceController.getMyServices,
);

/**
 * Get a single service by ID
 * Route: GET /api/services/:id
 * Access: Public
 */
router.get("/:id", serviceController.getServiceById);

/**
 * Update a service
 * Route: PUT /api/services/:id
 * Access: Provider who owns it
 */
router.put(
  "/:id",
  auth.requireUser,
  auth.requireRole(["BROKER", "EXPORTER"]),
  updateServiceValidator,
  serviceController.updateService,
);

/**
 * Delete a service
 * Route: DELETE /api/services/:id
 * Access: Provider who owns it
 */
router.delete(
  "/:id",
  auth.requireUser,
  auth.requireRole(["BROKER", "EXPORTER"]),
  serviceController.deleteService,
);

export default router;
