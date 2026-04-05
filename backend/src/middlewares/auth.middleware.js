import userUtils from "../utils/user.utils.js";
import authUtils from "../utils/auth.utils.js";

async function authMiddleware(req, res, next) {
  try {
    const accessToken = await authUtils.getAccessToken(req);

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
    console.error("Access Denied: Unauthorised Access", err);
    return res.status( 400 ).json( {
      message: "Access Denied: Unauthorised Access"
    })
  }
}

export default authMiddleware