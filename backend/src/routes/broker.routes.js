import express from "express";

const router = express.Router();

// Validate exporter documents
router.post("/validate-docs");

// Submit docs to customs
router.post("/customs/submit");

// Assigned shipments
router.get("/shipments/my");

export default router;
