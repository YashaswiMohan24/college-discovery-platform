import "dotenv/config";

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const connectionString = process.env.DATABASE_URL!;

const pool = new pg.Pool({
  connectionString,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

const colleges = [
  {
    name: "IIT Delhi",
    location: "Delhi",
    fees: 220000,
    rating: 4.8,
    ranking: 2,
    averagePackage: "20 LPA",
    highestPackage: "1.2 CPA",
    establishedYear: 1961,
    collegeType: "Government",
    courses: ["CSE", "ECE", "Mechanical", "Civil"],
    overview:
      "One of India's premier engineering institutes known for research and innovation.",
    placements: "Excellent placements across all branches.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2070&auto=format&fit=crop",
    logo:
      "https://upload.wikimedia.org/wikipedia/en/9/95/IIT_Delhi_Logo.svg",
  },

  {
    name: "IIT Bombay",
    location: "Mumbai",
    fees: 230000,
    rating: 4.9,
    ranking: 1,
    averagePackage: "22 LPA",
    highestPackage: "1.5 CPA",
    establishedYear: 1958,
    collegeType: "Government",
    courses: ["CSE", "AI", "Electrical", "Mechanical"],
    overview:
      "Globally recognized engineering institution with excellent placements.",
    placements: "Top recruiters visit every year.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    logo:
      "https://upload.wikimedia.org/wikipedia/en/5/58/IIT_Bombay_Logo.svg",
  },

  {
    name: "IIT Madras",
    location: "Chennai",
    fees: 210000,
    rating: 4.8,
    ranking: 3,
    averagePackage: "21 LPA",
    highestPackage: "1 CPA",
    establishedYear: 1959,
    collegeType: "Government",
    courses: ["CSE", "Data Science", "ECE"],
    overview:
      "Top-ranked IIT with strong focus on research and entrepreneurship.",
    placements: "Outstanding coding culture and startups.",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
    logo:
      "https://upload.wikimedia.org/wikipedia/en/8/86/IIT_Madras_Logo.svg",
  },

  {
    name: "NIT Trichy",
    location: "Tamil Nadu",
    fees: 180000,
    rating: 4.6,
    ranking: 9,
    averagePackage: "14 LPA",
    highestPackage: "52 LPA",
    establishedYear: 1964,
    collegeType: "Government",
    courses: ["CSE", "ICE", "Civil"],
    overview:
      "Premier NIT institute with strong engineering programs.",
    placements: "Strong placement statistics every year.",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop",
    logo:
      "https://upload.wikimedia.org/wikipedia/en/0/0b/NIT_Trichy_Logo.png",
  },
];

async function main() {
  await prisma.college.deleteMany();

  for (const college of colleges) {
    await prisma.college.create({
      data: college,
    });
  }

  console.log("Seed data inserted successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });