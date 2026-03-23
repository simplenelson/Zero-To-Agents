import Link from "next/link";
import { getAllNotes } from "@/lib/notes";
import { NoteCard } from "@/components/NoteCard";

export const dynamic = "force-dynamic";

export default function Home() {
  const notes = getAllNotes();
  const recentNotes = notes.slice(0, 6);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">DevNotes</h1>
        <p className="text-gray-400">
          Your team&apos;s developer knowledge base. Browse notes by category or
          search for what you need.
        </p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Recent Notes</h2>
        <Link
          href="/notes"
          className="text-blue-400 hover:text-blue-300 text-sm"
        >
          View all &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentNotes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}
