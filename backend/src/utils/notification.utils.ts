import prisma from "../db/prismaClient.js";

/**
 * Simple notification service to persist in-app notifications.
 */

/**
 * Push a notification for a user
 * @param {string} userId
 * @param {string} title
 * @param {string} message
 */
async function pushNotification(userId: any, title: any, message: any) {
  return prisma.notification.create({
    data: { userId, title, message },
  });
}

/**
 * List notifications for a user
 * @param {string} userId
 */
async function listNotifications(userId: any) {
  return prisma.notification.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
}

export default {
  pushNotification,
  listNotifications,
};
