import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import prisma from "../db/prismaClient.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

async function authUserMiddlware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "access denied: please login first",
    });
  }

  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
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
