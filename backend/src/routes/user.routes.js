import express from 'express';
import authController from '../controllers/auth.controller.js';

const router = express.Router();

// Public routes
router.post( '/user/register', authController.registerUser );
router.post( '/user/login', authController.loginUser );
router.get( '/user/logout', authController.logoutUser );

// // Protected routes

// router.get( '/user/profile' );
// router.put( '/user/profile/update' );
// router.delete( '/user/delete' );


export default router;