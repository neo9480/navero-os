import { Request, Response, NextFunction } from "express";

async function adminMiddleware(req: any, res: any, next: NextFunction) {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ error: "Not authenticated" });
    }
    const userRole = req.user.role;
    if (userRole !== "ADMIN") {
      return res.status(403).json({ error: "Admin access required" });
    }

    next();
  } catch (err) {
    console.error("Admin middleware error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}

export default adminMiddleware;
