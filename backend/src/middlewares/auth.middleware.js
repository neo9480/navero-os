import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import userUtils from "../utils/user.utils.js";
import refreshTokenUtils from "../utils/token.utils.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || "15m";
const REFRESH_TOKEN_EXPIRATION = process.env.REFRESH_TOKEN_EXPIRATION || "7d";

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET missing in environment variables");
}

// Helper to convert durations like "15m", "7d" to milliseconds
const parseDuration = (str) => {
  const match = /^(\d+)([smhd])$/.exec(str);
  if (!match) throw new Error("Invalid duration format");

  const value = parseInt(match[1], 10);
  const unit = match[2];

  switch (unit) {
    case "s":
      return value * 1000;
    case "m":
      return value * 60 * 1000;
    case "h":
      return value * 60 * 60 * 1000;
    case "d":
      return value * 24 * 60 * 60 * 1000;
    default:
      throw new Error("Unknown duration unit");
  }
};

const generateAccessToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};

const setTokensCookies = (res, accessToken, refreshToken) => {
  res.cookie("token", accessToken, { httpOnly: true, sameSite: "strict" });
  if (refreshToken) {
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
    });
  }
};

async function authMiddleware(req, res, next) {
  const { token: accessToken, refreshToken } = req.cookies || {};

  if (!accessToken) {
    return res.status(401).json({ message: "Access denied: please login" });
  }

  try {
    const decoded = jwt.verify(accessToken, JWT_SECRET);
    const user = await userUtils.findUserById(decoded.id);
    if (!user) throw new Error("User not found");

    const { password, ...safeUser } = user;
    req.user = safeUser;
    return next();
  } catch (accessErr) {
    // Access token expired or invalid
    if (!refreshToken) {
      return res.status(401).json({ message: "Access denied: please login" });
    }

    // Validate refresh token
    const tokenRecord = await refreshTokenUtils.findRefreshToken(
      refreshToken,
    );
    if (
      !tokenRecord ||
      tokenRecord.revoked ||
      tokenRecord.expiresAt < new Date()
    ) {
      return res
        .status(401)
        .json({ message: "Access denied: refresh token invalid" });
    }

    const user = await userUtils.findUserById(tokenRecord.userId);
    if (!user) {
      return res.status(401).json({ message: "Access denied: user not found" });
    }

    // Rotate refresh token
    await refreshTokenUtils.revokeRefreshToken(refreshToken);
    const newRefreshToken = await refreshTokenUtils.createRefreshToken(
      user.id,
      new Date(Date.now() + parseDuration(REFRESH_TOKEN_EXPIRATION)),
    );

    const newAccessToken = generateAccessToken(user.id);
    setTokensCookies(res, newAccessToken, newRefreshToken);

    const { password, ...safeUser } = user;
    req.user = safeUser;
    next();
  }
}

export default authMiddleware;
