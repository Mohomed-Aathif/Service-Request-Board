import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">

      <h1 className="text-6xl font-bold mb-4">
        404
      </h1>

      <p className="text-gray-600 mb-6 text-center">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Go Back Home
      </Link>

    </div>
  );
}