import express from 'express'

const router = express.Router();

// Exporter Bank
router.put( '/exporter/lc/:id/advise' );
router.put( '/exporter/lc/:id/accept' );
router.put( '/exporter/documents/:id/intake' );
router.put( '/exporter/payment/:lcId/settle' );

export default router;