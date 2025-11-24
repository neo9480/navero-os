import express from "express";

const router = express.Router();

router.post( '/upload' );
router.get( '/:shipmentId' );
router.put( '/:id' ); // For Broker
router.put( '/:id/submit-to-bank' );
router.put( '/:id/submit-to-customs' );
router.post("/lc/apply");
router.get("/lc/my");
router.get("/lc/:id");

router.delete( '/:id' );

export default router;