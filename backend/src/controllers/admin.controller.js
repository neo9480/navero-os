import authUtils from "../utils/auth.utils.js";
import userUtils from "../utils/user.utils.js";
import shipmentUtils from "../utils/shipment.utils.js";
import transactionUtils from "../utils/transaction.utils.js";
import serviceUtils from "../utils/service.utils.js";
import bookingUtils from "../utils/booking.utils.js";
import statsUtils from "../utils/stats.utils.js";
import config from "../config/config.js";

/*
|--------------------------------------------------------------------------
| REGISTER SUPER ADMIN
|--------------------------------------------------------------------------
*/
async function registerSuperAdmin(req, res) {
  try {
    const { email, password, secret } = req.body;

    if (secret !== config.SUPER_ADMIN_SECRET) {
      return res.status(403).json({
        message: "Invalid super admin secret",
      });
    }

    const existing = await userUtils.findUserByEmail(email);
    if (existing) {
      return res.status(409).json({
        message: "Admin already exists",
      });
    }

    const user = await userUtils.createUser(email, password, "SUPER_ADMIN");

    const { passwordHash, ...safeUser } = user;

    return res.status(201).json({
      message: "SUPER_ADMIN created successfully",
      user: safeUser,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "failed to create super admin" });
  }
}

/*
|--------------------------------------------------------------------------
| REGISTER ADMIN (ONLY SUPER ADMIN)
|--------------------------------------------------------------------------
*/
async function registerAdmin(req, res) {
  try {
    if (req.user.role !== "SUPER_ADMIN") {
      return res.status(403).json({
        message: "Only SUPER_ADMIN can create ADMIN",
      });
    }

    const { email, password, key } = req.body;

    if (key !== config.ADMIN_KEY) {
      return res.status(403).json({
        message: "Invalid admin key",
      });
    }

    const existing = await userUtils.findUserByEmail(email);
    if (existing) {
      return res.status(409).json({
        message: "admin already exists",
      });
    }

    const admin = await userUtils.createUser(email, password, "ADMIN");

    const { passwordHash, ...safeAdmin } = admin;

    return res.status(201).json({
      message: "ADMIN created successfully",
      user: safeAdmin,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "failed to create admin" });
  }
}

/*
|--------------------------------------------------------------------------
| ADMIN LOGIN
|--------------------------------------------------------------------------
*/
async function adminLogin(req, res) {
  try {
    const { email, password } = req.body;

    const user = await userUtils.findAdminByEmail(email);

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const validPassword = await userUtils.verifyPassword(
      password,
      user.passwordHash,
    );

    if (!validPassword) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }
    const refreshToken = await authUtils.generateRefreshToken(
      user.id,
    );
    const refreshTokenHash =
      await authUtils.generateRefreshTokenHash(refreshToken);
    const refreshTokenExpiry = await authUtils.getRefreshExpiryDate();

    const session = await authUtils.createSession(
      user.id,
      refreshTokenHash,
      req.ip,
      req.headers["user-agent"],
      refreshTokenExpiry,
    );

    const accessToken = await authUtils.generateAccessToken({
      userId: user.id,
      sessionId: session.id,
      role: user.role,
    });

    await authUtils.setRefreshCookie(res, refreshToken);

    const { passwordHash, ...safeUser } = user;

    return res.status(200).json({
      message: "Login successful",
      accessToken,
      user: safeUser,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "login failed" });
  }
}

async function logout(req, res) {
  try {
    const refreshToken = req.cookies.refresh_token;
    if (!refreshToken) {
      return res.status(400).json({
        message: "Refresh token not found",
      });
    }
    const refreshTokenHash =
      await authUtils.generateRefreshTokenHash(refreshToken);
    const session = await authUtils.findSession(refreshTokenHash);
    if (!session) {
      return res.status(400).json({
        message: "invalid refresh token",
      });
    }
    await authUtils.updateSession({ id: session.id }, { revoked: true });

    await authUtils.clearRefreshCookie(res);
    return res.json({ message: "Logged out successfully" });
  } catch (err) {
    console.error("failed to logout admin:", err);
    return res.status(500).json({ error: "Failed to logout admin" });
  }
}

async function logoutAll(req, res) {
  try {
    const refreshToken = req.cookies.refresh_token;
    if (!refreshToken) {
      return res.status(400).json({
        message: "Refresh token not found",
      });
    }
    const decoded = await authUtils.verifyToken(refreshToken);
    await authUtils.updateSession(
      { userId: decoded.userId, revoked: false },
      { revoked: true },
    );
    await authUtils.clearRefreshCookie(res);
    return res.json({ message: "Logged out from all devices" });
  } catch (err) {
    console.error("failed to logout from all devices:", err);
    return res.status(500).json({ error: "Failed to logout all devices" });
  }
}

async function deleteAdmin(req, res) {
  try {
    const userId = req.user.id;

    await authUtils.deleteAllTokensForUser(userId);
    await userUtils.deleteUser(userId);

    return res.status(200).json({ message: "Admin deleted successfully" });
  } catch (err) {
    console.error("failed to delete admin", err);
    return res.status(500).json({ error: "Failed to delete admin" });
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await userUtils.findAllUsers();
    const safeUser = users.map(({ passwordHash, ...rest }) => rest);

    return res.status(200).json({
      message: "users fetched successfully",
      User: safeUser,
    });
  } catch (err) {
    console.error("failed to fetch users", err);
    return res.status(500).json({ error: "Failed to get all users" });
  }
}

async function getUserById(req, res) {
  try {
    const userId = req.params.id;

    const user = await userUtils.findUserById(userId);

    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    const { passwordHash, ...safeUser } = user;

    return res.status(200).json({
      message: "user fetched successfully",
      User: safeUser,
    });
  } catch (err) {
    console.error("failed to fetch user", err);
    return res.status(500).json({ error: "Failed to get user by id" });
  }
}

