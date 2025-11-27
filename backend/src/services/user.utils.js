import prisma from "../db/prismaClient.js";
import bcrypt from "bcryptjs";

// Create a user
async function createUser(
  ownerName,
  companyName,
  email,
  password,
  phone,
  address,
  role,
) {
  const passwordHash = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      email,
      passwordHash,
      ownerName,
      companyName,
      phone,
      address,
      role,
    },
  });
}

// Find by email
async function findUserByEmail(email) {
  return prisma.user.findUnique({
    where: { email },
  });
}

// Find by id
async function findUserById(id) {
  return prisma.user.findUnique({
    where: { id },
  });
}

// Compare password
async function verifyPassword(plain, hash) {
  return bcrypt.compare(plain, hash);
}

// Update user profile
async function updateUser(id, ownerName, companyName, phone, address) {
  return prisma.user.update({
    where: { id },
    data: {
      companyName,
      ownerName,
      phone,
      address
    },
  });
}

export default {
  createUser,
  findUserByEmail,
  findUserById,
  verifyPassword,
  updateUser,
};
