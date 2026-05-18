import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

        <Link
          href="/"
          className="text-3xl font-black tracking-tight text-white"
        >
          Service
          <span className="text-blue-400">
            Board
          </span>
        </Link>

        <Link
          href="/jobs/new"
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105"
        >
          + Post Job
        </Link>

      </div>

    </nav>
  );
}