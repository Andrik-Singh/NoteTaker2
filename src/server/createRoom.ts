"use server";
import { db } from "@/db";
import { note_table } from "@/db/schema";
import { auth } from "@/lib/auth";
import { Liveblocks } from "@liveblocks/node";
import { error } from "console";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY as string,
});
export async function createRoom(noteId: string,update: Uint8Array) {
  try {
    const authData = await auth.api.getSession({
      headers: await headers(),
    });
    if (!authData) {
      return {
        error: "Unauthorized user",
      };
    }
    const id = authData.user.id;
    let roomExists=true
    try {
      await liveblocks.getRoom(noteId)
    } catch (error) {
      roomExists=false
    }
    if (roomExists) {
      console.log("room created");
      await db
        .update(note_table)
        .set({
          shareable: true,
        })
        .where(eq(note_table.id, noteId));
      return{
        error : null,
      }
    }
    await liveblocks.createRoom(noteId, {
      defaultAccesses: ["room:write"],
      metadata: {
        noteId: noteId,
        createdBy: id,
      },
    });

    await liveblocks.sendYjsBinaryUpdate(noteId, update);
    await db
      .update(note_table)
      .set({
        shareable: true,
      })
      .where(eq(note_table.id, noteId));
      return{
        error : null,
      }
  } catch (error) {
    console.error(error)
    return{
      error: "Unable to create room",
    }
  }
}
