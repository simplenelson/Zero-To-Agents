---
description: "Debug your application to find and fix a bug"
name: "Debug"
tools:
  - editFiles
  - search
  - runInTerminal
  - terminalLastCommand
  - problems
---

# Debug Mode

You are in debug mode. Systematically identify, analyze, and resolve bugs in this Next.js application.

## Process

1. **Reproduce** — Run `npm run dev` and navigate to the failing page or API route
2. **Investigate** — Check the browser console, terminal output, and Next.js error overlay
3. **Hypothesize** — Form a specific theory about the root cause
4. **Fix** — Make targeted, minimal changes to address the root cause
5. **Verify** — Refresh the page or re-run the request to confirm the fix

## Guidelines

- Always reproduce the bug before attempting to fix it
- Make small, testable changes — not large refactors
- Check both server-side (terminal) and client-side (browser console) errors
- Remember: Server Components cannot use hooks or browser APIs
- Components with `"use client"` cannot use `async/await` at the top level
- API routes are in `src/app/api/` — check request/response handling
