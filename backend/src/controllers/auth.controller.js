import prisma from "../db/prismaClient.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  createRefreshToken,
  revokeRefreshToken,
  revokeAllForUser,
  findRefreshToken,
} from "../services/token.service.js";

const ACCESS_TOKEN_TTL = "15m"; // short-lived
const REFRESH_TOKEN_DAYS = 30; // persistent login

// Generate JWT access token
function generateAccessToken(user) {
  return jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: ACCESS_TOKEN_TTL },
  );
}

// Set httpOnly refresh cookie
function setRefreshCookie(res, token, expiresAt) {
  res.cookie("refresh_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    expires: expiresAt,
    path: "/api/auth",
  });
}

// POST /register
async function register(req, res, next) {
  try {
    const { email, password, role, companyName, phone } = req.body;

    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) return res.status(400).json({ error: "Email already in use" });

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { email, passwordHash, role, companyName, phone },
    });

    res.status(201).json({ message: "User registered", userId: user.id });
  } catch (err) {
    next(err);
  }
}

// POST /login
async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(400).json({ error: "Invalid credentials" });

    const accessToken = generateAccessToken(user);

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + REFRESH_TOKEN_DAYS);
    const refreshToken = await createRefreshToken(user.id, expiresAt);

    setRefreshCookie(res, refreshToken, expiresAt);

    res.json({
      accessToken,
      user: { id: user.id, role: user.role, email: user.email },
    });
  } catch (err) {
    next(err);
  }
}

// POST /refresh
async function refresh(req, res, next) {
  try {
    const token = req.cookies.refresh_token;
    if (!token) return res.status(401).json({ error: "No refresh token" });

    const record = await findRefreshToken(token);
    if (!record || record.revoked)
      return res.status(401).json({ error: "Invalid refresh token" });

    const user = await prisma.user.findUnique({ where: { id: record.userId } });
    if (!user) return res.status(401).json({ error: "User not found" });

    // Rotate refresh token
    await revokeRefreshToken(token);
    const newExpiresAt = new Date();
    newExpiresAt.setDate(newExpiresAt.getDate() + REFRESH_TOKEN_DAYS);
    const newRefreshToken = await createRefreshToken(user.id, newExpiresAt);
    setRefreshCookie(res, newRefreshToken, newExpiresAt);

    const accessToken = generateAccessToken(user);
    res.json({ accessToken });
  } catch (err) {
    next(err);
  }
}

// POST /logout
async function logout(req, res, next) {
  try {
    const token = req.cookies.refresh_token;
    if (token) {
      await revokeRefreshToken(token);
      res.clearCookie("refresh_token", { path: "/api/auth" });
    }
    res.json({ message: "Logged out" });
  } catch (err) {
    next(err);
  }
}

// POST /logout-all
async function logoutAll(req, res, next) {
  try {
    const token = req.cookies.refresh_token;
    if (!token) return res.status(401).json({ error: "No refresh token" });

    const record = await findRefreshToken(token);
    if (!record)
      return res.status(401).json({ error: "Invalid refresh token" });

    await revokeAllForUser(record.userId);
    res.clearCookie("refresh_token", { path: "/api/auth" });

    res.json({ message: "Logged out from all devices" });
  } catch (err) {
    next(err);
  }
}

export default {
  generateAccessToken,
  setRefreshCookie,
  register,
  login,
  refresh,
  logout,
  logoutAll,
};
