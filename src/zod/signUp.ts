import * as z from "zod"
export const signUpSchema=z.object({
    name:z.string().min(1,"Name is required"),
    email:z.email({error:"Invalid email address"}).min(1,"Email is required"),
    password:z.string().min(6,{error:"Password must be at least 6 characters long"}),
    confirmPassword:z.string().min(6,{error:"Confirm Password must be at least 6 characters long"}),
}).refine((data)=>data.password===data.confirmPassword,{
    message:"Passwords do not match",
    path:["confirmPassword"],
})
export  type SignUpType=z.infer<typeof signUpSchema>