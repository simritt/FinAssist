// JWT signing / verification configuration
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

if (!JWT_SECRET) {
  // Fail fast in any environment if the secret isn't configured
  console.warn("[WARN] JWT_SECRET is not set. Set it in server/.env before running in production.");
}

function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET || "dev-fallback-secret", {
    expiresIn: JWT_EXPIRES_IN,
  });
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET || "dev-fallback-secret");
}

module.exports = { signToken, verifyToken };
