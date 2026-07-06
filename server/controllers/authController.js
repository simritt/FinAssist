// HTTP layer for authentication endpoints
const authService = require("../services/authService");
const { asyncHandler } = require("../middleware/errorHandler");

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

const register = asyncHandler(async (req, res) => {
  const { user, token } = await authService.registerUser(req.body);
  res.cookie("finassist_token", token, COOKIE_OPTIONS);
  res.status(201).json({ success: true, message: "Account created successfully", data: { user, token } });
});

const login = asyncHandler(async (req, res) => {
  const { user, token } = await authService.loginUser(req.body);
  res.cookie("finassist_token", token, COOKIE_OPTIONS);
  res.status(200).json({ success: true, message: "Logged in successfully", data: { user, token } });
});

const logout = asyncHandler(async (req, res) => {
  res.clearCookie("finassist_token", COOKIE_OPTIONS);
  res.status(200).json({ success: true, message: "Logged out successfully" });
});

const getMe = asyncHandler(async (req, res) => {
  const user = await authService.getUserById(req.user.id);
  res.status(200).json({ success: true, data: { user } });
});

module.exports = { register, login, logout, getMe };
