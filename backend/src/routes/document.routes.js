import express from "express";

const router = express.Router();

router.post( '/documents/upload' );
router.get( '/documents/shipments/:shipmentId' );
router.delete( '/documents/:id' );

export default router;