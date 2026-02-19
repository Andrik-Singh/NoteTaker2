"use client"
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

const SendEmailVerificationButton = () => {
  return (
    <Button
      variant="link"
      onClick={async () => {
        try {
          const session = await authClient.getSession();
          await authClient.sendVerificationEmail({
            email: session.data?.user.email || "",
            callbackURL: "/",
          },{
            onError:(ctx)=>{
                toast.error("Failed to send verification email due to" + ctx.error.message)
            }
          });
          toast.success("Send verification email")
        } catch (error) {
            console.error(error)
            toast.error("Server error")
        }
      }}
    >
      Send Email Verification
    </Button>
  );
};

export default SendEmailVerificationButton;
