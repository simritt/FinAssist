# FinAssist

A full-stack investment intelligence platform. This repo contains the base scaffold: landing page, authentication (register/login/logout with JWT), and the dashboard shell (ticker, sidebar, top navbar, dashboard home + placeholder feature pages).

## Stack

- **Client:** React + Vite, Tailwind CSS, React Router, Framer Motion, TanStack Query, React Hook Form + Zod, Recharts
- **Server:** Node.js + Express, JWT + bcrypt, Prisma ORM
- **DB:** PostgreSQL

## Project structure

```
FinAssist/
├── client/        # React frontend
├── server/        # Express backend
└── prisma/        # Prisma schema (shared)
```

## Setup

### 1. Database

Install PostgreSQL locally (or use a hosted instance), then create a database:

```bash
createdb finassist
```

### 2. Server

```bash
cd server
cp .env.example .env      # then edit DATABASE_URL and JWT_SECRET
npm install
npx prisma generate --schema=../prisma/schema.prisma
npx prisma migrate dev --schema=../prisma/schema.prisma --name init
npm run dev                # runs on http://localhost:5000
```

### 3. Client

```bash
cd client
npm install
npm run dev                # runs on http://localhost:5173
```

The Vite dev server proxies `/api/*` requests to `http://localhost:5000`, so no CORS config is needed locally beyond what's already in `server.js`.

## Architecture notes for the team

- **Frontend:** all API calls go through `src/services/api.js` (Axios instance with cookie auth). Add new service files following the pattern in `authService.js`.
- **Backend:** business logic lives in `services/`, HTTP handling in `controllers/`, validation via Zod schemas in `utils/validators.js` + `middleware/validate.js`. Follow this same pattern for new features (e.g. `portfolioService.js` → `portfolioController.js` → `portfolioRoutes.js`).
- **Auth:** JWT stored in an httpOnly cookie (`finassist_token`), verified via `middleware/auth.js`. `req.user.id` is available in any route behind `requireAuth`.
- **Dummy data:** lives in `client/src/data/`. Replace with real API calls (ideally via React Query hooks) without changing component props where possible.
