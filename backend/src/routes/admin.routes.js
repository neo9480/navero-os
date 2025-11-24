import express from "express";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Admin Authentication Routes
|--------------------------------------------------------------------------
| These routes handle admin account creation and login. In a real system,
| registration should probably be restricted or disabled entirely.
*/
router.post("/register"); // Create a new admin account
router.post("/login"); // Log in as admin and receive a token/session

/*
|--------------------------------------------------------------------------
| Admin User Management
|--------------------------------------------------------------------------
| Full trust zone. Admin can view all users, inspect a single user, or
| remove user accounts entirely.
*/
router.get("/user"); // Fetch list of all users
router.get("/user/:id"); // Fetch details of a specific user
router.delete("/user/:id"); // Delete a user by ID

/*
|--------------------------------------------------------------------------
| Admin Shipment Oversight
|--------------------------------------------------------------------------
| Admin can inspect all shipments and remove shipments if required
| (fraud, abuse, error correction, etc.).
*/
router.get("/shipments"); // Get all shipments
router.get("/shipments/:id"); // Get specific shipment details
router.delete("/shipments/:id"); // Delete shipment

/*
|--------------------------------------------------------------------------
| Admin Transaction Control
|--------------------------------------------------------------------------
| Admin can audit transactions system-wide and delete them only in
| exceptional cases (e.g., fraud or failed test data cleanup).
*/
router.get("/transactions"); // Fetch all transactions
router.get("/transactions/:id"); // Fetch single transaction details
router.delete("/transactions/:id"); // Delete a transaction

/*
|--------------------------------------------------------------------------
| Admin Service Marketplace Controls
|--------------------------------------------------------------------------
| Admin can inspect or remove services listed in the marketplace.
*/
router.get("/services"); // List all services
router.get("/services/:id"); // View a specific service
router.delete("/services/:id"); // Remove a service

/*
|--------------------------------------------------------------------------
| Admin Booking Oversight
|--------------------------------------------------------------------------
| Admin has visibility into all bookings created by users.
*/
router.get("/bookings"); // Get all bookings
router.get("/bookings/:id"); // Get specific booking
router.delete("/bookings/:id"); // Delete booking

/*
|--------------------------------------------------------------------------
| Admin Dashboard / Platform Statistics
|--------------------------------------------------------------------------
| Metrics, analytics, dashboards, whatever the admin panel needs.
*/
router.get("/stats"); // Fetch system-wide statistics

export default router;
