import { db } from "@/db";
import { noteTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { and, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  params: Promise<{
    params: Promise<{
      id: string;
    }>;
  }>
) {
  try {
    const body = await req.json();
    const authData = await auth.api.getSession({
      headers: await headers(),
    });
    if (!authData) {
      return NextResponse.json(
        {
          message: "Unauthorized user",
        },
        {
          status: 401,
        }
      );
    }
    const { id } = await (await params).params;
    const canUpdateNotes = await db
      .select()
      .from(noteTable)
      .where(and(eq(noteTable.id, id), eq(noteTable.userId, authData.user.id)));
    if (canUpdateNotes.length <= 0) {
      return NextResponse.json(
        {
          message: "Unauthorized user",
        },
        {
          status: 401,
        }
      );
    }
    console.log(body);
    const updatedNote = await db
      .update(noteTable)
      .set({
        content: body,
      })
      .returning();
    if (updatedNote.length === 0) {
      return NextResponse.json(
        {
          message: "Internal server error occured",
        },
        {
          status: 500,
        }
      );
    }
    return NextResponse.json(
      {
        message: "Success",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error occured",
      },
      {
        status: 500,
      }
    );
  }
}
export async function DELETE(req:NextRequest) {
    try {
      const authData=await auth.api.getSession({
        headers:await headers()
      })
    } catch (error) {
      
    }
}
