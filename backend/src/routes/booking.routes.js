import express from "express";

const router = express.Router();

router.post( '/create' );
router.get( '/my' );
router.put("/:id");
router.delete("/:id/delete");

export default router;