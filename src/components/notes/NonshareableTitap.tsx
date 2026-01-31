"use client";
import React, {
  useEffect,
  useState,
  useTransition,
  useRef,
  useCallback,
} from "react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import { toast } from "sonner";
import { Save, Trash2, Clock } from "lucide-react";
import { SimpleEditor } from "../tiptap-templates/simple/simple-editor";
import { Placeholder } from "@tiptap/extensions";
import { TaskItem, TaskList } from "@tiptap/extension-list";
import { ImageUploadNode } from "../tiptap-node/image-upload-node";
import { HorizontalRule } from "../tiptap-node/horizontal-rule-node/horizontal-rule-node-extension";
import { Button } from "../ui/button";
import CopyButton from "./CopyButton";
import ImportDropdown from "./ImportDropdown";
import { MAX_FILE_SIZE } from "@/lib/tiptap-utils";
import { useParams } from "next/navigation";
import DeleteButton from "./DeleteButton";
import CreateRoom from "./CreateRoom";

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

interface TipTapProps {
  content?: string;
  updatedAt: Date | null;
  category: string;
}

const NonShareAbleTipTap: React.FC<TipTapProps> = ({
  content,
  updatedAt,
  category,
}) => {
  const now = new Date();
  const diffTime = Math.abs(Number(now) - Number(updatedAt));
  const [lastUpdatedAt, setLastUpdatedAt] = useState(
    getLastUpdatedTime(diffTime),
  );
  const [pending, setPending] = useState(false)
  const [newImages, setNewImages] = useState<string[]>([]);
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const id = useParams().id as string;

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
    content: (() => {
      try {
        return content ? JSON.parse(content) : undefined;
      } catch (error) {
        console.error("Failed to parse content:", error);
        return undefined;
      }
    })(),
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
      StarterKit.configure({
        horizontalRule: false,
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

  const handleSave = useCallback(async () => {
    try {
      setPending(true)
      if (!editor) return;
      const res = await fetch(`/api/notes/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        keepalive: true,
        body: JSON.stringify(editor.getJSON()),
      });
      if (res.ok) {
        toast.success("Note saved successfully", {
          description: "Your changes are now secure.",
          duration: 2000,
        });
      } else {
        toast.error("Failed to save note");
      }
      setPending(false)
    } catch (error) {
      console.error(" Auto-save failed:", error);
      setPending(false)
    }
  }, [id, editor]);

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      console.log("beforeunload");
      handleSave();
    });
    return () => {
      window.removeEventListener("beforeunload", () => {
        console.log("remove beforeunload");
        handleSave();
      });
    };
  }, [handleSave]);

  useEffect(() => {
    if (!editor) return;

    const onupdate = () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
      saveTimeoutRef.current = setTimeout(() => {
        handleSave();
      }, 8000);
    };

    editor.on("update", onupdate);
    return () => {
      editor.off("update", onupdate);
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, [editor, id]);

  if (!editor) {
    return (
      <div className="flex items-center justify-center h-[500px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        <span className="ml-3 text-gray-500">Initializing editor...</span>
      </div>
    );
  }
  return (
    <>
      <section className="flex md:flex-row gap-3 flex-col mt-10 mb-5 px-3 md:px-10 items-center justify-between w-full">
        <section className="flex gap-2 items-center">
          <ImportDropdown editor={editor} />
          {category != "Personal" && (
            <CreateRoom id={id} content={content ?? ""} />
          )}
        </section>
        <div className="flex flex-wrap gap-5 items-center justify-end">
          <p className="italic md:block hidden">Updated at: {lastUpdatedAt}</p>
          <Button
            disabled={pending}
            onClick={handleSave}
          >
            Save
          </Button>
          <DeleteButton id={id} />
        </div>
      </section>
      <SimpleEditor editor={editor} />
    </>
  );
};

export default NonShareAbleTipTap;
