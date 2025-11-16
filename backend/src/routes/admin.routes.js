import express from 'express'

const router = express.Router();

// Admin auth routes
router.post( '/register' );
router.post( '/login' );

// Admin to user routes
router.get( '/user' );
router.get( '/user/:id' );
router.delete( '/user/:id' );

// Admin to shipment routes
router.get( '/shipments' );
router.get( '/shipments/:id' );
router.delete( '/shipment/:id' );

// Admin to transactions routes
router.get( '/transactions' );
router.get( '/transactions/:id' );
router.delete( '/transactions/:id' );

// Admin to services routes
router.get( '/services' );
router.get( '/services/:id' );
router.delete( '/services/:id' );

// Admin to bookings routes
router.get( '/bookings' );
router.get( '/bookings/:id' );
router.delete( '/bookings/:id' );

// Admin web-stats routes
router.get( '/stats' );

export default router;