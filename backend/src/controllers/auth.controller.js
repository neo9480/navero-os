import prisma from "../db/prismaClient.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authUtils from "../utils/auth.utils.js";

function generateAccessToken(user) {
  return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_TTL || "15m",
  });
}

function setRefreshCookie(res, token, expiresAt) {
  res.cookie("refresh_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    expires: expiresAt,
    path: "/",
  });
}

async function register(req, res) {
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
    console.error( "failed to register user:", err );
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(400).json({ error: "Invalid credentials" });

    const accessToken = generateAccessToken(user);

    const expiresAt = new Date();
    expiresAt.setDate(
      expiresAt.getDate() + Number(process.env.REFRESH_TOKEN_DAYS),
    );
    const refreshToken = await authUtils.createRefreshToken(user.id, expiresAt);

    setRefreshCookie(res, refreshToken, expiresAt);

    res.json({
      message: "user login successfull",
      accessToken,
      user: { id: user.id, role: user.role, email: user.email },
    });
  } catch (err) {
    console.error("failed to login user:", err);
  }
}

async function refresh(req, res) {
  try {
    const token = req.cookies.refresh_token;
    if (!token) return res.status(401).json({ error: "No refresh token" });

    const record = await authUtils.findRefreshToken(token);
    if (!record || record.revoked)
      return res.status(401).json({ error: "Invalid refresh token" });

    const user = await prisma.user.findUnique({ where: { id: record.userId } });
    if (!user) return res.status(401).json({ error: "User not found" });

    await authUtils.deleteRefreshToken(token);

    const newExpiresAt = new Date();
    newExpiresAt.setDate(
      newExpiresAt.getDate() + Number(process.env.REFRESH_TOKEN_DAYS),
    );
    const newRefreshToken = await authUtils.createRefreshToken(
      user.id,
      newExpiresAt,
    );

    setRefreshCookie(res, newRefreshToken, newExpiresAt);

    const accessToken = generateAccessToken(user);
    res.json({ accessToken });
  } catch (err) {
    console.error( "failed to refresh token:", err );
  }
}

async function logout(req, res) {
  try {
    const token = req.cookies.refresh_token;
    if (token) {
      await authUtils.deleteRefreshToken(token);
      res.clearCookie("refresh_token", { path: "/" });
    }
    res.json({ message: "Logged out" });
  } catch (err) {
    console.error( "failed to logout user:", err );
  }
}

async function logoutAll(req, res) {
  try {
    // You already have req.user from the middleware (access token verified)
    const userId = req.user.id;

    await authUtils.deleteAllTokensForUser(userId);

    res.clearCookie("refresh_token", { path: "/" });

    res.json({ message: "Logged out from all devices" });
  } catch (err) {
    console.error( "failed to logout all users:", err );
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
