"use client";
import {
  useLiveblocksExtension,
  FloatingToolbar,
} from "@liveblocks/react-tiptap";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { Editor, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { HorizontalRule } from "../tiptap-node/horizontal-rule-node/horizontal-rule-node-extension";

import TextAlign from "@tiptap/extension-text-align";
import { TaskItem, TaskList } from "@tiptap/extension-list";
import Typography from "@tiptap/extension-typography";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";

import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";

import { ImageUploadNode } from "../tiptap-node/image-upload-node";
import { MAX_FILE_SIZE } from "@/lib/tiptap-utils";
import { toast } from "sonner";
import { useEffect, useState, useTransition, useRef } from "react";
import { Button } from "../ui/button";
import { useParams, useRouter } from "next/navigation";
import DeleteButton from "./DeleteButton";
import CopyButton from "./CopyButton";
import { useRoom, useStatus, useStorage } from "@liveblocks/react/suspense";

const getLastUpdatedTime = (diffTime: number): string => {
  const days = Math.floor(diffTime / (24 * 60 * 60 * 1000));
  const hours = Math.floor((diffTime / (60 * 60 * 1000)) % 24);
  const minutes = Math.floor((diffTime / (60 * 1000)) % 60);
  const seconds = Math.floor((diffTime / 1000) % 60);

  if (days) return `${days}d ago`;
  if (hours) return `${hours}h ago`;
  if (minutes) return `${minutes}m ago`;
  return `${seconds}s ago`;
};

export default function TipTap({
  content = "",
  updatedAt,
}: {
  content?: string;
  updatedAt: Date | null;
}) {
  const now = new Date();
  const diffTime = Math.abs(Number(now) - Number(updatedAt));
  const [lastUpdatedAt, setLastUpdatedAt] = useState(
    getLastUpdatedTime(diffTime)
  );
  const id = useParams().id as string;
  const router = useRouter();

  const liveblocks = useLiveblocksExtension();
  const room = useRoom();
  const status=useStatus()
  const [newImages, setNewImages] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const [isInitialized, setIsInitialized] = useState(false);
  const hasLoadedFromDB = useRef(false);

  const handleImageUpload = async (file: File) => {
    try {
      const form = new FormData();
      form.append("file", file);
      const data = await fetch("/api/cloudinary/upload", {
        method: "POST",
        body: form,
      }).then((res) => res.json());
      setNewImages([...newImages, data.url]);
      toast.success("Image uploaded successfully");
      return data.url;
    } catch (error) {
      toast.error("Image upload failed");
    }
  };

  const editor = useEditor({
    immediatelyRender: false,
    editorProps: {
      attributes: {
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        "aria-label": "Main content area, start typing to enter text.",
        class: "simple-editor",
      },
    },
    extensions: [
      liveblocks,
      StarterKit.configure({
        horizontalRule: false,
        undoRedo:false
      }),
      HorizontalRule,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TaskList,
      TaskItem.configure({ nested: true }),
      Highlight.configure({ multicolor: true }),
      Image,
      Typography,
      Superscript,
      Subscript,
      ImageUploadNode.configure({
        accept: "image/*",
        maxSize: MAX_FILE_SIZE,
        limit: 3,
        upload: (file: File) => {
          return handleImageUpload(file);
        },
        onError: (error) => console.error("Upload failed:", error),
      }),
    ],
  });
  useEffect(() => {
    if (!editor || !room || hasLoadedFromDB.current) return;

    const initContent = async () => {
      if(status!= "connected"){
        console.log("Liveblocks is not ready")
        return
      }
      const htmlContent = editor.getHTML();
      const jsonContent = editor.getJSON();
      const hasLiveblocksContent = (() => {
        if (!jsonContent.content || jsonContent.content.length === 0) {
          return false;
        }
        for (const node of jsonContent.content) {
          if (node.type !== "paragraph") {
            return true;
          }
          if (node.content && node.content.length > 0) {
            return true;
          }
          if (node.attrs && Object.keys(node.attrs).length > 0) {
            return true;
          }
        }

        return false;
      })();
      if (!hasLiveblocksContent && content) {
        try {
          const parsedContent = JSON.parse(content);
          editor.commands.clearContent();
          await new Promise((resolve) => setTimeout(resolve, 100));
          editor.commands.setContent(parsedContent, {
            emitUpdate: false,
          });
          hasLoadedFromDB.current = true;
        } catch (error) {
          console.error("Failed to parse content:", error);
        }
      } else if (hasLiveblocksContent) {
        console.log("Using Liveblocks content - NOT loading from DB");
        hasLoadedFromDB.current = true;
      } else {
        console.log("No content available");
        hasLoadedFromDB.current = true;
      }

      setIsInitialized(true);
    };

    initContent();
  }, [editor, room, content,status]);
  useEffect(() => {
    if (!editor) return;

    const handleSave = async () => {
      try {
        await fetch(`/api/notes/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editor.getJSON()),
        });
      } catch (error) {
        console.error(" Auto-save failed:", error);
      }
    };

    window.addEventListener("beforeunload", handleSave);
    
    return () => {
      window.removeEventListener("beforeunload", handleSave);
    };
  }, [editor, id]); 

  if (!editor || !isInitialized) {
    return <div>Loading editor...</div>;
  }

  if (!room) {
    return <div>Connecting to room...</div>;
  }

  return (
    <>
      <section className="flex md:flex-row gap-3 flex-col mt-10 mb-5 px-3 md:px-10 items-center justify-between w-full">
        <section className="space-x-2">
          <CopyButton role="writer" />
        </section>
        <div className="flex flex-wrap gap-5 items-center justify-end">
          <p className="italic md:block hidden">Updated at: {lastUpdatedAt}</p>
          <Button
            disabled={isPending}
            onClick={() => {
              startTransition(async () => {
                const content = editor.getJSON();
                
                console.log("💾 Manual save - Document:", id);
                
                const res = await fetch(`/api/notes/${id}`, {
                  method: "PATCH",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(content),
                });
                
                if (!res.ok) {
                  if (res.status === 401) {
                    router.push("/sign-in");
                  } else {
                    toast.error("Unable to save file at moment");
                  }
                } else {
                  setLastUpdatedAt(getLastUpdatedTime(0));
                  toast.success("Successfully saved note");
                }
              });
            }}
          >
            Save
          </Button>
          <DeleteButton id={id} />
        </div>
      </section>
      <SimpleEditor editor={editor} />
    </>
  );
}