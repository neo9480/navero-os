import express from "express";

const router = express.Router();

// importer routes
router.post("/importer/exporter-quote-request")
router.post( "/importer/logistics-quote-request" );
router.get("/importer/quotes/my")

// exporter routes
router.post( "/exporter/quote-response" )

// logistics routes
router.post("/logistics/quote-response")

// broker routes
router.post("/broker/vaildate-docs") // - validate exporter and importer and other docs
router.post("/broker/submit-docs") // - submit the validated docs to customs

// bank routes
router.post("/payment/release")
// customs routes
router.post( "/customs/events" )
router.get("/customs/status/:shipmentId");

export default router;