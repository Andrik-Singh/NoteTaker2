"use server";

import { db } from "@/db";
import { note_table, note_tags } from "@/db/schema";
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
        id: note_table.id,
        userId: note_table.user_id,
        noteContent: note_table.note_content,
        noteTitle: note_table.note_title,
        createdAt: note_table.created_at,
        updatedAt: note_table.updated_at,
        tags: sql<string[]>`array_agg(${note_tags.tag_name})`.as("tags"),
      })
      .from(note_table)
      .innerJoin(note_tags, eq(note_table.id, note_tags.note_id))
      .groupBy(note_table.id)
      .where(eq(note_table.user_id, authData.user.id));
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
