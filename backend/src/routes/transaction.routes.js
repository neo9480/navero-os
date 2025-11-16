import express from "express";

const router = express.Router();

router.post( '/transactions/create' );
router.get( '/transactions/:id' );
router.get( '/transactions/my' );
router.put( '/transactions/update-status' );

export default router;