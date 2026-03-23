Create a new page for the DevNotes knowledge base app.

Follow these steps:
1. Create the page file in `src/app/{{ path }}/page.tsx`
2. Use Server Components by default; add `"use client"` only if the page needs interactivity
3. Style with Tailwind CSS, following the existing dark theme
4. If the page needs data, import functions from `src/lib/notes.ts`
5. Reuse existing components from `src/components/` where possible
6. Add navigation to the new page in `src/components/Sidebar.tsx`

Page to create: {{ description }}
