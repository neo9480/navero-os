import express from "express";
import {
  login,
  register,
  refresh,
  logout,
  logoutAll,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refresh);
router.post("/logout", logout);
router.post("/logout-all", logoutAll);

export default router;
