import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-gray-900">
          College Discovery Platform
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Search, compare and explore top colleges.
        </p>
      </div>
    </main>
  );
}