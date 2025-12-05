import * as z from "zod"
export const signInSchema=z.object({
    email:z.email({error:"Invalid email address"}).min(1,"Email is required"),
    password:z.string().min(6,{error:"Password must be at least 6 characters long"}),
})
export type SignInType=z.infer<typeof signInSchema>