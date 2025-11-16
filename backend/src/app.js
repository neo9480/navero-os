// Server routes
import express from "express";
import userRoutes from "./routes/user.routes.js";
// import adminRoutes from './routes/admin.routes.js'

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    res.send("This is navero backend");
  } catch (err) {
    console.error("CANNOT GET /:", err);
  }
});

app.use("/api/auth", userRoutes);
// app.use( '/api/admin', adminRoutes );

export default app;
