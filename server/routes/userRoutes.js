const express = require("express");
const router = express.Router();

const requireAuth = require("../middleware/auth");
const { asyncHandler } = require("../middleware/errorHandler");
const prisma = require("../config/db");

// GET /api/users/dashboard-summary — aggregated data for the dashboard
// Currently returns placeholder-safe empty structures ready to be
// replaced by real portfolio calculations once holdings exist.
router.get(
  "/dashboard-summary",
  requireAuth,
  asyncHandler(async (req, res) => {
    const portfolio = await prisma.portfolio.findFirst({
      where: { userId: req.user.id },
      include: { holdings: true },
    });

    res.status(200).json({
      success: true,
      data: {
        portfolio: portfolio || null,
      },
    });
  })
);

module.exports = router;
