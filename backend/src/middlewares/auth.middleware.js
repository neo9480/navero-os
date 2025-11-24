import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userService from "../services/user.service.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

async function authUserMiddlware( req, res, next ) {
  
  if (!JWT_SECRET) {
    console.error("JWT_SECRET is missing in environment variables");
    return res.status(500).json({ message: "internal server error" });
  }

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "access denied: please login first",
    });
  }

  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await userService.findUserById( decoded.id );
    if (!user) {
      return res.status(401).json({
        message: "access denied: user no longer exists",
      });
    }
    const { password, ...safeUser } = user;
    req.user = safeUser;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "access denied: invalid token"
    });
  }
}

export default {
  authUserMiddlware,
};
