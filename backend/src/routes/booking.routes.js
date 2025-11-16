import express from "express";

const router = express.Router();

router.post( '/bookings/create' );
router.get( '/bookings/my' );
router.put( '/bookings/update/:id' );
router.delete( '/bookings/delete/:id' );

export default router;