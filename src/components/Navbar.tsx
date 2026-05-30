import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          CollegeHub
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/colleges"
            className="hover:text-blue-600"
          >
            Colleges
          </Link>

          <Link
            href="/login"
            className="hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}