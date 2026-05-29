import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cookieStore =
      await cookies();

    const token =
      cookieStore.get("token");

    if (!token) {
      return NextResponse.json(
        null
      );
    }

    const decoded: any =
      verifyToken(token.value);

    if (!decoded) {
      return NextResponse.json(
        null
      );
    }

    const user =
      await prisma.user.findUnique({
        where: {
          id: decoded.userId,
        },
      });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      null
    );
  }
}