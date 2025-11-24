import express from 'express'

const router = express.Router();

// Importer Bank
router.put( '/importer/lc/:id/issue' );
router.put( '/importer/lc/:id/reject' );
router.put( 'importer/documents/:id/verify' ); 
router.put( '/importer/payment/:lcId/release' );

export default router;