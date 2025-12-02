import express from "express";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| BANK ROUTES
| These endpoints cover LC issuance, advising, document checks,
| and payment release. Each action corresponds to a bank-side module
| in your system architecture.
|--------------------------------------------------------------------------
*/

/*
 * Importer Bank:
 * Issues a Letter of Credit after the importer submits an application.
 * Triggers the LC Issuance Engine.
 */
router.post("/lc/issue");

/*
 * Exporter Bank:
 * Advises the LC to the exporter after receiving it from the importer bank.
 * Triggers the LC Advising Service.
 */
router.post("/lc/advise");

/*
 * Both Banks:
 * Validates the shipment documents submitted by exporter.
 * Triggers DocumentVerificationEngine.
 */
router.post("/lc/verify-docs");

/*
 * Importer Bank:
 * Releases payment to exporter after document approval and LC conditions are met.
 * Triggers PaymentReleaseService.
 */
router.post("/payment/release");

export default router;
