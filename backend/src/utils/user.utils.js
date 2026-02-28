import prisma from "../db/prismaClient.js";
import bcrypt from "bcryptjs";

const safeUserSelect = {
  id: true,
  role: true,
  email: true,
  companyName: true,
  phone: true,
  address: true,
  createdAt: true,
  updatedAt: true,
  subscription: true, 
};

async function createUser(
  email,
  password,
  role,
  companyName,
  phone,
  address,
  db = prisma,
) {
  const passwordHash = await bcrypt.hash(password, 10);

  return db.user.create({
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

async function findAllUsers() {
  return prisma.user.findMany({
    where: {
      role: { not: "ADMIN" },
    },
    select: safeUserSelect,
  });
}

async function findAdminByEmail(email) {
  return prisma.user.findFirst({
    where: {
      email,
      role: { in: ["ADMIN", "SUPER_ADMIN"] },
    },
    include: { subscription: true },
  });
}

async function findUserByEmail(email) {
  return prisma.user.findUnique({
    where: { email },
    include: { subscription: true },
  });
}

async function findUserById(id) {
  return prisma.user.findUnique({
    where: { id },
    select: safeUserSelect,
  });
}

async function verifyPassword(plain, hash) {
  return bcrypt.compare(plain, hash);
}

async function updateUser(id, data) {
  return prisma.user.update({
    where: { id },
    data,
    select: safeUserSelect,
  });
}


async function deleteUser(userId) {
  await prisma.user.delete({ where: { id: userId } });
}

export default {
  createUser,
  findAllUsers,
  findAdminByEmail,
  findUserByEmail,
  findUserById,
  verifyPassword,
  updateUser,
  deleteUser,
};
