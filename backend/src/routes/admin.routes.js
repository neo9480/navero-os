import express from "express";
import adminController from "../controllers/admin.controller.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Admin Authentication Routes
|--------------------------------------------------------------------------
| These routes handle admin account creation and login. In a real system,
| registration should probably be restricted or disabled entirely.
*/
router.post("/register", adminController.register); // Create a new admin account
router.post("/login", adminController.login); // Log in as admin and receive a token/session

/*
|--------------------------------------------------------------------------
| Admin User Management
|--------------------------------------------------------------------------
| Full trust zone. Admin can view all users, inspect a single user, or
| remove user accounts entirely.
*/
router.get("/user", adminController.getAllUsers); // Fetch list of all users
router.get("/user/:id", adminController.getUserById); // Fetch details of a specific user
router.delete("/user/:id", adminController.deleteUser); // Delete a user by ID

/*
|--------------------------------------------------------------------------
| Admin Shipment Oversight
|--------------------------------------------------------------------------
| Admin can inspect all shipments and remove shipments if required
| (fraud, abuse, error correction, etc.).
*/
router.get("/shipments", adminController.getAllShipments); // Get all shipments
router.get("/shipments/:id", adminController.getServiceById); // Get specific shipment details
router.delete("/shipments/:id", adminController.deleteService); // Delete shipment

/*
|--------------------------------------------------------------------------
| Admin Transaction Control
|--------------------------------------------------------------------------
| Admin can audit transactions system-wide and delete them only in
| exceptional cases (e.g., fraud or failed test data cleanup).
*/
router.get("/transactions", adminController.getAllTransactions); // Fetch all transactions
router.get("/transactions/:id", adminController.getTransactionById); // Fetch single transaction details
router.delete("/transactions/:id", adminController.deleteTransaction); // Delete a transaction

/*
|--------------------------------------------------------------------------
| Admin Service Marketplace Controls
|--------------------------------------------------------------------------
| Admin can inspect or remove services listed in the marketplace.
*/
router.get("/services", adminController.getAllServices); // List all services
router.get("/services/:id", adminController.getServiceById); // View a specific service
router.delete("/services/:id", adminController.deleteService); // Remove a service

/*
|--------------------------------------------------------------------------
| Admin Booking Oversight
|--------------------------------------------------------------------------
| Admin has visibility into all bookings created by users.
*/
router.get("/bookings", adminController.getAllBookings); // Get all bookings
router.get("/bookings/:id", adminController.getBookingById); // Get specific booking
router.delete("/bookings/:id", adminController.deleteBooking); // Delete booking

/*
|--------------------------------------------------------------------------
| Admin Dashboard / Platform Statistics
|--------------------------------------------------------------------------
| Metrics, analytics, dashboards, whatever the admin panel needs.
*/
router.get("/stats", adminController.getStats); // Fetch system-wide statistics

export default router;
