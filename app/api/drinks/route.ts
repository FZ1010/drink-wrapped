// app/api/drinks/route.ts
import { NextResponse } from "next/server";

import { auth } from "@/auth";
import { prisma } from "@/prisma/prisma";

export async function POST(req: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  const { drinkName, type } = await req.json();

  if (!drinkName || !type) {
    return NextResponse.json(
      { message: "Missing drinkName or type" },
      { status: 400 },
    );
  }

  try {
    const record = await prisma.consumptionRecord.create({
      data: {
        userId: session.user.id,
        drinkName,
        type,
      },
    });

    return NextResponse.json(
      { message: "Record added successfully", record },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
