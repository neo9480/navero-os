import express from "express";

const router = express.Router();

router.post( '/create' );
router.get( '/:id' );
router.get( '/my' );
router.put( '/:id/update-status' );

export default router;