import express from 'express'

const router = express.Router();

// Public routes
router.post( '/user/register' );
router.post( '/user/login' );

// Protected routes
router.get( '/user/logout' );
router.get( '/user/profile' );
router.put( '/user/profile/update' );

// Admin auth routes
router.post( '/admin/register' );
router.post( '/admin/login' );

export default router;