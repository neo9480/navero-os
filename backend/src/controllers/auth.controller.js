import prisma from "../db/prismaClient.js";
import authUtils from "../utils/auth.utils.js";
import userUtils from "../utils/user.utils.js";
import otpUtils from "../utils/otp.utils.js";
import emailService from "../services/email.service.js";
import config from "../config/config.js";

function handlePrismaError(err, res) {
  if (err.code === "P2002") {
    // err.meta.target is an array of field names that caused the conflict
    const fields = err.meta?.target?.join(", ") ?? "field";
    return res.status(400).json({ error: `${fields} already in use` });
  }
  if (err.code === "P2025") {
    return res.status(404).json({ error: "Record not found" });
  }
  return null; // caller should log and return 500
}

const ALLOWED_SELF_REGISTER_ROLES = [
  "IMPORTER",
  "EXPORTER",
  "BANK",
  "BROKER",
  "CUSTOMS",
  "LOGISTICS_PROVIDER",
];

// ---------------------------------------------------------------------------
// register
// ---------------------------------------------------------------------------
async function register(req, res) {
  try {
    const { email, password, role, companyName, phone, address, plan } =
      req.body;

    if (!ALLOWED_SELF_REGISTER_ROLES.includes(role)) {
      return res.status(400).json({ error: "Invalid role" });
    }

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
        tx,
      );

      const trialDays = Number(config.TRIAL_DAYS);
      const now = new Date();
      const trialEndsAt = new Date(now);
      trialEndsAt.setDate(trialEndsAt.getDate() + trialDays);

      await tx.subscription.create({
        data: {
          userId: user.id,
          plan: safePlan,
          status: "TRIALING",
          startedAt: now,
          trialEndsAt,
        },
      });

      return user;
    });

    const otp = otpUtils.generateOTP();

    const otpHash = await otpUtils.otpHash(otp);

    const html = otpUtils.getOtpHtml;

    await otpUtils.createOtp(result.id, email, otpHash);

    await emailService.sendEmail(
      email,
      "OTP Verification",
      `Your OTP code is ${otp}`,
      html,
    );

    const safeUser = await userUtils.findUserById(result.id);

    res.status(201).json({
      message: "User registered, email verification required",
      user: safeUser,
    });
  } catch (err) {
    console.error("failed to register user:", err);

    const handled = handlePrismaError(err, res);
    if (!handled) {
      res.status(500).json({ error: "Registration failed" });
    }
  }
}

// ---------------------------------------------------------------------------
// login
// ---------------------------------------------------------------------------
async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await userUtils.findUserByEmail(email)

    // Use a generic message to avoid leaking whether the email exists.
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const valid = await userUtils.verifyPassword(password, user.passwordHash);
    if (!valid) {
      // FIX: Removed `valid` from the response body — it leaked a boolean
      // hint that could assist brute-force attempts.
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const refreshToken = await authUtils.generateRefreshToken( user.id )
    
    const refreshTokenHash = await authUtils.generateRefreshTokenHash( refreshToken )

    const refreshTokenExpiry = await authUtils.getRefreshExpiryDate()
    
    const session = await authUtils.createSession(user.id, refreshTokenHash, req.ip, req.headers["user-agent"], refreshTokenExpiry)
    
    const accessToken = await authUtils.generateAccessToken({userId: user.id, sessionId: session.id, role: user.role})
    // Strip passwordHash before sending to the client.
    const { passwordHash: _unused, ...safeUser } = user;

    await authUtils.setRefreshCookie(res, refreshToken)

    res.status(200).json({
      message: "User login successful",
      accessToken,
      user: safeUser,
    });
  } catch (err) {
    console.error("failed to login user:", err);
    res.status(500).json({ error: "Failed to login user" });
  }
}

// ---------------------------------------------------------------------------
// refresh
// Issues a new access token and rotates the refresh token (one-time use).
// ---------------------------------------------------------------------------
async function refresh(req, res) {
  try {
    const refreshToken = req.cookies.refresh_token;
    if ( !refreshToken ) {
      return res.status( 401 ).json( { error: "Refresh token not found" } );
    }
    const decoded = await authUtils.verifyToken( refreshToken )
    
    const refreshTokenHash = await authUtils.generateRefreshTokenHash( refreshToken )
    
    const session = await authUtils.findSession(refreshTokenHash);
    if ( !session || session.revoked ) {
      return res.status( 401 ).json( { error: "Invalid refresh token" } );
    }

		const accessToken = await authUtils.generateAccessToken( {userId: decoded.id} )
		
		const newRefreshToken = await authUtils.generateRefreshToken( decoded.id )
		
    const newRefreshTokenHash = await authUtils.generateRefreshTokenHash( newRefreshToken )
    
    const newRefreshTokenExpiry = await authUtils.getRefreshExpiryDate()
		
		await authUtils.updateSession( {id: session.id}, { refreshToken: newRefreshTokenHash, expiresAt: newRefreshTokenExpiry } )
		
		await authUtils.setRefreshCookie( res, newRefreshToken )
		
		res.status( 200 ).json( {
			message: "Access token refreshed successfully",
			accessToken
		})

  } catch (err) {
    console.error("failed to refresh token:", err);
    res.status(500).json({ error: "Failed to refresh token" });
  }
}

