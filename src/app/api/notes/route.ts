import { db } from "@/db";
import { noteTable, noteTags } from "@/db/schema";
import { auth } from "@/lib/auth";
import { newNote } from "@/zod/newNote";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const unsafeData = await req.json();
    const { data, error } = newNote.safeParse(unsafeData);
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
    if (error) {
      return NextResponse.json(
        {
          message: "Invalid input data",
        },
        {
          status: 400,
        }
      );
    }
    const { user } = authData;
    const randomId = crypto.randomUUID();
    await db.transaction(async (tx) => {
      const noteTableData = await db.insert(noteTable).values({
        title: data.title,
        content: data.content,
        id: randomId,
        userId: user.id,
      });
      for(const tag of data.tags){
        await db.insert(noteTags).values({
            noteId:randomId,
            tagName:tag.value,
        })
      }
    });
    return NextResponse.json({
      message: "complete",
      id:randomId
    },{
        status:200
    });
  } catch (error) {
    return NextResponse.json({
      message: "Fail",
    });
  }
}
