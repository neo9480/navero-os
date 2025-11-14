import express from 'express'
import authController from '../controllers/auth.controller.js'

const router = express.Router();

// Public routes
router.post( '/user/register', authController.registerUser );
router.post('/user/login', authController.loginUser);

// // Protected routes
// router.get( '/user/logout' );
// router.get( '/user/profile' );
// router.put( '/user/profile/update' );

// // Admin auth routes
// router.post( '/admin/register' );
// router.post( '/admin/login' );

export default router;