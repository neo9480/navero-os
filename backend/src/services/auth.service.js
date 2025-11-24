import prisma from "../db/prismaClient.js";
import crypto from "crypto";

/**
 * Auth helpers: refresh token creation/revocation.
 * We keep tokens in DB as RefreshToken model.
 *
 * Schema fields:
 *  - RefreshToken.id, token (unique), userId, createdAt, expiresAt, revoked
 */

/**
 * Create and persist a refresh token record for a user.
 * Returns the raw token that should be sent to client (store httpOnly cookie).
 *
 * @param {string} userId
 * @param {Date} expiresAt
 * @returns {Promise<string>} token
 */
async function createRefreshToken(userId, expiresAt) {
  const token = crypto.randomBytes(48).toString("hex");

  await prisma.refreshToken.create({
    data: {
      token,
      userId,
      expiresAt,
    },
  });

  return token;
}

/**
 * Revoke a refresh token by token string (mark revoked)
 * @param {string} token
 * @returns {Promise<void>}
 */
async function revokeRefreshToken(token) {
  await prisma.refreshToken.updateMany({
    where: { token },
    data: { revoked: true },
  });
}

/**
 * Find a refresh token record by token string
 * @param {string} token
 * @returns {Promise<Object|null>}
 */
async function findRefreshToken(token) {
  return prisma.refreshToken.findUnique({ where: { token } });
}

/**
 * Delete all refresh tokens for a user (logout everywhere)
 * @param {string} userId
 * @returns {Promise<void>}
 */
async function revokeAllForUser(userId) {
  await prisma.refreshToken.updateMany({
    where: { userId, revoked: false },
    data: { revoked: true },
  });
}

export default {
  createRefreshToken,
  revokeRefreshToken,
  findRefreshToken,
  revokeAllForUser,
};
