const allowedRoles = ["ADMIN", "SUPER_ADMIN"];

export default function adminMiddleware(req, res, next) {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ error: "Not authenticated" });
    }
    const userRole = req.user.role;
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ error: "Admin access required" });
    }

    next();
  } catch (err) {
    console.error("Admin middleware error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}
