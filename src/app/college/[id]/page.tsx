import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import SaveCollegeButton from "@/components/SaveCollegeButton";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CollegeDetailPage({
  params,
}: Props) {
  const { id } = await params;

  const college = await prisma.college.findUnique({
    where: {
      id,
    },
  });

  if (!college) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-[450px] object-cover rounded-3xl"
        />

        <div className="mt-10">
          <h1 className="text-5xl font-bold">
            {college.name}
          </h1>

          <p className="mt-4 text-xl text-gray-600">
            📍 {college.location}
          </p>
          <SaveCollegeButton
  collegeId={college.id}
/>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="font-semibold text-gray-500">
                Fees
              </h2>

              <p className="mt-2 text-3xl font-bold">
                ₹{college.fees.toLocaleString()}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="font-semibold text-gray-500">
                Rating
              </h2>

              <p className="mt-2 text-3xl font-bold text-yellow-600">
                ⭐ {college.rating}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="font-semibold text-gray-500">
                Ranking
              </h2>

              <p className="mt-2 text-3xl font-bold">
                #{college.ranking}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h2 className="font-semibold text-gray-500">
                Highest Package
              </h2>

              <p className="mt-2 text-2xl font-bold text-green-600">
                {college.highestPackage}
              </p>
            </div>
          </div>

          <div className="mt-10 bg-white p-8 rounded-2xl shadow">
            <h2 className="text-3xl font-bold">
              Overview
            </h2>

            <p className="mt-6 text-gray-700 leading-8">
              {college.overview}
            </p>
          </div>

          <div className="mt-10 bg-white p-8 rounded-2xl shadow">
            <h2 className="text-3xl font-bold">
              Courses Offered
            </h2>

            <div className="flex flex-wrap gap-4 mt-6">
              {college.courses.map((course) => (
                <span
                  key={course}
                  className="px-4 py-2 bg-gray-200 rounded-full"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}