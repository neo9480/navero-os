import express from "express";

const router = express.Router();

router.post( '/upload' );
router.get( '/shipments/:shipmentId' );
router.delete( '/:id' );

export default router;