async function deleteUser(req, res) {
  try {
    const userId = req.params.id;

    await authUtils.deleteAllTokensForUser(userId);
    await userUtils.deleteUser(userId);

    return res.status(200).json({
      message: "user deleted successfully",
    });
  } catch (err) {
    console.error("failed to delete user", err);
    return res.status(500).json({ error: "Failed to delete user" });
  }
}

async function getAllShipments(req, res) {
  try {
    const shipments = await shipmentUtils.getShipments();

    return res.status(200).json({
      message: "shipments fetched successfully",
      Shipments: shipments,
    });
  } catch (err) {
    console.error("failed to fetch shipments", err);
    return res.status(500).json({ error: "Failed to get all shipments" });
  }
}

async function getShipmentById(req, res) {
  try {
    const shipmentId = req.params.id;
    const shipment = await shipmentUtils.getShipmentById(shipmentId);
    if (!shipment) {
      return res.status(404).json({
        message: "Shipment not found",
      });
    }

    return res.status(200).json({
      message: "shipment fetched successfully",
      Shipment: shipment,
    });
  } catch (err) {
    console.error("failed to fetch shipment", err);
    return res.status(500).json({ error: "Failed to get shipments by id" });
  }
}

async function deleteShipment(req, res) {
  try {
    const shipmentId = req.params.id;
    await shipmentUtils.deleteShipment(shipmentId);

    return res.status(200).json({
      message: "shipment deleted successfully",
    });
  } catch (err) {
    console.error("failed to delete shipment", err);
    return res.status(500).json({ error: "Failed to delete shipment" });
  }
}

async function getAllTransactions(req, res) {
  try {
    const transactions = await transactionUtils.getAllUserTransactions();

    return res.status(200).json({
      message: "transactions fetched successfully",
      Transactions: transactions,
    });
  } catch (err) {
    console.error("failed to fetch transactions", err);
    return res.status(500).json({ error: "Failed to get all transactions" });
  }
}

async function getTransactionById(req, res) {
  try {
    const transactionId = req.params.id;
    const transaction =
      await transactionUtils.getTransactionById(transactionId);

    if (!transaction) {
      return res.status(404).json({
        message: "transaction not found",
      });
    }

    return res.status(200).json({
      message: "transaction fetched successfully",
      Transaction: transaction,
    });
  } catch (err) {
    console.error("failed to fetch transaction", err);
    return res.status(500).json({ error: "Failed to get transactions by id" });
  }
}

async function getAllServices(req, res) {
  try {
    const services = await serviceUtils.getAllServices();
    return res.status(200).json({
      message: "services fetched successfully",
      Services: services,
    });
  } catch (err) {
    console.error("failed to fetch services", err);
    return res.status(500).json({ error: "Failed to get all services" });
  }
}

async function getServiceById(req, res) {
  try {
    const serviceId = req.params.id;
    const service = await serviceUtils.getServiceById(serviceId);
    if (!service) {
      return res.status(404).json({
        message: "service not found",
      });
    }
    return res.status(200).json({
      message: "service fetched successfully",
      Service: service,
    });
  } catch (err) {
    console.error("failed to fetch service", err);
    return res.status(500).json({ error: "Failed to get service by id" });
  }
}

async function deleteService(req, res) {
  try {
    const serviceId = req.params.id;
    await serviceUtils.deleteService(serviceId);

    return res.status(200).json({
      message: "service deleted successfully",
    });
  } catch (err) {
    console.error("failed to delete service", err);
    return res.status(500).json({ error: "Failed to delete service" });
  }
}

async function getAllBookings(req, res) {
  try {
    const bookings = await bookingUtils.getAllUserBookings();
    return res.status(200).json({
      message: "bookings fetched successfully",
      Bookings: bookings,
    });
  } catch (err) {
    console.error("failed to fetch bookings", err);
    return res.status(500).json({ error: "Failed to get all bookings" });
  }
}

async function getBookingById(req, res) {
  try {
    const bookingId = req.params.id;
    const booking = await bookingUtils.getBookingById(bookingId);
    if (!booking) {
      return res.status(404).json({
        message: "booking not found",
      });
    }
    return res.status(200).json({
      message: "booking fetched successfully",
      Booking: booking,
    });
  } catch (err) {
    console.error("failed to fetch booking", err);
    return res.status(500).json({ error: "Failed to get booking by id" });
  }
}

async function deleteBooking(req, res) {
  try {
    const bookingId = req.params.id;

    await bookingUtils.deleteBooking(bookingId);
    return res.status(200).json({
      message: "booking deleted successfully",
    });
  } catch (err) {
    console.error("failed to delete booking", err);
    return res.status(500).json({ error: "Failed to delete booking" });
  }
}

export async function getStats(req, res) {
  try {
    // live stats
    const live = await statsUtils.computeLiveStats();

    // trends: last 30 days
    const trends = await statsUtils.getDailyTrends(30);

    // growth: compare last 30 days vs previous 30 days
    const growth = await statsUtils.computeGrowthMetrics({ windowDays: 30 });

    // optional: quick breakdowns (top providers, pending shipments) - add if needed
    return res.status(200).json({
      message: "stats fetched successfully",
      stats: {
        live,
        trends,
        growth,
      },
    });
  } catch (err) {
    console.error("failed to fetch stats", err);
    return res.status(500).json({ error: "failed to fetch stats" });
  }
}

export default {
  registerAdmin,
  registerSuperAdmin,
  adminLogin,
  logout,
  logoutAll,
  deleteAdmin,
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
