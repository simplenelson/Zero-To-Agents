import { NextResponse } from "next/server";
import { getAllNotes, searchNotes, createNote } from "@/lib/notes";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  const notes = query ? searchNotes(query) : getAllNotes();
  return NextResponse.json(notes);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { title, content, category } = body;

  if (!title || !content || !category) {
    return NextResponse.json(
      { error: "Title, content, and category are required" },
      { status: 400 }
    );
  }

  const note = createNote(title, content, category);
  return NextResponse.json(note, { status: 201 });
}
