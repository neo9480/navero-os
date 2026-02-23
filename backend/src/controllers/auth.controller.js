import prisma from "../db/prismaClient.js";
import jwt from "jsonwebtoken";
import authUtils from "../utils/auth.utils.js";
import userUtils from "../utils/user.utils.js";

const REFRESH_TOKEN_EXPIRATION = process.env.REFRESH_TOKEN_EXPIRATION || "7d";

const parseDuration = (str) => {
  const match = /^(\d+)([smhd])$/.exec(str);
  if (!match) return 7 * 86400000;

  const value = parseInt(match[1], 10);
  const unit = match[2];

  return (
    {
      s: value * 1000,
      m: value * 60000,
      h: value * 3600000,
      d: value * 86400000,
    }[unit] ?? 7 * 86400000
  );
};

function getRefreshExpiryDate() {
  return new Date(Date.now() + parseDuration(REFRESH_TOKEN_EXPIRATION));
}

function generateAccessToken(user) {
  return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_TTL || "15m",
  });
}

function setRefreshCookie(res, token, expiresAt) {
  res.cookie("refresh_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    expires: expiresAt,
    path: "/",
  });
}

function clearRefreshCookie(res) {
  res.clearCookie("refresh_token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });
}

async function register(req, res) {
  try {
    const { email, password, role, companyName, phone, address, plan } =
      req.body;

    const allowedPlans = ["free_trial", "basic", "pro", "enterprise"];
    const safePlan = allowedPlans.includes(plan) ? plan : "free_trial";

    const exists = await userUtils.findUserByEmail(email);
    if (exists) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const result = await prisma.$transaction(async (tx) => {
      const user = await userUtils.createUser(
        email,
        password,
        role,
        companyName,
        phone,
        address,
        tx, // optional if your util supports prisma injection
      );

      const trialDays = Number(process.env.TRIAL_DAYS) || 14;
      const now = new Date();
      const trialEndsAt = new Date(now);
      trialEndsAt.setDate(trialEndsAt.getDate() + trialDays);

      await tx.subscription.create({
        data: {
          userId: user.id,
          plan: safePlan,
          status: "TRIALING", // ✅ NEVER trust frontend payment
          startedAt: now,
          trialEndsAt,
        },
      });

      return user;
    });

    const userWithSub = await prisma.user.findUnique({
      where: { id: result.id },
      include: { subscription: true },
    });

    const { passwordHash: _unused, ...safeUser } = userWithSub;

    res.status(201).json({
      message: "User registered",
      user: safeUser,
    });
  } catch (err) {
    console.error("failed to register user:", err);
    res.status(500).json({ error: "Registration failed" });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
      include: { subscription: true },
    });
    if (!user)
      return res.status(400).json({ error: "invalid email or password" });

    const valid = await userUtils.verifyPassword(password, user.passwordHash);
    if (!valid)
      return res
        .status(400)
        .json({ error: "invalid email or password", valid });

    const accessToken = generateAccessToken(user);

    const expiresAt = getRefreshExpiryDate();
    const refreshToken = await authUtils.createRefreshToken(user.id, expiresAt);

    setRefreshCookie(res, refreshToken, expiresAt);

    const { passwordHash: _unused, ...safeUser } = user;

    res.json({
      message: "user login successfull",
      accessToken,
      user: safeUser,
    });
  } catch (err) {
    console.error("failed to login user:", err);
    res.status(500).json({ error: "failed to login user" });
  }
}

async function refresh(req, res) {
  try {
    const token = req.cookies.refresh_token;
    if (!token) return res.status(401).json({ error: "No refresh token" });

    const record = await authUtils.findRefreshToken(token);
    if (!record || record.revoked)
      return res.status(401).json({ error: "Invalid refresh token" });

    const user = await prisma.user.findUnique({ where: { id: record.userId } });
    if (!user) return res.status(401).json({ error: "User not found" });

    const newExpiresAt = getRefreshExpiryDate();
    const newRefreshToken = await authUtils.rotateRefreshToken(
      token,
      user.id,
      newExpiresAt,
    );

    setRefreshCookie(res, newRefreshToken, newExpiresAt);

    const accessToken = generateAccessToken(user);
    res.json({ accessToken });
  } catch (err) {
    console.error("failed to refresh token:", err);
    res.status(500).json({ error: "failed to refresh token" });
  }
}

async function logout(req, res) {
  try {
    const token = req.cookies.refresh_token;
    if (token) {
      await authUtils.deleteRefreshToken(token);
    }
    clearRefreshCookie(res);
    res.json({ message: "Logged out" });
  } catch (err) {
    console.error("failed to logout user:", err);
    res.status(500).json({ error: "failed to logout user" });
  }
}

async function logoutAll(req, res) {
  try {
    // You already have req.user from the middleware (access token verified)
    const userId = req.user.id;

    await authUtils.deleteAllTokensForUser(userId);

    clearRefreshCookie(res);

    res.json({ message: "Logged out from all devices" });
  } catch (err) {
    console.error("failed to logout all users:", err);
    res.status(500).json({ error: "failed to logout all users" });
  }
}

async function getUserProfile(req, res) {
  try {
    const userId = req.user.id;

    const user = await userUtils.findUserById(userId);
    if (!user) return res.status(404).json({ error: "user not found" });

    const { passwordHash: _unused, ...safeUser } = user;

    res.status(200).json({
      message: "user profile fetched successfully",
      user: safeUser,
    });
  } catch (err) {
    console.error("failed to fetch user", err);
    res.status(500).json({ error: "failed to fetch user" });
  }
}

async function updateUserProfile(req, res) {
  try {
    const userId = req.user.id;
    const { companyName, phone, address } = req.body;

    // build dynamic update object
    const updateData = {};
    if (companyName !== undefined) updateData.companyName = companyName;
    if (phone !== undefined) updateData.phone = phone;
    if (address !== undefined) updateData.address = address;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ error: "no valid fields to update" });
    }

    const updatedUser = await userUtils.updateUser(userId, updateData);

    res.status(200).json({
      message: "user profile updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.error("failed to update user", err);
    res.status(500).json({ error: "failed to update user" });
  }
}

async function deleteUserProfile(req, res) {
  try {
    const userId = req.user.id;

    await authUtils.deleteAllTokensForUser(userId);
    await userUtils.deleteUser(userId);

    res.status(200).json({
      message: "user deleted successfully",
    });
  } catch (err) {
    console.error("failed to delete user", err);
    res.status(500).json({ error: "failed to delete user" });
  }
}

export default {
  generateAccessToken,
  setRefreshCookie,
  register,
  login,
  refresh,
  logout,
  logoutAll,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
};
