// app/api/auth/route.ts
import { auth } from "@/auth";

export async function GET() {
  const session = await auth();

  return new Response(JSON.stringify({ user: session?.user || null }), {
    headers: { "Content-Type": "application/json" },
  });
}
