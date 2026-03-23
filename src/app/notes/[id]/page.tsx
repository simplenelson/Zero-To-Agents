import Link from "next/link";
import { getNoteById } from "@/lib/notes";
import { notFound } from "next/navigation";
import { NoteContent } from "@/components/NoteContent";

export const dynamic = "force-dynamic";

export default async function NotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const note = getNoteById(id);

  if (!note) notFound();

  return (
    <div className="max-w-3xl">
      <Link
        href="/notes"
        className="text-blue-400 hover:text-blue-300 text-sm mb-4 inline-block"
      >
        &larr; Back to notes
      </Link>

      <div className="mb-4">
        <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
          {note.category}
        </span>
      </div>

      <h1 className="text-3xl font-bold mb-2">{note.title}</h1>

      <p className="text-gray-500 text-sm mb-6">
        Updated {new Date(note.updatedAt).toLocaleDateString()}
      </p>

      <div className="prose prose-invert max-w-none">
        <NoteContent content={note.content} />
      </div>
    </div>
  );
}
