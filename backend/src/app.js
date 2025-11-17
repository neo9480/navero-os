// Server routes
import express from "express";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/error.middleware.js";
// import adminRoutes from './routes/admin.routes.js'
// import bookingRoutes from "./routes/booking.routes.js";
// import documentRoutes from "./routes/document.routes.js";
// import serviceRoutes from "./routes/service.routes.js";
// import shipmentRoutes from "./routes/shipment.routes.js";
// import transactionRoutes from "./routes/transaction.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
app.use(cookieParser());
app.use( express.json() );
app.use( errorMiddleware.errorHandler );



app.get("/", async (req, res) => {
  try {
    res.send("This is navero backend");
  } catch (err) {
    console.error("CANNOT GET /:", err);
  }
});

// app.use( '/api/admin', adminRoutes );

// app.use( "/api/bookings", bookingRoutes );
// app.use( "/api/documents", documentRoutes );
// app.use( "/api/services", serviceRoutes );
// app.use( "/api/shipments", shipmentRoutes );
// app.use( "/api/transactions", transactionRoutes );
app.use( "/api/auth", authRoutes );



export default app;
