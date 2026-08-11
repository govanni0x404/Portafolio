# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal portfolio site: a React SPA (`client/`) with an Express API (`server/`) that handles the contact form by emailing submissions via Resend. Two independent npm packages orchestrated from the root with `concurrently`.

## Commands

Run from the repo root unless noted.

```bash
npm run install:all      # install deps in both client/ and server/
npm run dev               # run client (Vite, :5173) and server (nodemon, :4000) together
npm run build              # production build of the client only (dist/ in client/)
```

Per-package commands (run inside `client/` or `server/`):

```bash
# client/
npm run dev        # Vite dev server
npm run build       # production build
npm run lint         # oxlint
npm run preview      # preview the production build

# server/
npm run dev         # nodemon src/server.js
npm run start         # node src/server.js (no reload)
```

There is no test suite configured in either package.

## Environment setup

Both packages read from `.env` (see `.env.example` in each):

- `client/.env` — `VITE_API_URL` (defaults to `/api`; the Vite dev server proxies `/api/*` to `http://localhost:4000`, so this is only needed to point at a different backend, e.g. in production).
- `server/.env` — `PORT`, `CORS_ORIGIN`, `RESEND_API_KEY` (from resend.com/api-keys), optional `RESEND_FROM_EMAIL` (defaults to the Resend sandbox sender `onboarding@resend.dev`, which works without a verified domain), and `CONTACT_TO_EMAIL` (where contact form submissions are sent). Without a verified domain in Resend, sandbox mode only allows sending to the email address the Resend account was created with — `CONTACT_TO_EMAIL` must match that address until a domain is verified at resend.com/domains.

## Architecture

**`client/`** — Vite + React 19, Tailwind CSS v4 (via `@tailwindcss/vite`, no `tailwind.config.js` needed). Single-page layout composed in `src/App.jsx` from one component per section (`src/components/`): `Navbar`, `Hero`, `Projects`, `Services`, `About`, `Contact`, `Footer`. Navigation is anchor-based scrolling (`#proyectos`, `#contacto`, ...), not React Router — there are no other routes. Content for the `Projects` and `Services` sections lives in `src/data/` as plain arrays; add new projects/services there rather than hardcoding JSX.

**`server/`** — Express (ESM, `"type": "module"`), single resource: `POST /api/contact`. Request flow: `routes/contact.routes.js` → `middleware/contactLimiter.js` (rate limit) → `controllers/contact.controller.js` (Zod validation, then sends mail via the Resend client in `config/mailer.js`). Config/env parsing is centralized in `config/env.js` — read env vars from there rather than `process.env` directly elsewhere. There is no database; contact submissions are only emailed, not persisted.

**Contact form data flow**: `Contact.jsx` (react-hook-form) → `axios.post('${VITE_API_URL}/contact', ...)` → Express `/api/contact` → Zod validation → Resend (`resend.emails.send`) → `CONTACT_TO_EMAIL`. Client-side validation in the form mirrors but does not replace the server-side Zod schema in `contact.controller.js` — treat the server schema as the source of truth if the two need to change together.

**CV download**: static file served from `client/public/cv/`; the About section links to it directly (no backend involvement).
