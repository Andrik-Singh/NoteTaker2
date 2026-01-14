// src/app/api/notes/[id]/route.ts

import { db } from "@/db";
import { note_table } from "@/db/schema";
import { auth } from "@/lib/auth";
import { getRoles } from "@/server/getRoles";
import { Liveblocks } from "@liveblocks/node";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY as string,
});

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const body = await req.json();

    const authData = await auth.api.getSession({
      headers:await headers(),
    });

    if (!authData) {
      return NextResponse.json(
        { message: "Unauthorized user" },
        { status: 401 }
      );
    }

    const { id } =await context.params;
    const { role } = await getRoles(id);

    if (role === "reader") {
      return NextResponse.json(
        { message: "Unauthorized user" },
        { status: 401 }
      );
    }

    const updatedNote = await db
      .update(note_table)
      .set({ note_content: body })
      .where(eq(note_table.id, id))
      .returning();

    if (updatedNote.length === 0) {
      return NextResponse.json(
        { message: "Internal server error occurred" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error occurred" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const authData = await auth.api.getSession({
      headers: await headers(),
    });

    if (!authData) {
      return NextResponse.json(
        { message: "Unauthorized user" },
        { status: 401 }
      );
    }

    const { id } =await context.params;
    const { role } = await getRoles(id);

    if (role !== "owner") {
      return NextResponse.json(
        { message: "Unauthorized user" },
        { status: 401 }
      );
    }

    await db.delete(note_table).where(eq(note_table.id, id));
    await liveblocks.deleteRoom(id);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error occurred" },
      { status: 500 }
    );
  }
}
