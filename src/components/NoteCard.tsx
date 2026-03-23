import Link from "next/link";
import { Note } from "@/lib/types";

export function NoteCard({ note }: { note: Note }) {
  return (
    <Link
      href={`/notes/${note.id}`}
      className="block bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-gray-600 transition-colors"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-gray-100 text-sm">{note.title}</h3>
      </div>

      <span className="inline-block text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded mb-2">
        {note.category}
      </span>

      <p className="text-gray-500 text-xs">
        {new Date(note.updatedAt).toLocaleDateString()}
      </p>
    </Link>
  );
}
