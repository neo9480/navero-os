import express from "express";
import adminController from "../controllers/admin.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import adminMiddleware from "../middlewares/admin.middleware.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Admin User Management
|--------------------------------------------------------------------------
| Full trust zone. Admin can view all users, inspect a single user, or
| remove user accounts entirely.
*/
router.get(
  "/user",
  authMiddleware,
  adminMiddleware,
  adminController.getAllUsers,
); // Fetch list of all users
router.get(
  "/user/:id",
  authMiddleware,
  adminMiddleware,
  adminController.getUserById,
); // Fetch details of a specific user
router.delete(
  "/user/:id",
  authMiddleware,
  adminMiddleware,
  adminController.deleteUser,
); // Delete a user by ID

/*
|--------------------------------------------------------------------------
| Admin Shipment Oversight
|--------------------------------------------------------------------------
| Admin can inspect all shipments and remove shipments if required
| (fraud, abuse, error correction, etc.).
*/
router.get(
  "/shipments",
  authMiddleware,
  adminMiddleware,
  adminController.getAllShipments,
); // Get all shipments
router.get(
  "/shipments/:id",
  authMiddleware,
  adminMiddleware,
  adminController.getShipmentById,
); // Get specific shipment details
router.delete(
  "/shipments/:id",
  authMiddleware,
  adminMiddleware,
  adminController.deleteShipment,
); // Delete shipment

/*
|--------------------------------------------------------------------------
| Admin Transaction Control
|--------------------------------------------------------------------------
| Admin can audit transactions system-wide and delete them only in
| exceptional cases (e.g., fraud or failed test data cleanup).
*/
router.get(
  "/transactions",
  authMiddleware,
  adminMiddleware,
  adminController.getAllTransactions,
); // Fetch all transactions
router.get(
  "/transactions/:id",
  authMiddleware,
  adminMiddleware,
  adminController.getTransactionById,
); // Fetch single transaction details

/*
|--------------------------------------------------------------------------
| Admin Service Marketplace Controls
|--------------------------------------------------------------------------
| Admin can inspect or remove services listed in the marketplace.
*/
router.get(
  "/services",
  authMiddleware,
  adminMiddleware,
  adminController.getAllServices,
); // List all services
router.get(
  "/services/:id",
  authMiddleware,
  adminMiddleware,
  adminController.getServiceById,
); // View a specific service
router.delete(
  "/services/:id",
  authMiddleware,
  adminMiddleware,
  adminController.deleteService,
); // Remove a service

/*
|--------------------------------------------------------------------------
| Admin Booking Oversight
|--------------------------------------------------------------------------
| Admin has visibility into all bookings created by users.
*/
router.get(
  "/bookings",
  authMiddleware,
  adminMiddleware,
  adminController.getAllBookings,
); // Get all bookings
router.get(
  "/bookings/:id",
  authMiddleware,
  adminMiddleware,
  adminController.getBookingById,
); // Get specific booking
router.delete(
  "/bookings/:id",
  authMiddleware,
  adminMiddleware,
  adminController.deleteBooking,
); // Delete booking

/*
|--------------------------------------------------------------------------
| Admin Dashboard / Platform Statistics
|--------------------------------------------------------------------------
| Metrics, analytics, dashboards, whatever the admin panel needs.
*/
router.get("/stats", authMiddleware, adminMiddleware, adminController.getStats); // Fetch system-wide statistics

export default router;
