import prisma from "../db/prismaClient.js";
import crypto from "crypto";

function generateToken() {
  return crypto.randomBytes(48).toString("hex");
}

/**
 * Generate a new refresh token for a user and store it.
 *
 * @param {string} userId - ID of the user receiving the new token.
 * @param {Date}   expiresAt - Expiry timestamp for token.
 * @returns {Promise<string>} raw token string to send as httpOnly cookie.
 */
async function createRefreshToken(userId, expiresAt, db = prisma) {
  const token = generateToken();

  await db.refreshToken.create({
    data: {
      token,
      userId,
      expiresAt,
    },
  });

  return token;
}

/**
 * Find a refresh token record via token string.
 * Returns null if not found or expired.
 *
 * @param {string} token
 * @returns {Promise<object|null>}
 */
async function findRefreshToken(token) {
  const record = await prisma.refreshToken.findUnique({
    where: { token },
  });

  if (!record) return null;
  if (record.revoked) return null;

  // Token found but expired
  if (record.expiresAt < new Date()) {
    // Cleanup expired token
    await prisma.refreshToken.delete({
      where: { token },
    });
    return null;
  }

  return record;
}

/**
 * Remove a specific refresh token from DB (standard logout)
 *
 * @param {string} token
 * @returns {Promise<void>}
 */
async function deleteRefreshToken(token) {
  await prisma.refreshToken
    .delete({
      where: { token },
    })
    .catch(() => {});
}

/**
 * Remove all refresh tokens for a user (logout everywhere)
 *
 * @param {string} userId
 * @returns {Promise<void>}
 */
async function deleteAllTokensForUser(userId) {
  await prisma.refreshToken.deleteMany({
    where: { userId },
  });
}

/**
 * Rotate a refresh token atomically.
 * - Revokes the previous token
 * - Creates and returns the new token
 */
async function rotateRefreshToken(oldToken, userId, expiresAt) {
  return prisma.$transaction(async (tx) => {
    const result = await tx.refreshToken.updateMany({
      where: { token: oldToken, userId, revoked: false },
      data: { revoked: true },
    });

    if (result.count === 0) {
      throw new Error("refresh token invalid");
    }

    return createRefreshToken(userId, expiresAt, tx);
  });
}

export default {
  createRefreshToken,
  findRefreshToken,
  deleteRefreshToken,
  deleteAllTokensForUser,
  rotateRefreshToken,
};
