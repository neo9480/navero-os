import express from "express";
import shipmentController from "../controllers/shipment.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

//  all the shipments routes, include shipment tracking.
router.get(
  "/user/:userId",
  authMiddleware,
  shipmentController.getAllUserShipment,
); // - fetch all user shipments
router.post(
  "/operations/:operationId",
  authMiddleware,
  shipmentController.createShipment,
); // - create shipment for an operation
router.get(
  "/operations/:operationId",
  authMiddleware,
  shipmentController.getAllShipmentInOperation,
); // - fetch all shipments in an operation
router.get("/:id", authMiddleware, shipmentController.getShipment); // - fetch shipments by id
router.patch("/:id", authMiddleware, shipmentController.updateShipment); // - update a shipment
router.post(
  "/:id/status",
  authMiddleware,
  shipmentController.updateShipmentStatus,
); // - update status + tracking event
router.post(
  "/:id/insurance",
  authMiddleware,
  shipmentController.createShipmentInsurance,
); // - create shipment insurance
router.post(
  "/:id/insurance/claim",
  authMiddleware,
  shipmentController.fileShipmentInsuranceClaim,
); // - file insurance claim

router.post(
  "/tracking/:shipmentId/events",
  authMiddleware,
  shipmentController.addTrackingEvent,
); // - manually add tracking event
router.get(
  "/tracking/:shipmentId/events",
  authMiddleware,
  shipmentController.getAllTrackingEvent,
); // - fetch all tracking events

export default router;
