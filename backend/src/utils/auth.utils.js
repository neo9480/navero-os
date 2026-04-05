import config from "../config/config.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import prisma from "../db/prismaClient.js";

/**
 * Generate a new refreshToken
 *
 * @param {string} userId - ID of the user generating the refreshToken.
 * @returns {Promise<string>} The refreshToken.
 **/
async function generateRefreshToken(userId) {
  return jwt.sign(
    {
      userId,
    },
    config.JWT_SECRET,
    {
      expiresIn: config.REFRESH_TOKEN_TTL,
    },
  );
}

/**
 * Generate a new hash of refreshToken
 *
 * @param {string} refreshToken - The refreshToken.
 * @returns {Promise<string>} The refreshTokenHash.
 **/
async function generateRefreshTokenHash(refreshToken) {
  return crypto.createHash("sha256").update(refreshToken).digest("hex");
}

/**
 * Generate a new session
 *
 * @param {string} userId - ID of the user receiving the new token.
 * @param {string} refreshTokenHash - Hash of refreshToken.
 * @param {string} ip - IP address of the client.
 * @param {string} userAgent - User agent string of the client.
 * @returns {Promise<object>} The created session record.
 **/
async function createSession(
  userId,
  refreshTokenHash,
  ip,
  userAgent,
  refreshTokenExpiry,
) {
  return await prisma.session.create({
    data: {
      userId: userId,
      refreshToken: refreshTokenHash,
      ip: ip,
      userAgent: userAgent,
      expiresAt: refreshTokenExpiry,
    },
  });
}

/**
 * Generate a new accessToken
 *
 * @param {string} userId - ID of the user generating the refreshToken.
 * @param {string} sessionId - ID of the session
 * @returns {Promise<string>} The accessToken.
 **/
async function generateAccessToken(args) {
  return jwt.sign(args, config.JWT_SECRET, {
    expiresIn: config.ACCESS_TOKEN_TTL,
  });
}

/**
 * Find a session record via refreshToken string.
 * Returns null if not found or expired.
 *
 * @param {string} refreshToken
 * @returns {Promise<object|null>}
 */
async function findSession(refreshToken) {
  const record = await prisma.session.findFirst({
    where: { refreshToken, revoked: false },
  });

  if (!record) return null;

  // Token found but expired
  if (record.expiresAt < new Date()) {
    // Cleanup expired token
    await prisma.session.delete({
      where: { refreshToken },
    });
    return null;
  }

  return record;
}

/**
 * Update fields in session model
 *
 * @param {where} - Filter params.
 * @param {data} - Data that needs to be updated.
 */
async function updateSession(where, data) {
  return await prisma.session.updateMany({
    where: where,
    data: data,
  });
}

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

async function getRefreshExpiryDate() {
  return new Date(Date.now() + parseDuration(config.REFRESH_TOKEN_TTL));
}

async function setRefreshCookie( res, refreshToken ) {
  const refreshTtlMins = parseDuration(config.REFRESH_TOKEN_TTL)
  return res.cookie("refresh_token", refreshToken, {
    httpOnly: true,
    secure: config.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: refreshTtlMins
  });
}

async function clearRefreshCookie(res) {
  return res.clearCookie("refresh_token", {
    httpOnly: true,
    secure: config.NODE_ENV === "production",
    sameSite: "strict",
  });
}

async function verifyToken(Token) {
  return jwt.verify(Token, config.JWT_SECRET);
}

async function getAccessToken(req) {
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
}

export default {
  generateRefreshToken,
  generateRefreshTokenHash,
  createSession,
  generateAccessToken,
  findSession,
  updateSession,
  getRefreshExpiryDate,
  setRefreshCookie,
  clearRefreshCookie,
  verifyToken,
  getAccessToken,
};
