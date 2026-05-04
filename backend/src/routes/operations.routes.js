import express from "express"
import authMiddleware from "../middlewares/auth.middleware.js";
import operationsController from "../controllers/operations.controller.js";

const router = express.Router()

// include the dealings and bookings made by users.
router.post( "/initiate", authMiddleware, operationsController.initiateOperation )
router.get( "/:userId", authMiddleware, operationsController.getUserOperation )
router.put("/:operationId", authMiddleware, operationsController.updateOperation) 

export default router;