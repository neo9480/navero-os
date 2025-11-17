import express from 'express';
import userController from '../controllers/user.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

// Public routes
router.post( '/user/register', userController.registerUser );
router.post( '/user/login', userController.loginUser );
router.get( '/user/logout', userController.logoutUser );

// // Protected routes

router.get( '/user/profile', authMiddleware.authUserMiddlware, userController.getUserProfile );
router.put( '/user/profile/update', authMiddleware.authUserMiddlware, userController.updateUserProfile );
router.delete( '/user/profile/delete', authMiddleware.authUserMiddlware, userController.deleteUser );


export default router;