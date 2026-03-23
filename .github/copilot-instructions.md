# Copilot Instructions — DevNotes Knowledge Base

## Project Overview

This is DevNotes, a developer knowledge base built with Next.js (App Router), Tailwind CSS, and TypeScript.
Notes are stored in-memory (no database). The app renders markdown content.

## Code Style

- Use TypeScript strict mode
- Use functional components — no class components
- Use Server Components by default, only add `"use client"` when interactivity is needed
- Keep functions small and focused
- Use descriptive variable and function names
- Do not add comments unless the logic is non-obvious

## Architecture

- **Pages** go in `src/app/` — use Next.js App Router file conventions
- **Components** go in `src/components/` — reusable UI pieces
- **Data layer** is in `src/lib/` — notes store, types, utilities
- **API routes** go in `src/app/api/` — RESTful handlers
- Use `@/` path alias for imports from `src/`

## Styling

- Use Tailwind CSS utility classes for all styling
- Follow the existing dark theme (gray-900/950 backgrounds, gray-100 text, blue-400/600 accents)
- Do not use inline styles or CSS modules

## API Conventions

- Return JSON for all API responses
- Use proper HTTP status codes (200, 201, 204, 400, 404)
- Validate required fields and return 400 for bad input
