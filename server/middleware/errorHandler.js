// Centralized error handler — keeps controllers clean of try/catch boilerplate noise
function errorHandler(err, req, res, next) {
  console.error(`[ERROR] ${req.method} ${req.path}:`, err.message);

  // Prisma unique constraint violation
  if (err.code === "P2002") {
    return res.status(409).json({
      success: false,
      message: `An account with this ${err.meta?.target?.[0] || "value"} already exists`,
    });
  }

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Something went wrong on our end",
  });
}

// Wraps async controllers so thrown errors are forwarded to errorHandler
function asyncHandler(fn) {
  return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
}

module.exports = { errorHandler, asyncHandler };
