"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { createRoom } from "@/server/createRoom";
import { toast } from "sonner";
import { Lock, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import * as Y from "yjs";
import { prosemirrorJSONToYXmlFragment } from "y-prosemirror";
import StarterKit from "@tiptap/starter-kit";
import { getSchema } from "@tiptap/core";
import { HorizontalRule } from "../tiptap-node/horizontal-rule-node/horizontal-rule-node-extension";

import TextAlign from "@tiptap/extension-text-align";
import { TaskItem, TaskList } from "@tiptap/extension-list";
import Typography from "@tiptap/extension-typography";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";

import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import { ImageUploadNode } from "../tiptap-node/image-upload-node";
import { authClient } from "@/lib/auth-client";

export const tiptapSchema = getSchema([
  StarterKit.configure({
    horizontalRule: false,
    undoRedo: false,
  }),
  HorizontalRule,
  TextAlign.configure({ types: ["heading", "paragraph"] }),
  TaskList,
  TaskItem.configure({ nested: true }),
  Highlight.configure({ multicolor: true }),
  Typography,
  Superscript,
  Subscript,
  Image,
  ImageUploadNode,
]);
type authDataType = {
  user: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null | undefined;
  };
  session: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    expiresAt: Date;
    token: string;
    ipAddress?: string | null | undefined;
    userAgent?: string | null | undefined;
  };
} | null;
const CreateRoom = ({ id, content }: { id: string; content: string }) => {
  const [data, setData] = useState<null | authDataType>(null);
  const [creating, setCreating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const session = await authClient.getSession();
      if(session.error){
        console.error(session.error)
        setData(null)
        return
      }
      setData(session.data)
    };
    fetchData();
  }, []);
  if (!data) return <h1>Loading</h1>;
  const handleCreateRoom = async () => {
    try {
      if(!data.user){
        toast.error("Unauthorized user");
        router.push("/sign-in")
        return
      }
      if(!data.user.emailVerified){
        toast.error("Please verify your email to create a room");
        return
      }
      setCreating(true);
      const boilerPlate = JSON.parse(content);
      const yDoc = new Y.Doc();
      const fragment = yDoc.getXmlFragment("default");
      prosemirrorJSONToYXmlFragment(tiptapSchema, boilerPlate, fragment);
      const update = Y.encodeStateAsUpdate(yDoc);
      const result = await createRoom(id, update);
      if (result.error) {
        toast.error(result.error);
        return;
      }

      router.refresh();
      toast.success("Room created successfully");
    } catch (error) {
      console.error("Room creation failed:", error);
      toast.error(
        error instanceof SyntaxError
          ? "Invalid content format"
          : "Unable to create the room",
      );
    } finally {
      setCreating(false);
    }
  };
  return (
    <Button
      size="sm"
      variant="default"
      disabled={creating}
      onClick={handleCreateRoom}
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
