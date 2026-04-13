import Link from "next/link";
import { getAllNotes, getNotesByCategory } from "@/lib/notes";
import { NoteCard } from "@/components/NoteCard";
import { CATEGORIES } from "@/lib/types";

export const dynamic = "force-dynamic";

interface NotesPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function NotesPage({ searchParams }: NotesPageProps) {
  const { category } = await searchParams;
  const validCategory = CATEGORIES.find((c) => c === category);
  const notes = validCategory ? getNotesByCategory(validCategory) : getAllNotes();
  const displayCategories = validCategory ? [validCategory] : CATEGORIES;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">
          {validCategory ? validCategory : "All Notes"}
        </h1>
        <div className="flex items-center gap-3">
          {validCategory && (
            <Link
              href="/notes"
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              &larr; All Notes
            </Link>
          )}
          <Link
            href="/notes/new"
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm"
          >
            + New Note
          </Link>
        </div>
      </div>

      {displayCategories.map((cat) => {
        const categoryNotes = validCategory
          ? notes
          : notes.filter((n) => n.category === cat);
        if (categoryNotes.length === 0) return null;

        return (
          <div key={cat} className="mb-8">
            {!validCategory && (
              <h2 className="text-lg font-semibold text-gray-300 mb-3">
                {cat}
              </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryNotes.map((note) => (
                <NoteCard key={note.id} note={note} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
