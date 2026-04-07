import express from "express";
import documentsController from "../controllers/documents.controller.js";
// import authMiddleware from "../middlewares/auth.middleware.js"
import multer from "multer"

const upload = multer( {
  storage: multer.memoryStorage(),
})
const router = express.Router();

// GET    /deal/:dealId            — list docs for a deal
// GET    /deal/:dealId/summary    — approval summary by phase

router.post("/upload", upload.single("document"), documentsController.uploadDocs); // - upload a new document
router.post("/request", documentsController.requestDocs); // - request a document
router.get("/:userId/:id", documentsController.getDocs); // — get single document
router.get("/:userId/my", documentsController.getAllDocs); // - get all user documents
router.patch("/:userId/:id", documentsController.updateDocs); // — update document metadata
router.post("/:id/approve", documentsController.approveDocs); // — approve document
router.post("/:id/reject", documentsController.rejectDocs); // — reject with reason
router.get("/:userId/:id/download", documentsController.downloadDocs); // — get signed download URL
router.post("/:userId/:id/replace", documentsController.replaceDocs); // — replace file (new version)
router.delete("/:userId/:id", documentsController.deleteDocs); // - delete document

// LC Routes
router.post("/lc/apply", documentsController.applyLc); // - apply a LC (importer only)
router.get("/lc/my", documentsController.getAllLc); // - get all user LCs
router.post("/lc/issue", documentsController.issueLc); // - bank issues LC after importer apply
router.post("/lc/advise", documentsController.adviceLc); // -exporter bank advises LC to the exporter after receiving from importer bank.
router.post("/verify-docs", documentsController.verifyDocs); // - both banks validates documents submitted by exporter.

export default router