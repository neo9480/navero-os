import prisma from "../db/prismaClient.js";
import bcrypt from "bcryptjs";

/**
 * User service
 * Responsible for user CRUD, password hashing/verification and safe user shape returns.
 *
 * NOTE: Schema fields:
 *  - User.id (String cuid)
 *  - User.email
 *  - User.passwordHash
 *  - User.role (UserRole enum)
 *  - User.companyName, phone, createdAt, updatedAt
 */

/**
 * Create a new user.
 * - hashes password into passwordHash
 * - returns created user (without passwordHash)
 *
 * @param {Object} payload
 * @param {string} payload.email
 * @param {string} payload.password
 * @param {string} payload.role
 * @param {string} [payload.companyName]
 * @param {string} [payload.phone]
 * @returns {Promise<Object>} user
 */
async function createUser({
  email,
  password,
  role,
  companyName = null,
  phone = null,
}) {
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) throw new Error("USER_EXISTS");

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
      role,
      companyName,
      phone,
    },
    select: {
      id: true,
      email: true,
      role: true,
      companyName: true,
      phone: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return user;
}

/**
 * Find user record by email. Returns full DB record (including passwordHash).
 * Use carefully (auth only).
 * @param {string} email
 * @returns {Promise<Object|null>}
 */
async function findByEmail(email) {
  return prisma.user.findUnique({
    where: { email },
  });
}

/**
 * Find user by id and return safe public fields (no passwordHash).
 * @param {string} id
 * @returns {Promise<Object|null>}
 */
async function findById(id) {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      role: true,
      companyName: true,
      phone: true,
      createdAt: true,
      updatedAt: true,
      // relations optional to include later
    },
  });
}

/**
 * Update user basic profile fields.
 * Returns the updated user (safe fields only).
 * @param {string} id
 * @param {Object} updates
 * @returns {Promise<Object>}
 */
async function updateUser(id, updates = {}) {
  const allowed = ["companyName", "phone"];
  const data = {};

  for (const k of allowed) {
    if (k in updates) data[k] = updates[k];
  }

  const updated = await prisma.user.update({
    where: { id },
    data,
    select: {
      id: true,
      email: true,
      role: true,
      companyName: true,
      phone: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return updated;
}

/**
 * Verify plaintext password against bcrypt hash
 * @param {string} plaintext
 * @param {string} hash
 * @returns {Promise<boolean>}
 */
async function verifyPassword(plaintext, hash) {
  return bcrypt.compare(plaintext, hash);
}

export default {
  createUser,
  findByEmail,
  findById,
  updateUser,
  verifyPassword,
};
