import express from "express";
import documentsController from "../controllers/documents.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js"
import multer from "multer"

const upload = multer( {
  storage: multer.memoryStorage(),
})
const router = express.Router();

// GET    /deal/:dealId            — list docs for a deal
// GET    /deal/:dealId/summary    — approval summary by phase

router.post("/upload", authMiddleware, upload.single("document"), documentsController.uploadDocs); // - upload a new document
router.post("/request",authMiddleware, documentsController.requestDocs); // - request a document
router.get("/:id",authMiddleware, documentsController.getDocs); // — get single document
router.get("/:userId/my",authMiddleware, documentsController.getAllDocs); // - get all user documents
router.patch("/:userId/:id",authMiddleware, documentsController.updateDocs); // — update document metadata
router.post("/:id/approval",authMiddleware, documentsController.approveOrRejectDocs); // — approve document
router.get("/download/:id/", documentsController.downloadDocs); // — get signed download URL
router.post("/:userId/:id/replace",authMiddleware, documentsController.replaceDocs); // — replace file (new version)
router.delete("/:userId/:id",authMiddleware, documentsController.deleteDocs); // - delete document

// LC Routes
router.post("/lc/apply",authMiddleware, documentsController.applyLc); // - apply a LC (importer only)
router.get("/lc/my",authMiddleware, documentsController.getAllLc); // - get all user LCs
router.post("/lc/issue",authMiddleware, documentsController.issueLc); // - bank issues LC after importer apply
router.post("/lc/advise",authMiddleware, documentsController.adviceLc); // -exporter bank advises LC to the exporter after receiving from importer bank.
router.post("/verify-docs",authMiddleware, documentsController.verifyDocs); // - both banks validates documents submitted by exporter.

export default router