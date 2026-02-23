import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userUtils from "../utils/user.utils.js";
import authUtils from "../utils/auth.utils.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const REFRESH_TOKEN_EXPIRATION = process.env.REFRESH_TOKEN_EXPIRATION || "7d";

if (!JWT_SECRET) throw new Error("JWT_SECRET missing");

const parseDuration = (str) => {
  const match = /^(\d+)([smhd])$/.exec(str);
  if (!match) return 7 * 86400000;

  const value = parseInt(match[1], 10);
  const unit = match[2];

  return (
    {
    s: value * 1000,
    m: value * 60000,
    h: value * 3600000,
    d: value * 86400000,
    }[unit] ?? 7 * 86400000
  );
};

const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_TTL || "15m",
  });
};

const setRefreshCookie = (res, token, expiresAt) => {
  res.cookie("refresh_token", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    path: "/",
  });
};

const getAccessToken = (req) => {
  const authHeader = req.headers?.authorization;
  if (typeof authHeader === "string" && authHeader.startsWith("Bearer ")) {
    const token = authHeader.slice(7).trim();
    if (token) return token;
  }

  const headerToken = req.headers?.["x-access-token"];
  if (typeof headerToken === "string" && headerToken.trim()) {
    return headerToken.trim();
  }

  return null;
};

async function authMiddleware(req, res, next) {
  const accessToken = getAccessToken(req);
  const refreshToken = req.cookies?.refresh_token;

  if (accessToken) {
    try {
      const decoded = jwt.verify(accessToken, JWT_SECRET);
      const user = await userUtils.findUserById(decoded.id);

      if (!user) return res.status(401).json({ message: "user not found" });

      req.user = { id: user.id, role: user.role, email: user.email };
      return next();
    } catch {
      // Access token invalid/expired: continue with refresh token flow.
    }
  }

  if (!refreshToken) {
    return res.status(401).json({ message: "login required" });
  }

  try {
    const record = await authUtils.findRefreshToken(refreshToken);
    if (!record || record.expiresAt < new Date()) {
      return res.status(401).json({ message: "refresh token invalid" });
    }

    const user = await userUtils.findUserById(record.userId);

    if (!user) return res.status(401).json({ message: "user not found" });

    const expiresAt = new Date(
      Date.now() + parseDuration(REFRESH_TOKEN_EXPIRATION),
    );
    const newRefreshToken = await authUtils.rotateRefreshToken(
      refreshToken,
      user.id,
      expiresAt,
    );
    const newAccessToken = generateAccessToken(user);

    setRefreshCookie(res, newRefreshToken, expiresAt);
    res.setHeader("x-access-token", newAccessToken);

    req.user = { id: user.id, role: user.role, email: user.email };
    return next();
  } catch (err) {
    if (err.message === "refresh token invalid") {
      return res.status(401).json({ message: "refresh token invalid" });
    }
    console.error("auth middleware failed:", err);
    return res.status(500).json({ message: "authentication failed" });
  }
}

export default authMiddleware;
