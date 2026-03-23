import Link from "next/link";
import { getAllNotes, getNotesByCategory } from "@/lib/notes";
import { NoteCard } from "@/components/NoteCard";
import { CATEGORIES } from "@/lib/types";

export const dynamic = "force-dynamic";

interface NotesPageProps {
  searchParams: Promise<{
    category?: string | string[];
  }>;
}

export default async function NotesPage({ searchParams }: NotesPageProps) {
  const { category } = await searchParams;
  const categoryParam = Array.isArray(category) ? category[0] : category;
  const selectedCategory = CATEGORIES.find(
    (currentCategory) => currentCategory === categoryParam
  );
  const notes = selectedCategory
    ? getNotesByCategory(selectedCategory)
    : getAllNotes();
  const visibleCategories = selectedCategory ? [selectedCategory] : CATEGORIES;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">
          {selectedCategory ?? "All Notes"}
        </h1>
        <Link
          href="/notes/new"
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm"
        >
          + New Note
        </Link>
      </div>

      {visibleCategories.map((category) => {
        const categoryNotes = notes.filter((n) => n.category === category);
        if (categoryNotes.length === 0) return null;

        return (
          <div key={category} className="mb-8">
            <h2 className="text-lg font-semibold text-gray-300 mb-3">
              {category}
            </h2>
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
