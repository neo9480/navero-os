import prisma from "../db/prismaClient.js";

/**
 * Marketplace Service layer
 * Responsible for creating/listing/updating/deleting broker/provider services.
 *
 * Schema: Service { id, name, description, price, providerId, createdAt, shipments[] }
 */

/**
 * Create a new marketplace service item
 * @param {Object} payload
 * @param {string} payload.providerId
 * @param {string} payload.name
 * @param {string} [payload.description]
 * @param {number} payload.price
 */
async function createService({ providerId, name, description = null, price }) {
  return prisma.service.create({
    data: { providerId, name, description, price },
  });
}

/**
 * Get services list (optionally by provider)
 * @param {Object} opts
 * @param {string} [opts.providerId]
 * @returns {Promise<Array>}
 */
async function listServices({ providerId } = {}) {
  const where = providerId ? { providerId } : {};
  return prisma.service.findMany({
    where,
    orderBy: { createdAt: "desc" },
    include: {
      provider: { select: { id: true, email: true, companyName: true } },
    },
  });
}

/**
 * Get service by id
 * @param {string} id
 */
async function getServiceById(id) {
  return prisma.service.findUnique({
    where: { id },
    include: {
      provider: { select: { id: true, email: true, companyName: true } },
    },
  });
}

/**
 * Update a service (only provider should call)
 * @param {string} id
 * @param {Object} updates
 */
async function updateService(id, updates = {}) {
  const allowed = ["name", "description", "price"];
  const data = {};
  for (const k of allowed) if (k in updates) data[k] = updates[k];

  return prisma.service.update({
    where: { id },
    data,
  });
}

/**
 * Delete a service
 * @param {string} id
 */
async function deleteService(id) {
  return prisma.service.delete({ where: { id } });
}

export default {
  createService,
  listServices,
  getServiceById,
  updateService,
  deleteService,
};
