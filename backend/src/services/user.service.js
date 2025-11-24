import prisma from "../db/prismaClient.js";
import bcrypt from "bcryptjs";

/**
 * Create a new user in the system.
 * Handles hashing the password before storing it in the database.
 */
async function createUser(
  owner_name,
  company_name,
  business_email,
  password,
  phone,
  address,
  role,
) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      owner_name,
      business_email,
      company_name,
      password: hashedPassword,
      phone,
      address,
      role,
    },
  });

  return user;
}

/**
 * Find a user by their business email.
 * Used during login and validation processes.
 */
async function findUserByEmail(business_email) {
  return await prisma.user.findUnique({
    where: { business_email },
  });
}

/**
 * Fetch a user by ID.
 * Returns a redacted set of fields (excludes password).
 */
async function findUserById(userId) {
  return await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      owner_name: true,
      business_email: true,
      company_name: true,
      phone: true,
      address: true,
      role: true,
      createdAt: true,
    },
  });
}

/**
 * Update a user's basic profile fields.
 */
async function updateUser(userId, owner_name, company_name, phone, address) {
  return await prisma.user.update({
    where: { id: userId },
    data: {
      owner_name,
      company_name,
      phone,
      address,
    },
    select: {
      id: true,
      owner_name: true,
      business_email: true,
      company_name: true,
      phone: true,
      address: true,
      role: true,
      createdAt: true,
    },
  });
}

/**
 * Compare user-provided password with stored hashed password.
 */
async function verifyPassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

export default {
  createUser,
  findUserByEmail,
  findUserById,
  verifyPassword,
  updateUser,
};
