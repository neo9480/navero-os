import prisma from "../db/prismaClient.js";
import bcrypt from "bcryptjs";

async function createUser(
  owner_name,
  company_name,
  business_email,
  password,
  phone,
  address,
  role ) {
  
  const hashedPassword = await bcrypt.hash( password, 10 );

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
  } );
  
  return user;
} 

async function findUserByEmail(business_email) {
  return await prisma.user.findUnique({
    where: { business_email }
  });
}

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
    }
  });
}

async function updateUser(userId, owner_name, company_name, phone, address) {
  return await prisma.user.update({
    where: {
      id: userId,
    },
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

async function verifyPassword( password, hashedPassword ) {
  return await bcrypt.compare( password, hashedPassword );
}

export default {
  createUser,
  findUserByEmail,
  findUserById,
  verifyPassword,
  updateUser
}