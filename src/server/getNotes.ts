"use server";

import { db } from "@/db";
import { noteTable, noteTags } from "@/db/schema";
import { auth } from "@/lib/auth";
import { error } from "console";
import { eq, sql } from "drizzle-orm";
import { headers } from "next/headers";

export const getUserNotes = async () => {
  try {
    const authData = await auth.api.getSession({
      headers: await headers(),
    });
    if (!authData) {
      return {
        error: "Unauthorized user",
        data: null,
      };
    }
    const data = await db
      .select({
        id: noteTable.id,
        userId: noteTable.userId,
        noteContent: noteTable.content,
        noteTitle: noteTable.title,
        createdAt: noteTable.createdAt,
        updatedAt: noteTable.updatedAt,
        tags: sql<string[]>`array_agg(${noteTags.tagName})`.as("tags"),
      })
      .from(noteTable)
      .innerJoin(noteTags, eq(noteTable.id, noteTags.noteId))
      .groupBy(noteTable.id)
      .where(eq(noteTable.userId, authData.user.id));
    return {
      error: null,
      data,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Internal server error occured",
      data: null,
    };
  }
};
