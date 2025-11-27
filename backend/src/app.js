// Main server setup for Navero backend.
// Loads middlewares, registers all route groups, and exposes the API.

import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import errorMiddleware from "./middlewares/error.middleware.js";
import dotenv from "dotenv"

// Role-based routing modules
// import adminRoutes from "./routes/admin.routes.js";
import authRoutes from "./routes/auth.routes.js";
// import bankRoutes from "./routes/bank.routes.js";
// import brokerRoutes from "./routes/broker.routes.js";
// import customsRoutes from "./routes/customs.routes.js";
// import exporterRoutes from "./routes/exporter.routes.js";
// import importerRoutes from "./routes/importer.routes.js";
// import serviceRoutes from "./routes/service.routes.js";

const app = express();

// Parse cookies for session / auth tokens
app.use(cookieParser());

// Parse incoming JSON payloads
app.use(express.json());

// Global error handler (kept last among middleware but before routes)
app.use(errorMiddleware.errorHandler);

app.use(morgan("dev"));

// Health check / root route
app.get("/", async (req, res) => {
  try {
    res.send("This is navero backend");
  } catch (err) {
    console.error("CANNOT GET /:", err);
  }
});

console.log()

/*  
  Route groups
  Each category is logically separated:
  - /api/admin        Super admin actions (manage users, shipments, stats, etc.)
  - /api/auth         Authentication for all roles
  - /api/bank         Banks (importer/exporter) handling LC + payments
  - /api/broker       Freight/customs brokers handling docs + tasks
  - /api/customs      Customs integrations: status, events, submissions
  - /api/exporter     Exporter operations: quotes, LC, shipments
  - /api/importer     Importer operations: quotes, LC, shipments
  - /api/services     Marketplace services listed by providers
*/

// app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
// app.use("/api/bank", bankRoutes);
// app.use("/api/broker", brokerRoutes);
// app.use("/api/customs", customsRoutes);
// app.use("/api/exporter", exporterRoutes);
// app.use("/api/importer", importerRoutes);
// app.use("/api/services", serviceRoutes);

export default app;
