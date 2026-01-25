"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { createRoom } from "@/server/createRoom";
import { toast } from "sonner";
import { Lock, Loader2 } from "lucide-react"; 
import { useRouter } from "next/navigation";

const CreateRoom = ({ id, content }: { id: string; content: string }) => {
  const [creating, setCreating] = useState(false);
  const router=useRouter()
  return (
    <Button
      size="sm"
      variant="default"
      disabled={creating}
      onClick={async () => {
        try {
          setCreating(true);
          await createRoom(id, content);
          router.refresh()
          toast.success("Room created successfully");
        } catch (error) {
          console.error(error);
          toast.error("Unable to create the room");
        } finally {
          setCreating(false);
        }
      }}
      className="group relative inline-flex items-center gap-2 rounded-full bg-primary-foreground px-4 py-2 text-xs font-medium text-secondary-foreground transition-all hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 disabled:opacity-70"
    >
      {creating ? (
        <Loader2 className="h-3 w-3 animate-spin" />
      ) : (
        <Lock className="h-3 w-3 transition-transform" />
      )}
      
      <span className="tracking-wide">
        {creating ? "CREATING..." : "Private room"}
      </span>
    </Button>
  );
};

export default CreateRoom;