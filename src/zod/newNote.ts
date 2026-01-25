import * as z from "zod"
export const newNote=z.object({
    title:z.string().min(4,{error:"Title should be atleast 4 characters long"}),
    tags:z.array(z.object({
        value:z.string()
    })).min(1,{error:"Atleast have one tag"}),
    content:z.object({
        type:z.string(),
        content:z.array(z.any())
    }),
    category:z.string().optional()
})