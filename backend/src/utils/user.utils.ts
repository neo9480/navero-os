import prisma from "../db/prismaClient.js";
import bcrypt from "bcryptjs";

// Create a user
async function createUser(
  email: string,
  password: string,
  role: any,
  companyName: string,
  phone: string,
  address: string,
) {
  const passwordHash = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      email,
      passwordHash,
      companyName,
      phone,
      address,
      role,
    },
  });
}

// Find all users
async function findAllUsers() {
  return await prisma.user.findMany({
    where: {
      role: { not: "ADMIN" },
    },
  });
}

// Find by email
async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}

// Find by id
async function findUserById(id: string) {
  return prisma.user.findUnique({
    where: { id },
  });
}

// Compare password
async function verifyPassword(plain: string, hash: string) {
  return bcrypt.compare(plain, hash);
}

// Update user profile
async function updateUser(id: string, data: any) {
  return prisma.user.update({
    where: { id },
    data,
  });
}

async function deleteUser(userId: string) {
  await prisma.user.delete({ where: { id: userId } });
}

export default {
  createUser,
  findAllUsers,
  findUserByEmail,
  findUserById,
  verifyPassword,
  updateUser,
  deleteUser,
};
