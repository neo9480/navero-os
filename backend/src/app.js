// Main server setup for Navero backend.
// Loads middlewares, registers all route groups, and exposes the API.
import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import errorMiddleware from "./middlewares/error.middleware.js";
import cors from "cors";
import config from "./config/config.js";
// Role-based routing modules
import adminRoutes from "./routes/admin.routes.js";
import authRoutes from "./routes/auth.routes.js";
import documentsRoutes from "./routes/documents.routes.js";
// import financeRoutes from "./routes/finance.routes.js";
import operationRoutes from "./routes/operations.routes.js";
// import operatorRoutes from "./routes/operators.routes.js";
// import userRoutes from "./routes/user.routes.js";
import shipmentRoutes from "./routes/shipment.routes.js";
// import serviceRoutes from "./routes/service.routes.js";
import path from "path";

const app = express();
const __dirname = path.resolve();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

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

/*  
  Route groups
  Each category is logically separated:
  - /api/admin        Super admin actions (manage users, shipments, stats, etc.)
  - /api/auth         Authentication for all roles
*/

app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/docs", documentsRoutes);
// app.use("/api/finance", financeRoutes);
app.use("/api/operations", operationRoutes);
// app.use("/api/operators", operatorRoutes);
// app.use("/api/user", userRoutes);
app.use("/api/shipment", shipmentRoutes);
// app.use("/api/service", serviceRoutes);

if (config.NODE_ENV === "Production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

export default app;
