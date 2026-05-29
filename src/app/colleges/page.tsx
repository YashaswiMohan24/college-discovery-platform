import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function CollegesPage() {
  const colleges = await prisma.college.findMany();

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold mb-10">
        Explore Colleges
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges.map((college) => (
          <Link
            href={`/college/${college.id}`}
            key={college.id}
          >
            <div className="bg-white rounded-2xl shadow p-4">
              <img
                src={college.image}
                alt={college.name}
                className="h-52 w-full object-cover rounded-xl"
              />

              <h2 className="text-2xl font-bold mt-4">
                {college.name}
              </h2>

              <p className="mt-2">
                📍 {college.location}
              </p>

              <p className="mt-2">
                ₹{college.fees.toLocaleString()}
              </p>

              <p className="mt-2">
                ⭐ {college.rating}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}