const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const requireAuth = require("../middleware/auth");
const validate = require("../middleware/validate");
const { registerSchema, loginSchema } = require("../utils/validators");

router.post("/register", validate(registerSchema), authController.register);
router.post("/login", validate(loginSchema), authController.login);
router.post("/logout", authController.logout);
router.get("/me", requireAuth, authController.getMe);

module.exports = router;
