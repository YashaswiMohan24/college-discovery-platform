import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("BODY:", body);

    const {
      name,
      email,
      password,
    } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        {
          error: "All fields required",
        },
        {
          status: 400,
        }
      );
    }

    const existingUser =
      await prisma.user.findUnique({
        where: {
          email,
        },
      });

    if (existingUser) {
      return NextResponse.json(
        {
          error: "User already exists",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    console.log("Creating user...");

    const user =
      await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });

    console.log("USER CREATED:", user);

    return NextResponse.json(user);
  } catch (error) {
    console.error("SIGNUP ERROR:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}