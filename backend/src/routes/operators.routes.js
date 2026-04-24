import express from "express"
import operatorController from "../controllers/operators.controller.js"
const router = express.Router()

// include all the routes for operators needed for calculations.

// duty calculator.
router.post( "/duty/calculate", operatorController.calculateDuty ) // - calculate duty from dealings and operations.
router.post( "/duty/quick-calculate", operatorController.quickCalculateDuty ) // - quick calculate duty.

// exchange rates calculator
router.get( "/exchange-rate", operatorController.calculateExchangeRate ) // - get exchange rate.
router.post( "/exhange-rate/refresh", operatorController.refreshExchangeRate ) // - force refresh from live API.
router.get( "/exchange-rate/all", operatorController.getAllExchangeRate ) // - all cached currency pairs.

// quote calculator
router.post("/quote", operatorController.calculateQuote) // - get the combined quote from exporter and logistics

export default router