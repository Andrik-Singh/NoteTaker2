import { NextRequest, NextResponse } from "next/server";
import { Liveblocks } from "@liveblocks/node";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
const liveBlocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY as string,
});
const colors = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#14b8a6",
];
export async function POST(req: NextRequest) {
  try {
    const authData = await auth.api.getSession({
      headers: await headers(),
    });
    if (!authData) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 403,
        },
      );
    }
    const { user } = authData;
    const lbSession = liveBlocks.prepareSession(user.id, {
      userInfo: {
        name: user.name ?? "Anonymous",
        email: user.email,
        color: colors[Math.floor(Math.random() * colors.length)],
      },
    });
    lbSession.allow("*", lbSession.FULL_ACCESS);
    const { body, status } = await lbSession.authorize();
    return new Response(body, { status });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Internal server",
    });
  }
}
