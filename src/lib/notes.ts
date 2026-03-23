import { Note } from "./types";

let notes: Note[] = [
  {
    id: "1",
    title: "Project Setup Guide",
    content: `## Getting Started\n\nThis project uses **Next.js** with the App Router and **Tailwind CSS**.\n\n### Prerequisites\n\n- Node.js 20+\n- npm or yarn\n\n### Quick Start\n\n\`\`\`bash\nnpm install\nnpm run dev\n\`\`\`\n\nThe app runs at [http://localhost:3000](http://localhost:3000).`,
    category: "Getting Started",
    createdAt: "2026-03-20T10:00:00Z",
    updatedAt: "2026-03-20T10:00:00Z",
  },
  {
    id: "2",
    title: "App Architecture Overview",
    content: `## Architecture\n\nWe use the **Next.js App Router** with the following structure:\n\n- \`src/app/\` — Pages and layouts\n- \`src/components/\` — Reusable UI components\n- \`src/lib/\` — Data layer and utilities\n- \`src/app/api/\` — API route handlers\n\n### Key Decisions\n\n- **Server Components** by default for data fetching\n- **Client Components** only when interactivity is needed\n- In-memory data store for simplicity`,
    category: "Architecture",
    createdAt: "2026-03-20T11:00:00Z",
    updatedAt: "2026-03-20T11:00:00Z",
  },
  {
    id: "3",
    title: "API Routes Reference",
    content: `## API Endpoints\n\n| Method | Endpoint | Description |\n|--------|----------|-------------|\n| GET | \`/api/notes\` | List all notes |\n| GET | \`/api/notes/:id\` | Get a single note |\n| POST | \`/api/notes\` | Create a note |\n| PUT | \`/api/notes/:id\` | Update a note |\n| DELETE | \`/api/notes/:id\` | Delete a note |\n\n### Creating a Note\n\n\`\`\`json\nPOST /api/notes\n{\n  "title": "My Note",\n  "content": "Markdown content here",\n  "category": "Getting Started"\n}\n\`\`\``,
    category: "API",
    createdAt: "2026-03-20T12:00:00Z",
    updatedAt: "2026-03-20T12:00:00Z",
  },
  {
    id: "4",
    title: "Testing Strategy",
    content: `## Testing\n\nWe don't have tests set up yet — this is a great area to improve!\n\n### What We Should Add\n\n- Unit tests for the data layer (\`src/lib/notes.ts\`)\n- Component tests for UI components\n- API route tests\n\n### Recommended Stack\n\n- **Vitest** for unit tests\n- **React Testing Library** for component tests\n- **Playwright** for end-to-end tests`,
    category: "Testing",
    createdAt: "2026-03-21T09:00:00Z",
    updatedAt: "2026-03-21T09:00:00Z",
  },
  {
    id: "5",
    title: "Deployment Guide",
    content: `## Deploying to Vercel\n\n1. Push your code to GitHub\n2. Connect the repo on [vercel.com](https://vercel.com)\n3. Vercel auto-detects Next.js and deploys\n\n### Environment Variables\n\nNo environment variables needed for the basic app.\n\n### Build Command\n\n\`\`\`bash\nnpm run build\n\`\`\``,
    category: "Deployment",
    createdAt: "2026-03-21T14:00:00Z",
    updatedAt: "2026-03-21T14:00:00Z",
  },
  {
    id: "6",
    title: "Component Conventions",
    content: `## Component Guidelines\n\n- Use **functional components** with TypeScript\n- Export as **named exports**\n- Keep components focused — one responsibility per file\n- Co-locate styles using Tailwind utility classes\n\n### Example\n\n\`\`\`tsx\nexport function StatusBadge({ status }: { status: string }) {\n  return (\n    <span className="px-2 py-1 rounded text-sm bg-blue-900 text-blue-200">\n      {status}\n    </span>\n  );\n}\n\`\`\``,
    category: "Architecture",
    createdAt: "2026-03-22T08:00:00Z",
    updatedAt: "2026-03-22T08:00:00Z",
  },
];

let nextId = 7;

export function getAllNotes(): Note[] {
  return [...notes].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}

export function getNoteById(id: string): Note | undefined {
  return notes.find((n) => n.id === id);
}

export function getNotesByCategory(category: string): Note[] {
  return notes
    .filter((n) => n.category === category)
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
}

export function searchNotes(query: string): Note[] {
  const lower = query.toLowerCase();
  return notes.filter(
    (n) =>
      n.title.toLowerCase().includes(lower) ||
      n.content.toLowerCase().includes(lower)
  );
}

export function createNote(
  title: string,
  content: string,
  category: string
): Note {
  const now = new Date().toISOString();
  const note: Note = {
    id: String(nextId++),
    title,
    content,
    category,
    createdAt: now,
    updatedAt: now,
  };
  notes.push(note);
  return note;
}

export function updateNote(
  id: string,
  updates: Partial<Pick<Note, "title" | "content" | "category">>
): Note | undefined {
  const note = notes.find((n) => n.id === id);
  if (!note) return undefined;

  if (updates.title !== undefined) note.title = updates.title;
  if (updates.content !== undefined) note.content = updates.content;
  if (updates.category !== undefined) note.category = updates.category;
  note.updatedAt = new Date().toISOString();

  return note;
}

export function deleteNote(id: string): boolean {
  const index = notes.findIndex((n) => n.id === id);
  if (index === -1) return false;
  notes.splice(index, 1);
  return true;
}
