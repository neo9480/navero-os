import prisma from "../db/prismaClient.js";
import jwt from "jsonwebtoken";
import authUtils from "../utils/auth.utils.js";
import userUtils from "../utils/user.utils.js";

function generateAccessToken(user: any) {
  return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_TTL || "15m",
  });
}

function setRefreshCookie(res: any, token: any, expiresAt: any) {
  res.cookie("refresh_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    expires: expiresAt,
    path: "/",
  });
}

async function register(req: any, res: any) {
  try {
    const { email, password, role, companyName, phone, address } = req.body;

    const exists = await userUtils.findUserByEmail(email);
    if (exists) return res.status(400).json({ error: "Email already in use" });

    const user = await userUtils.createUser(
      email,
      password,
      role,
      companyName,
      phone,
      address,
    );

    const { passwordHash: _unused, ...safeUser } = user;

    res.status(201).json({ message: "User registered", user: safeUser });
  } catch (err) {
    console.error("failed to register user:", err);
  }
}

async function login(req: any, res: any) {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user)
      return res.status(400).json({ error: "invalid email or password" });

    const valid = await userUtils.verifyPassword(password, user.passwordHash);
    if (!valid)
      return res
        .status(400)
        .json({ error: "invalid email or password", valid });

    const accessToken = generateAccessToken(user);

    const expiresAt = new Date();
    expiresAt.setDate(
      expiresAt.getDate() + Number(process.env.REFRESH_TOKEN_DAYS),
    );
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
  }
}

async function refresh(req: any, res: any) {
  try {
    const token = req.cookies.refresh_token;
    if (!token) return res.status(401).json({ error: "No refresh token" });

    const record: any = await authUtils.findRefreshToken(token);
    if (!record || record.revoked)
      return res.status(401).json({ error: "Invalid refresh token" });

    const user = await prisma.user.findUnique({ where: { id: record.userId } });
    if (!user) return res.status(401).json({ error: "User not found" });

    await authUtils.deleteRefreshToken(token);

    const newExpiresAt = new Date();
    newExpiresAt.setDate(
      newExpiresAt.getDate() + Number(process.env.REFRESH_TOKEN_DAYS),
    );
    const newRefreshToken = await authUtils.createRefreshToken(
      user.id,
      newExpiresAt,
    );

    setRefreshCookie(res, newRefreshToken, newExpiresAt);

    const accessToken = generateAccessToken(user);
    res.json({ accessToken });
  } catch (err) {
    console.error("failed to refresh token:", err);
  }
}

async function logout(req: any, res: any) {
  try {
    const token = req.cookies.refresh_token;
    if (token) {
      await authUtils.deleteRefreshToken(token);
      res.clearCookie("refresh_token", { path: "/" });
    }
    res.json({ message: "Logged out" });
  } catch (err) {
    console.error("failed to logout user:", err);
  }
}

async function logoutAll(req: any, res: any) {
  try {
    // You already have req.user from the middleware (access token verified)
    const userId = req.user.id;

    await authUtils.deleteAllTokensForUser(userId);

    res.clearCookie("refresh_token", { path: "/" });

    res.json({ message: "Logged out from all devices" });
  } catch (err) {
    console.error("failed to logout all users:", err);
  }
}

async function getUserProfile(req: any, res: any) {
  try {
    const userId = req.user.id;

    const user = await userUtils.findUserById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    const { passwordHash: _unused, ...safeUser } = user;

    res.status(200).json({
      message: "user profile fetched successfully",
      user: safeUser,
    });
  } catch (err) {
    console.error("failed to fetch user", err);
  }
}

async function updateUserProfile(req: any, res: any) {
  try {
    const userId = req.user.id;
    const { companyName, phone, address } = req.body;

    // build dynamic update object
    const updateData: Record<string, any> = {};
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
  }
}

async function deleteUserProfile(req: any, res: any) {
  try {
    const userId = req.user.id;

    await authUtils.deleteAllTokensForUser(userId);
    await userUtils.deleteUser(userId);

    res.status(200).json({
      message: "user deleted successfully",
    });
  } catch (err) {
    console.error("failed to delete user", err);
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
