import { db } from "@/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from "@/db/schema"
import { sendMail } from "./mail";
export const auth=betterAuth({
    database:drizzleAdapter(db,{
        provider:"pg",
        schema:schema
    }),
    emailAndPassword:{
        enabled:true,
        sendResetPassword:async({user,url,token},request)=>{
            await sendMail(
                user.email,
                "Reset your password",
                `<p>Click <a href="${url}">here</a> to reset your password.</p>`
            )
        }
    },
    emailVerification:{
        sendVerificationEmail:async({ user, url, token }, request)=>{
            sendMail(
                user.email,
                "Verify your email address",
                `Click the link to verify your email: ${url}`
            )
        }
    },
    socialProviders:{
        github:{
            clientId:process.env.GITHUB_CLIENT_ID!,
            clientSecret:process.env.GITHUB_CLIENT_SECRET!
        },
        google:{
            clientId:process.env.GOOGLE_CLIENT_ID!,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET!,
        }
    },

})