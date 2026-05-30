import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-24">
        
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold text-gray-900 leading-tight">
            Discover Your Perfect College
          </h1>

          <p className="mt-6 text-xl text-gray-600">
            Search, compare, and explore top engineering colleges
            across India with detailed placement, fee, and
            ranking insights.
          </p>

          <div className="mt-10 flex gap-4">
            
            <Link
              href="/colleges"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
            >
              Explore Colleges
            </Link>

            <Link
              href="/signup"
              className="border border-gray-400 px-6 py-3 rounded-xl hover:bg-gray-200"
            >
              Get Started
            </Link>

          </div>
        </div>

      </section>
    </main>
  );
}