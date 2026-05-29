import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

import { generateToken } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      email,
      password,
    } = body;

    const user =
      await prisma.user.findUnique({
        where: {
          email,
        },
      });

    if (!user) {
      return NextResponse.json(
        {
          error: "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }

    const isPasswordCorrect =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isPasswordCorrect) {
      return NextResponse.json(
        {
          error: "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }

    const token = generateToken(user.id);

    const response = NextResponse.json({
      message: "Login successful",
    });

    response.cookies.set(
      "token",
      token,
      {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
      }
    );

    return response;
  } catch (error) {
    console.log(error);

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