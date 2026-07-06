// Business logic for authentication, kept separate from controllers/routing
const bcrypt = require("bcrypt");
const prisma = require("../config/db");
const { signToken } = require("../config/jwt");

const SALT_ROUNDS = 12;

async function registerUser({ fullName, email, password }) {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    const err = new Error("An account with this email already exists");
    err.statusCode = 409;
    throw err;
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const user = await prisma.user.create({
    data: { fullName, email, hashedPassword },
  });

  // Bootstrap default settings + empty portfolio for new users
  await prisma.userSettings.create({ data: { userId: user.id } });
  await prisma.portfolio.create({
    data: { userId: user.id, name: "My Portfolio", cashBalance: 10000 },
  });

  const token = signToken({ userId: user.id, email: user.email });

  return { user: sanitizeUser(user), token };
}

async function loginUser({ email, password }) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    const err = new Error("Invalid email or password");
    err.statusCode = 401;
    throw err;
  }

  const isMatch = await bcrypt.compare(password, user.hashedPassword);
  if (!isMatch) {
    const err = new Error("Invalid email or password");
    err.statusCode = 401;
    throw err;
  }

  const token = signToken({ userId: user.id, email: user.email });
  return { user: sanitizeUser(user), token };
}

async function getUserById(userId) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    const err = new Error("User not found");
    err.statusCode = 404;
    throw err;
  }
  return sanitizeUser(user);
}

// Never leak the password hash to the client
function sanitizeUser(user) {
  const { hashedPassword, ...safeUser } = user;
  return safeUser;
}

module.exports = { registerUser, loginUser, getUserById };
