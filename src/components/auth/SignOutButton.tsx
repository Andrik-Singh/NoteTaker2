"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

const SignOutButton = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      setLoading(true);

      const data = await authClient.signOut({
        fetchOptions:{
          onError:()=>{

          },
          onSuccess:()=>{
            router.push("/")
          }
        }
      });
      if (data?.error) {
        throw new Error(data.error.message);
      }

      toast.success("Signed out");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to sign out"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      disabled={loading}
      className="
        flex w-full items-center gap-2
        px-2 py-1.5 text-sm
        text-destructive
        hover:text-foreground
        focus:outline-none
      "
    >
      <LogOut className="h-4 w-4 opacity-70" />
      {loading ? "Signing out…" : "Sign out"}
    </button>
  );
};

export default SignOutButton;
