import express from "express"
import shipmentController from "../controllers/shipment.controller.js"

const router = express.Router()

//  all the shipments routes, include shipment tracking.
router.get("/user/:userId", shipmentController.getAllUserShipment) // - fetch all user shipments
router.post( "/operations/:operationId", shipmentController.createShipment ) // - create shipment for an operation
router.get( "/operations/:operationId", shipmentController.getAllShipmentInOperation ) // - fetch all shipments in an operation
router.get( "/:id", shipmentController.getShipment ) // - fetch shipments by id
router.patch( "/:id", shipmentController.updateShipment ) // - update a shipment
router.post( "/:id/status", shipmentController.updateShipmentStatus ) // - update status + tracking event
router.post("/:id/insurance", shipmentController.createShipmentInsurance) // - create shipment insurance
router.post( "/:id/insurance/claim", shipmentController.fileShipmentInsuranceClaim ) // - file insurance claim

router.post( "/tracking/:shipmentId/events", shipmentController.addTrackingEvent ) // - manually add tracking event
router.get( "/tracking/:shipmentId/events", shipmentController.getAllTrackingEvent ) // - fetch all tracking events

export default router;
