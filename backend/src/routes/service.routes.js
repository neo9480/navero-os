import express from "express";

const router = express.Router();

router.post( '/services/create' );
router.get( '/services/my' );
router.get( '/srvices/:id' );
router.put( '/services/update/:id' );
router.delete( '/services/delete/:id' );

export default router;