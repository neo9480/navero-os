import express from "express";

const router = express.Router();

// GET    /deal/:dealId            — list docs for a deal
// GET    /deal/:dealId/summary    — approval summary by phase

router.post("/upload"); // - upload a new document
router.post("/request"); // - request a document
router.get("/:id"); // — get single document
router.get("/my"); // - get all user documents
router.patch("/:id"); // — update document metadata
router.post("/:id/approve"); // — approve document
router.post("/:id/reject"); // — reject with reason
router.get("/:id/download"); // — get signed download URL
router.post("/:id/replace"); // — replace file (new version)
router.delete("/:id"); // - delete document

// LC Routes
router.post("/lc/apply"); // - apply a LC (importer only)
router.get("/lc/my"); // - get all user LCs
router.post("/lc/issue"); // - bank issues LC after importer apply
router.post("/lc/advise"); // -exporter bank advises LC to the exporter after receiving from importer bank.
router.post("/verify-docs"); // - both banks validates documents submitted by exporter.
