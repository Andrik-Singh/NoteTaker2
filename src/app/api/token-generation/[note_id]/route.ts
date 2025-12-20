import { db } from "@/db";
import { note_members, tokens } from "@/db/schema";
import { auth } from "@/lib/auth";
import { getRoles } from "@/server/getRoles";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  params: Promise<{
    params: Promise<{
      note_id: string;
    }>;
  }>
) {
  try {
    const body = await req.json();
    console.log(body.role)
    if (body.role != "reader" && body.role != "writer" && !body.role) {
      return NextResponse.json(
        {
          message: "Invalid input",
        },
        {
          status: 400,
        }
      );
    }
    const authData = await auth.api.getSession({
      headers: await headers(),
    });
    const { note_id } = await (await params).params;
    if (!authData || !note_id) {
      return NextResponse.json(
        {
          message: "Unauthorized user",
        },
        {
          status: 401,
        }
      );
    }
    const { role } = await getRoles(note_id);
    if (role === "reader") {
      return NextResponse.json(
        {
          message: "Unauthorized user",
        },
        {
          status: 401,
        }
      );
    }
    const currentDate = new Date();
    const sevenDaysLater = Number(currentDate) + 1000 * 60 * 60 * 24;
    console.log(new Date(sevenDaysLater));
    const data = await db
      .insert(tokens)
      .values({
        created_by: authData.user.id,
        id: crypto.randomUUID(),
        expires_at: new Date(sevenDaysLater),
      })
      .returning({
        id: tokens.id,
      });
    return NextResponse.json(
      {
        message: "success",
        id: data[0].id,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Unauthorized user",
      },
      {
        status: 401,
      }
    );
  }
}