// ---------------------------------------------------------------------------
// logout
// Revokes the current device's refresh token and clears the cookie.
// ---------------------------------------------------------------------------
async function logout(req, res) {
  try {
    const refreshToken = req.cookies.refresh_token;
    if (!refreshToken) {
			return res.status.json( 400 ).json( {
				message: "Refresh token not found"
			})
		}
		const refreshTokenHash = await authUtils.generateRefreshTokenHash( refreshToken )
		
		const session = await authUtils.findSession( refreshTokenHash )
		if ( !session ) {
			return res.status( 400 ).json( {
				message: "Invalid refresh token"
			})
		}
		await authUtils.updateSession( { id: session.id }, { revoked: true } )
		res.clearCookie( "refresh_token" )
		res.status( 200 ).json( {
			message: "Logged out successfully"
		})
  } catch (err) {
    console.error("failed to logout user:", err);
    res.status(500).json({ error: "Failed to logout user" });
  }
}

// ---------------------------------------------------------------------------
// logoutAll
// Revokes all refresh tokens for the user (signs out every device).
// ---------------------------------------------------------------------------
async function logoutAll(req, res) {
	try {
		const refreshToken = req.cookies.refresh_token
		if ( !refreshToken ) {
			return res.status( 400 ).json( {
				message: "Refresh token not found"
			})
		}
		const decoded = await authUtils.verifyToken( refreshToken )
		await authUtils.updateSession( { userId: decoded.id, revoked:false }, { revoked: true } )
		res.clearCookie( "refresh_token" )
		res.status( 200 ).json( {
			message: "Logged out of all devices"
		})
  } catch (err) {
    console.error("failed to logout all users:", err);
    res.status(500).json({ error: "Failed to logout all devices" });
  }
}

// ---------------------------------------------------------------------------
// getUserProfile
// Returns the authenticated user's profile including subscription.
// passwordHash is excluded via safeUserSelect inside findUserById.
// FIX: Previously findUserById didn't include subscription — fixed in utils.
// ---------------------------------------------------------------------------
async function getUserProfile(req, res) {
  try {
    const userId = req.user.id;

    const user = await userUtils.findUserById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    // Note: no need to strip passwordHash here — safeUserSelect in
    // findUserById already excludes it at the query level.
    res.status(200).json({
      message: "User profile fetched successfully",
      user,
    });
  } catch (err) {
    console.error("failed to fetch user", err);
    res.status(500).json({ error: "Failed to fetch user" });
  }
}

// ---------------------------------------------------------------------------
// updateUserProfile
// Only allows updating companyName, phone, and address.
// Email, password, and role changes must go through dedicated flows.
// ---------------------------------------------------------------------------
async function updateUserProfile(req, res) {
  try {
    const userId = req.user.id;
    const { companyName, phone, address } = req.body;

    const updateData = {};
    if (companyName !== undefined) updateData.companyName = companyName;
    if (phone !== undefined) updateData.phone = phone;
    if (address !== undefined) updateData.address = address;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ error: "No valid fields to update" });
    }

    // updateUser now returns safeUserSelect shape (no passwordHash, includes subscription)
    const updatedUser = await userUtils.updateUser(userId, updateData);

    res.status(200).json({
      message: "User profile updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.error("failed to update user", err);

    // FIX: Handle unique constraint on phone number (P2002) with a clear message.
    const handled = handlePrismaError(err, res);
    if (!handled) {
      res.status(500).json({ error: "Failed to update user" });
    }
  }
}

// ---------------------------------------------------------------------------
// deleteUserProfile
// Revokes all tokens first so existing sessions are invalidated immediately,
// then hard-deletes the user record (cascades to related data per schema).
// ---------------------------------------------------------------------------
async function deleteUserProfile(req, res) {
  try {
    const userId = req.user.id;

    await authUtils.deleteAllTokensForUser(userId);
    await userUtils.deleteUser(userId);

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("failed to delete user", err);
    res.status(500).json({ error: "Failed to delete user" });
  }
}

async function verifyEmail(req, res) {
  const { otp, email } = req.body;

  const otpHash = await otpUtils.otpHash(otp);

  const otpRecord = await otpUtils.findOtp(otpHash, email);

  if (!otpRecord) {
    return res.status(400).json({
      message: "Invalid OTP",
    });
  }

  const user = await otpUtils.updateUser(otpRecord.userId);

  await otpUtils.deleteOtp(otpRecord.userId);

  return res.status(200).json({
    message: "Email verified successfully",
    user: {
      companyName: user.companyName,
      email: user.email,
      verified: user.verified,
    },
  });
}

export default {
  register,
  login,
  refresh,
  logout,
  logoutAll,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  verifyEmail,
};
