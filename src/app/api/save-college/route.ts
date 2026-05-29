import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    const {
      collegeId,
    } = body;

    const cookieStore =
      await cookies();

    const token =
      cookieStore.get("token");

    if (!token) {
      return NextResponse.json(
        {
          error:
            "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const decoded: any =
      verifyToken(token.value);

    await prisma.savedCollege.create({
      data: {
        userId:
          decoded.userId,
        collegeId,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error:
          "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}