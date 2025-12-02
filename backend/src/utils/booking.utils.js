import prisma from "../db/prismaClient.js";

/**
 * Create a booking for a service.
 *
 * @param {Object} params
 * @param {String} params.userId - User making the booking.
 * @param {String} params.serviceId - Which service is being booked.
 * @param {"PENDING"|"CONFIRMED"|"CANCELLED"} params.status - Optional, defaults to PENDING.
 */
async function createBooking({ userId, serviceId, status = "PENDING" }) {
  if (!userId) throw new Error("Missing userId for createBooking()");
  if (!serviceId) throw new Error("Missing serviceId for createBooking()");

  const booking = await prisma.booking.create({
    data: { userId, serviceId, status },
  });

  return booking;
}

/**
 * Get all bookings made by a specific user.
 */
async function getUserBookings(userId) {
  if (!userId) throw new Error("Missing userId");

  return prisma.booking.findMany({
    where: { userId },
    include: {
      service: true,
    },
    orderBy: { createdAt: "desc" },
  });
}

async function getAllUserBookings() {
  return prisma.booking.findMany();
}

/**
 * Get a single booking by ID.
 */
async function getBookingById(bookingId) {
  return prisma.booking.findUnique({
    where: { id: bookingId },
    include: {
      user: true,
      service: true,
    },
  });
}

/**
 * Update a booking’s status.
 * For example: confirming or cancelling a booking.
 */
async function updateBookingStatus(bookingId, status) {
  if (!bookingId) throw new Error("Missing bookingId");
  if (!status) throw new Error("Missing status");

  return prisma.booking.update({
    where: { id: bookingId },
    data: { status },
  });
}

/**
 * Delete a booking entirely.
 * Mostly admin-side usage.
 */
async function deleteBooking(bookingId) {
  if (!bookingId) throw new Error("Missing bookingId");

  return prisma.booking.delete({
    where: { id: bookingId },
  });
}

export default {
  createBooking,
  getUserBookings,
  getAllUserBookings,
  getBookingById,
  updateBookingStatus,
  deleteBooking,
};
