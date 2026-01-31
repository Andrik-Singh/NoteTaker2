"use server"

import { db } from "@/db"
import { note_members } from "@/db/schema"
import { auth } from "@/lib/auth"
import { error } from "console"
import { and, eq } from "drizzle-orm"
import { headers } from "next/headers"

export async function getRoles(noteId:string) {
    try {
        const authData=await auth.api.getSession({
            headers:await headers()
        })
        if(!authData){
            return{
                role:"Unauthorized user",
                error:true
            }
        }
        const role=await db.select({
            role:note_members.role
        }).from(note_members).where(
            and(
                eq(note_members.note_id,noteId),
                eq(note_members.member_user_id,authData.user.id)
            )
        )
        if(role.length===0){
            return{
                role:"Unauthorized user",
                error:true
            }
        }
        return{
            role:role[0].role,
            error:false
        }
    } catch (error) {
        console.error(error)
        return{
            role:"Internal server error",
            error:false
        }
    }
}