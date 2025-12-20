"use server";

import { db } from "@/db";
import { note_members, tokens } from "@/db/schema";
import { auth } from "@/lib/auth";
import { and, eq } from "drizzle-orm";
import { headers } from "next/headers";
import { success } from "zod";

export async function authorizeToken(token: string, role: string, id: string) {
  try {
    const authData = await auth.api.getSession({
      headers: await headers(),
    });
    const nowDate = new Date();
    if (!authData || !authData.user.emailVerified) {
      return {
        message: "Unauthorized User or your email isn't verified",
        success: false,
      };
    }
    const getExpiryDate = await db
      .select({
        expiryDate: tokens.expires_at,
        revokedAt: tokens.revoked_at,
      })
      .from(tokens)
      .where(eq(tokens.id, token))
      .limit(1);
    if (getExpiryDate.length === 0 || !getExpiryDate[0].expiryDate) {
      return {
        message: "Invalid or expired invite link",
        success: false,
      };
    }
    const { expiryDate, revokedAt } = getExpiryDate[0];
    if (
      nowDate.getTime() > expiryDate.getTime() ||
      (revokedAt && nowDate.getTime() > revokedAt.getTime())
    ) {
      return {
        message: "Invite has already been expired or revoked",
        success: false,
      };
    }
    const checkUser = await db
      .select()
      .from(note_members)
      .where(
        and(
          eq(note_members.member_user_id, authData.user.id),
          eq(note_members.note_id, id)
        )
      );
    if (checkUser.length > 0) {
      return {
        message: "There is already a member that exists",
        success: false,
      };
    }
    await db.insert(note_members).values({
      member_user_id: authData.user.id,
      note_id: id,
      role,
    });
    return {
      message: "Succesfully registered",
      success: true,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "Internal server error occured",
      success: false,
    };
  }
}
