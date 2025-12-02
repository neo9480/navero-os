import authUtils from "../utils/auth.utils.js";
import userUtils from "../utils/user.utils.js";
import shipmentUtils from "../utils/shipment.utils.js";
import transactionUtils from "../utils/transaction.utils.js";
import serviceUtils from "../utils/service.utils.js";
import bookingUtils from "../utils/booking.utils.js";
import statsUtils from "../utils/stats.utils.js";

async function getAllUsers(req: any, res: any) {
  try {
    const users = await userUtils.findAllUsers();
    const safeUser = users.map(({ passwordHash, ...rest }) => rest);

    res.status(200).json({
      message: "users fetched successfully",
      User: safeUser,
    });
  } catch (err) {
    console.error("failed to fetch users", err);
  }
}

async function getUserById(req: any, res: any) {
  try {
    const userId = req.params.id;

    const user = await userUtils.findUserById(userId);

    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    const { passwordHash, ...safeUser } = user;

    res.status(200).json({
      message: "user fetched successfully",
      User: safeUser,
    });
  } catch (err) {
    console.error("failed to fetch user", err);
  }
}

async function deleteUser(req: any, res: any) {
  try {
    const userId = req.params.id;

    await authUtils.deleteAllTokensForUser(userId);
    await userUtils.deleteUser(userId);

    res.status(200).json({
      message: "user deleted successfully",
    });
  } catch (err) {
    console.error("failed to delete user", err);
  }
}

async function getAllShipments(req: any, res: any) {
  try {
    const shipments = await shipmentUtils.getShipments();

    res.status(200).json({
      message: "shipments fetched successfully",
      Shipments: shipments,
    });
  } catch (err) {
    console.error("failed to fetch shipments", err);
  }
}

async function getShipmentById(req: any, res: any) {
  try {
    const shipmentId = req.params.id;
    const shipment = await shipmentUtils.getShipmentById(shipmentId);
    if (!shipment) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    res.status(200).json({
      message: "shipment fetched successfully",
      Shipment: shipment,
    });
  } catch (err) {
    console.error("failed to fetch shipment", err);
  }
}

async function deleteShipment(req: any, res: any) {
  try {
    const shipmentId = req.params.id;
    await shipmentUtils.deleteShipment(shipmentId);

    res.status(200).json({
      message: "shipment deleted successfully",
    });
  } catch (err) {
    console.error("failed to delete shipment", err);
  }
}

async function getAllTransactions(req: any, res: any) {
  try {
    const transactions = await transactionUtils.getAllUserTransactions();

    res.status(200).json({
      message: "transactions fetched successfully",
      Transactions: transactions,
    });
  } catch (err) {
    console.error("failed to fetch transactions", err);
  }
}

async function getTransactionById(req: any, res: any) {
  try {
    const transactionId = req.params.id;
    const transaction = await transactionUtils.getTransactionById(
      transactionId,
    );

    if (!transaction) {
      return res.status(404).json({
        message: "transaction not found",
      });
    }

    res.status(200).json({
      message: "transaction fetched successfully",
      Transaction: transaction,
    });
  } catch (err) {
    console.error("failed to fetch transaction", err);
  }
}

async function getAllServices(req: any, res: any) {
  try {
    const services = await serviceUtils.getAllServices();
    res.status(200).json({
      message: "services fetched successfully",
      Services: services,
    });
  } catch (err) {
    console.error("failed to fetch services", err);
  }
}

async function getServiceById(req: any, res: any) {
  try {
    const serviceId = req.params.id;
    const service = await serviceUtils.getServiceById(serviceId);
    if (!service) {
      return res.status(404).json({
        message: "service not found",
      });
    }
    res.status(200).json({
      message: "service fetched successfully",
      Service: service,
    });
  } catch (err) {
    console.error("failed to fetch service", err);
  }
}

async function deleteService(req: any, res: any) {
  try {
    const serviceId = req.params.id;
    await serviceUtils.deleteService(serviceId);

    res.status(200).json({
      message: "service deleted successfully",
    });
  } catch (err) {
    console.error("failed to delete service", err);
  }
}

async function getAllBookings(req: any, res: any) {
  try {
    const bookings = await bookingUtils.getAllUserBookings();
    res.status(200).json({
      message: "bookings fetched successfully",
      Bookings: bookings,
    });
  } catch (err) {
    console.error("failed to fetch bookings", err);
  }
}

async function getBookingById(req: any, res: any) {
  try {
    const bookingId = req.params.id;
    const booking = await bookingUtils.getBookingById(bookingId);
    if (!booking) {
      return res.status(404).json({
        message: "booking not found",
      });
    }
    res.status(200).json({
      message: "booking fetched successfully",
      Booking: booking,
    });
  } catch (err) {
    console.error("failed to fetch booking", err);
  }
}

async function deleteBooking(req: any, res: any) {
  try {
    const bookingId = req.params.id;

    await bookingUtils.deleteBooking(bookingId);
    res.status(200).json({
      message: "booking deleted successfully",
    });
  } catch (err) {
    console.error("failed to delete booking", err);
  }
}

async function getStats(res: any) {
  try {
    // live stats
    const live = await statsUtils.computeLiveStats();

    // trends: last 30 days
    const trends = await statsUtils.getDailyTrends(30);

    // growth: compare last 30 days vs previous 30 days
    const growth = await statsUtils.computeGrowthMetrics({ windowDays: 30 });

    // optional: quick breakdowns (top providers, pending shipments) - add if needed
    res.status(200).json({
      message: "stats fetched successfully",
      stats: {
        live,
        trends,
        growth,
      },
    });
  } catch (err) {
    console.error("failed to fetch stats", err);
    res.status(500).json({ error: "failed to fetch stats" });
  }
}

export default {
  getAllUsers,
  getUserById,
  deleteUser,
  getAllShipments,
  getShipmentById,
  deleteShipment,
  getAllTransactions,
  getTransactionById,
  getAllServices,
  getServiceById,
  deleteService,
  getAllBookings,
  getBookingById,
  deleteBooking,
  getStats,
};
