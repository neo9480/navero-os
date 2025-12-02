import prisma from "../db/prismaClient.js";
import crypto from "crypto";

/**
 * Token Service: unified refresh-token helper built
 * to match the current Prisma schema:
 *
 * model RefreshToken {
 *   id        String   @id @default(cuid())
 *   userId    String
 *   token     String   @unique
 *   createdAt DateTime @default(now())
 *   expiresAt DateTime
 *   user      User @relation(fields: [userId], references: [id])
 * }
 *
 * No "revoked" field. No legacy behavior.
 * Tokens are created, validated, and removed on logout.
 */

/**
 * Generate a new refresh token for a user and store it.
 *
 * @param {string} userId - ID of the user receiving the new token.
 * @param {Date}   expiresAt - Expiry timestamp for token.
 * @returns {Promise<string>} raw token string to send as httpOnly cookie.
 */
async function createRefreshToken(userId: string, expiresAt: Date) {
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
 * Find a refresh token record via token string.
 * Returns null if not found or expired.
 *
 * @param {string} token
 * @returns {Promise<object|null>}
 */
async function findRefreshToken(token: string) {
  const record = await prisma.refreshToken.findUnique({
    where: { token },
  });

  if (!record) return null;

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
async function deleteRefreshToken(token: string) {
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
async function deleteAllTokensForUser(userId: string) {
  await prisma.refreshToken.deleteMany({
    where: { userId },
  });
}

export default {
  createRefreshToken,
  findRefreshToken,
  deleteRefreshToken,
  deleteAllTokensForUser,
};
