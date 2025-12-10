import { db } from "@/db";
import { noteTable, noteTags } from "@/db/schema";
import { auth } from "@/lib/auth";
import { newNote } from "@/zod/newNote";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
const boilerPlateCode={
  "type": "doc",
  "content": [
    {
      "type": "heading",
      "attrs": { "level": 1 },
      "content": [{ "type": "text", "text": "Untitled Document" }]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "Start writing your content here. You can add headings, lists, quotes, code blocks, and more using the toolbar or keyboard shortcuts."
        }
      ]
    },
    {
      "type": "heading",
      "attrs": { "level": 2 },
      "content": [{ "type": "text", "text": "Example Section" }]
    },
    {
      "type": "paragraph",
      "content": [
        { "type": "text", "text": "This is an example paragraph to help you get started." }
      ]
    },
    {
      "type": "bulletList",
      "content": [
        {
          "type": "listItem",
          "content": [
            { "type": "paragraph", "content": [{ "type": "text", "text": "Bullet list item" }] }
          ]
        },
        {
          "type": "listItem",
          "content": [
            { "type": "paragraph", "content": [{ "type": "text", "text": "Another item" }] }
          ]
        }
      ]
    },
    {
      "type": "blockquote",
      "content": [
        {
          "type": "paragraph",
          "content": [
            { "type": "text", "text": "This is a blockquote. Use it to highlight important ideas or references." }
          ]
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        { "type": "text", "text": "Happy editing! ✨" }
      ]
    }
  ]
}

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
        content: data.content.content.length === 0 ? boilerPlateCode : data.content.content,
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
