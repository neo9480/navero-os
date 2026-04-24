import express from "express"
import authMiddleware from "../middlewares/auth.middleware";
import operationsController from "../controllers/operations.controller";

const router = express.Router()

// include the dealings and bookings made by users.
router.post("/initiate", authMiddleware, operationsController.initiateOperation)

export default router;