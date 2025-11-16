import express from "express";

const router = express.Router();

// User specific routes
router.post( '/shipments/create' );
router.get( '/shipments/my-shipments' );
router.get( '/shipments/:trackingId' );
router.get( '/shipments/location' );
router.put( '/shipments/location/update' ); // Update real-time co-ordinates from IoT
router.get( '/shipments/status' );
router.put( '/shipments/status/update' );

// Broker specific routes
router.put( '/shipment/assign-broker' );

export default router;