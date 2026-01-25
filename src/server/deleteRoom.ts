"use server"

import { db } from "@/db"
import { note_members, note_table } from "@/db/schema"
import { auth } from "@/lib/auth"
import { Liveblocks } from "@liveblocks/node"
import { error } from "console"
import { and, eq, not } from "drizzle-orm"
import { headers } from "next/headers"
const liveblocks=new Liveblocks({
    secret:process.env.LIVEBLOCKS_SECRET_KEY as string
})
export async function deleteRoom(id: string) {
    try {
        const authData=await auth.api.getSession({
            headers:await headers()
        })
        if(!authData){
            return{
                error:"Unauthorized user",
                staus:401
            }
        }
        const noteMembers=await db.select().from(note_members).where(
            and(
                eq(note_members.note_id,id),
                eq(note_members.member_user_id,authData.user.id)
            )
        )
        if(noteMembers.length===0 || noteMembers[0].role !== "owner"){
            return{
                error:"Unauthorized user",
                status:402
            }
        }
        await db.update(note_table).set({
            shareable:false,
        })
        await db.delete(note_members).where(
            and(
                eq(note_members.note_id,id),
                not(eq(note_members.member_user_id,authData.user.id))
            )
        )
        await liveblocks.deleteRoom(id)
    } catch (error) {
        console.error(error);
        return{
            error:"Internal server error",
            status:500
        }
    }
}