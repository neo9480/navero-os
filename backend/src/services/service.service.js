import prisma from "../db/prismaClient.js";

// Create a service
async function createService(providerId, name, description, price) {
  return prisma.service.create({
    data: {
      providerId,
      name,
      description,
      price,
    },
  });
}

// Get all services
async function getAllServices() {
  return prisma.service.findMany({
    include: {
      provider: true,
    },
  });
}

// Get one service
async function getServiceById(id) {
  return prisma.service.findUnique({
    where: { id },
    include: {
      provider: true,
    },
  });
}

// Delete service
async function deleteService(id) {
  return prisma.service.delete({
    where: { id },
  });
}

export default {
  createService,
  getAllServices,
  getServiceById,
  deleteService,
};
