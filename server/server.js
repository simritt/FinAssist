require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const healthRoutes = require("./routes/healthRoutes");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

// --- Core Middleware ---
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// --- Routes ---
app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// --- 404 handler ---
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// --- Centralized error handler (must be last) ---
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 FinAssist API running on http://localhost:${PORT}`);
});
