import express from 'express'

const router = express.Router();

router.post("/quotes/request");
router.get("/quotes/my");
router.get( "/quotes/my/:id" );

export default router;