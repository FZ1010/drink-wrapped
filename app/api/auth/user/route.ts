import { NextResponse } from "next/server";

import { auth } from "@/auth"; // Replace with your actual authentication logic

export async function GET() {
  try {
    // Get the authenticated session
    const session = await auth();
    const userName = session?.user?.name;

    if (!userName) {
      return NextResponse.json(
        { error: "Unauthorized: No name found in session" },
        { status: 401 },
      );
    }

    // Return the user's name
    return NextResponse.json({ name: userName });
  } catch (error) {
    console.error("Error fetching user name:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
