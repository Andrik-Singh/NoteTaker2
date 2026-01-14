"use server";

import { db } from "@/db";
import {
  note_members,
  note_table,
  note_tags,
  note_versions,
} from "@/db/schema";
import { auth } from "@/lib/auth";
import { error } from "console";
import { and, eq, sql } from "drizzle-orm";
import { headers } from "next/headers";
export type Note = {
  id: string;
  userId: string;
  noteContent: {
    type: "doc";
    content: any[];
  };
  noteTitle: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
};
export const getUserNotes = async (): Promise<{
  error: null | string;
  data: null | Note[];
}> => {
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
    const rawData = await db
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
      .where(eq(note_table.user_id, authData.user.id))
      .limit(50);
    const data: Note[] = rawData.map((row): Note => ({
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
export const getSpecificNotes = async (id: string) => {
  try {
    const authData = await auth.api.getSession({
      headers: await headers(),
    });
    if (!authData) {
      return {
        success: false,
        data: null,
        error: "Unauthorized user",
      };
    }
    const { user } = authData;
    const noteMembersTable = await db
      .select()
      .from(note_members)
      .where(
        and(
          eq(note_members.note_id, id),
          eq(note_members.member_user_id, user.id)
        )
      );
    console.log(noteMembersTable);
    if (noteMembersTable.length === 0) {
      return {
        success: false,
        data: null,
        error: "Unauthorized user",
      };
    }
    const noteData = await db
      .select()
      .from(note_table)
      .where(eq(note_table.id, id));
    return {
      success: true,
      data: noteData,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      data: null,
    };
  }
};
