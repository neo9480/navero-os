import express from "express";

const router = express.Router();

// User specific routes
router.post( "/create" );
router.get( "/my" );
router.get( "/:id" );
router.get( "/:id/location" );
router.put("/:id/location"); // Update real-time co-ordinates from IoT
router.get("/:id/status");
router.put("/:id/status");  // Update shipment status

// Broker specific routes
router.put("/shipment/:id/assign-broker"); // Assign broker

export default router;