import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userUtils from "../utils/user.utils.js";
import authUtils from "../utils/auth.utils.js";
import { Request, Response, NextFunction } from "express";

dotenv.config();

declare global {
  namespace Express {
    interface Request {
      user?: { id: string; role: string; email: string };
    }
  }
}

const JWT_SECRET = process.env.JWT_SECRET;
const REFRESH_TOKEN_EXPIRATION = process.env.REFRESH_TOKEN_EXPIRATION || "7d";

if (!JWT_SECRET) throw new Error("JWT_SECRET missing");

const parseDuration = (str: any): number => {
  const match = /^(\d+)([smhd])$/.exec(str);
  if (!match) return 7 * 86400000; // default to 7 days
  const value = parseInt(match[1], 10);
  const unit = match[2];

  return (
    {
      s: value * 1000,
      m: value * 60000,
      h: value * 3600000,
      d: value * 86400000,
    }[unit] || 7 * 86400000
  );
};

const generateAccessToken = (userId: any) => {
  return jwt.sign(
    { id: userId },
    JWT_SECRET as jwt.Secret,
    ({
      expiresIn: process.env.ACCESS_TOKEN_TTL || "15m",
    } as unknown) as jwt.SignOptions,
  );
};

const setRefreshCookie = (res: any, token: any, expiresAt: any) => {
  res.cookie("refresh_token", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    path: "/",
  });
};

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const accessToken = authHeader?.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : null;

  const refreshToken = req.cookies?.refresh_token;

  if (!accessToken) {
    return res.status(401).json({ message: "access token missing" });
  }

  try {
    const decoded = jwt.verify(accessToken, JWT_SECRET as jwt.Secret) as { id: string };
    const user = await userUtils.findUserById(decoded.id);

    if (!user) return res.status(401).json({ message: "user not found" });

    req.user = { id: user.id, role: user.role, email: user.email };
    return next();
  } catch {
    if (!refreshToken) {
      return res.status(401).json({ message: "login required" });
    }

    const record: any = await authUtils.findRefreshToken(refreshToken);
    if (!record || record.revoked || record.expiresAt < new Date()) {
      return res.status(401).json({ message: "refresh token invalid" });
    }

    const user = await userUtils.findUserById(record.userId);

    if (!user) return res.status(401).json({ message: "user not found" });

    await authUtils.deleteRefreshToken(refreshToken);

    const expiresAt = new Date(
      Date.now() + parseDuration(REFRESH_TOKEN_EXPIRATION),
    );
    const newRefreshToken = await authUtils.createRefreshToken(
      user.id,
      expiresAt,
    );
    const newAccessToken = generateAccessToken(user.id);

    setRefreshCookie(res, newRefreshToken, expiresAt);
    res.setHeader("x-access-token", newAccessToken);

    req.user = { id: user.id, role: user.role, email: user.email };
    next();
  }
}

export default authMiddleware;
