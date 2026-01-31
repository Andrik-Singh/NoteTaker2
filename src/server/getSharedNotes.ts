"use server";

import { db } from "@/db";
import { note_members, note_table, note_tags } from "@/db/schema";
import { auth } from "@/lib/auth";
import { and, eq, not, sql } from "drizzle-orm";
import { headers } from "next/headers";
import { da } from "zod/v4/locales";
import { Note } from "./getNotes";

export async function getSharedNotes() {
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
    const res = await db
      .select({
        id: note_table.id,
        userId: note_table.user_id,
        noteContent: note_table.note_content,
        noteTitle: note_table.note_title,
        createdAt: note_table.created_at,
        updatedAt: note_table.updated_at,
        tags: sql<string[]>`array_agg(${note_tags.tag_name})`.as("tags"),
      })
      .from(note_members)
      .innerJoin(note_table, eq(note_members.note_id, note_table.id))
      .innerJoin(note_tags, eq(note_tags.note_id, note_table.id))
      .groupBy(note_table.id)
      .where(
        and(
          eq(note_members.member_user_id, authData.user.id),
          not(eq(note_members.role, "owner")),
        ),
      );
    const data: Note[] = res.map((row) => ({
      id: row.id,
      userId: row.userId,
      noteTitle: row.noteTitle,
      noteContent: row.noteContent as { type: "doc"; content: any[] },
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
      tags: row.tags ?? [],
    }));
    return {
      error: null,
      data: data,
    };
  } catch (error) {
    return {
      error: "Failed to fetch shared notes.",
      data: null,
    };
  }
}
