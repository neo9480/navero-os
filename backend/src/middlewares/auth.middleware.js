import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userUtils from "../utils/user.utils.js";
import authUtils from "../utils/auth.utils.js";

async function authMiddleware(req, res, next) {
  try {
    const accessToken = getAccessToken(req);

    if (!accessToken) {
      return res.status(401).json({ message: "login required" });
    }

    try {
      const decoded = await authUtils.verifyToken(accessToken);
      const user = await userUtils.findUserById(decoded.userId); // match your JWT payload key

      if (!user) return res.status(401).json({ message: "user not found" });

      req.user = { id: user.id, role: user.role, email: user.email };
      return next();
    } catch (err) {
      return res
        .status(401)
        .json({ message: "access token invalid or expired" });
    }
  } catch (err) {
    console.error('', err);
  }
}

export default authMiddleware