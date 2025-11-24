import express from "express";
import authController from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public Authentication Routes
|--------------------------------------------------------------------------
| These routes handle user registration, login, and logout.
| No authentication required here, obviously.
*/
router.post(
  "/user/register",
  authController.registerUser, // Create a new user
);

router.post(
  "/user/login",
  authController.loginUser, // Authenticate user & issue token/cookie
);

router.get(
  "/user/logout",
  authController.logoutUser, // Clear session/token
);

/*
|--------------------------------------------------------------------------
| Protected User Account Routes
|--------------------------------------------------------------------------
| Only logged-in users can access or modify their profile.
| Token/cookie is validated through authMiddleware.
*/
router.get(
  "/user/profile",
  authMiddleware.authUserMiddlware, // Check if user is authenticated
  authController.getUserProfile, // Return profile of logged-in user
);

router.put(
  "/user/profile/update",
  authMiddleware.authUserMiddlware, // Ensure session is valid
  authController.updateUserProfile, // Update profile fields
);

router.delete(
  "/user/profile/delete",
  authMiddleware.authUserMiddlware, // Protect deletion route
  authController.deleteUser, // Permanently delete user account
);

export default router;
