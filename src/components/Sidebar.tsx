import Link from "next/link";
import { CATEGORIES } from "@/lib/types";

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 p-6 flex flex-col min-h-screen">
      <Link href="/" className="text-xl font-bold text-blue-400 mb-8 block">
        📘 DevNotes
      </Link>

      <nav className="space-y-1 flex-1">
        <Link
          href="/notes"
          className="block px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white text-sm"
        >
          All Notes
        </Link>

        <div className="pt-4 pb-2 px-3 text-xs text-gray-500 uppercase tracking-wider">
          Categories
        </div>

        {CATEGORIES.map((category) => (
          <Link
            key={category}
            href={`/notes?category=${encodeURIComponent(category)}`}
            className="block px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white text-sm"
          >
            {category}
          </Link>
        ))}
      </nav>

      <div className="pt-4 border-t border-gray-800">
        <Link
          href="/notes/new"
          className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm"
        >
          + New Note
        </Link>
      </div>
    </aside>
  );
}
