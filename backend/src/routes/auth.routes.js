import express from 'express';
import authController from '../controllers/auth.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

// Public routes
router.post( '/user/register', authController.registerUser );
router.post( '/user/login', authController.loginUser );
router.get( '/user/logout', authController.logoutUser );

// // Protected routes

router.get( '/user/profile', authMiddleware.authUserMiddlware, authController.getUserProfile );
router.put( '/user/profile/update', authMiddleware.authUserMiddlware, authController.updateUserProfile );
router.delete( '/user/profile/delete', authMiddleware.authUserMiddlware, authController.deleteUser );


export default router;