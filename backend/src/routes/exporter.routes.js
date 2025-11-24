import express from 'express'

const router = express.Router();

router.post( '/quotes/:id/respond' );
router.put( '/quotes/:id/update-response' );

export default router;