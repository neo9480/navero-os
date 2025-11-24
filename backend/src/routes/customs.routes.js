import express from 'express'

const router = express.Router();

// Customs
router.post( '/submit/:shipmentId' );
router.get( '/status/:shipmentId' );
router.post( '/webhook' );

export default router;