"use server"

import { tiptapSchema } from "@/app/api/notes/route"
import { db } from "@/db"
import { note_table } from "@/db/schema"
import { auth } from "@/lib/auth"
import { Liveblocks } from "@liveblocks/node"
import { eq } from "drizzle-orm"
import { headers } from "next/headers"
import { prosemirrorJSONToYXmlFragment } from "y-prosemirror"
import * as Y from "yjs"
const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY as string,
});
export async function createRoom(noteId:string,content:string){
    try {
        const authData=await auth.api.getSession({
            headers:await headers()
        })
        if(!authData){
            return{
                error:"Unauthorized user",

            }
        }
        const id=authData.user.id
        const boilerPlate=JSON.parse(content)
         await liveblocks.createRoom(noteId, {
              defaultAccesses: ["room:write"],
              metadata: {
                noteId: noteId,
                createdBy: id,
              },
            });
            const yDoc = new Y.Doc();
            const fragment = yDoc.getXmlFragment("default");
        
            prosemirrorJSONToYXmlFragment(tiptapSchema, boilerPlate, fragment);
        
            const update = Y.encodeStateAsUpdate(yDoc);
        
            await liveblocks.sendYjsBinaryUpdate(noteId, update);
            await db.update(note_table).set({
                shareable:true
            }).where(
                eq(note_table.id,noteId)
            )
    } catch (error) {
        
    }
}