// Protects routes by verifying the JWT sent via httpOnly cookie or Authorization header
const { verifyToken } = require("../config/jwt");

function requireAuth(req, res, next) {
  try {
    const bearer = req.headers.authorization?.startsWith("Bearer ")
      ? req.headers.authorization.split(" ")[1]
      : null;

    const token = req.cookies?.finassist_token || bearer;

    if (!token) {
      return res.status(401).json({ success: false, message: "Authentication required" });
    }

    const decoded = verifyToken(token);
    req.user = { id: decoded.userId, email: decoded.email };
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Invalid or expired session" });
  }
}

module.exports = requireAuth;
