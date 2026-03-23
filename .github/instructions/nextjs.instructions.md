---
description: "Next.js App Router + Tailwind CSS + TypeScript development standards (adapted from github/awesome-copilot)"
applyTo: "**/*.tsx, **/*.ts, **/*.jsx, **/*.js, **/*.css"
---

# Next.js + Tailwind Development Standards

## Project Structure

- Use the `app/` directory (App Router) — not `pages/`
- Top-level source folders:
  - `app/` — Routing, layouts, pages, API route handlers
  - `components/` — Reusable UI components
  - `lib/` — Shared utilities, data access, type definitions
- Use the `@/` path alias for imports from `src/`
- Place route-specific components inside their route folder
- Place shared components in `components/`

## Server vs Client Components

- **Server Components are the default** — do not add `"use client"` unless required
- Add `"use client"` only when the component needs:
  - Event handlers (`onClick`, `onChange`, etc.)
  - React hooks (`useState`, `useEffect`, `useRef`, etc.)
  - Browser APIs (`window`, `document`, `localStorage`)
- Never use `next/dynamic` with `{ ssr: false }` inside a Server Component
- Client Components can be rendered inside Server Components, but not the reverse
- Keep the client boundary as low in the tree as possible to maximize server rendering

## TypeScript

- Use strict mode
- Define props with TypeScript interfaces — not `any` or inline types
- Use `PascalCase` for component names and type/interface names
- Use `camelCase` for variables, functions, and hooks
- Use `UPPER_SNAKE_CASE` for constants

## Tailwind CSS Styling

- Use Tailwind utility classes for all styling — no inline styles or CSS modules
- Follow the existing dark theme:
  - Backgrounds: `gray-900`, `gray-950`
  - Text: `gray-100`, `gray-200`, `gray-400` (muted)
  - Accents: `blue-400`, `blue-500`, `blue-600`
  - Success/badges: `green-400`, `green-500`
- Use responsive prefixes (`sm:`, `md:`, `lg:`) for responsive layouts
- Use semantic HTML elements (`nav`, `main`, `article`, `section`, `header`)

## API Routes (Route Handlers)

- Place in `app/api/` (e.g., `app/api/notes/route.ts`)
- Export async functions named after HTTP verbs: `GET`, `POST`, `PUT`, `DELETE`
- Use Web `Request` and `Response` APIs
- Always validate and sanitize input — return 400 for bad requests
- Return proper HTTP status codes (200, 201, 204, 400, 404)
- Do not call your own Route Handlers from Server Components — extract shared logic into `lib/` instead

## Performance

- Prefer Server Components for data fetching and non-interactive UI
- Use `next/image` for optimized images
- Use `next/font` for font optimization
- Avoid large client bundles — keep most logic server-side
- Use `loading.tsx` and React Suspense for async loading states

## Security

- Sanitize all user input
- Never commit secrets — use `.env.local` for environment variables
- Validate data at API boundaries
