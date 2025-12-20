"use client";

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
import { useEffect, useState, useTransition } from "react";
import { Button } from "../ui/button";
import { useParams, useRouter } from "next/navigation";
import DeleteButton from "./DeleteButton";
import CopyButton from "./CopyButton";
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
  const newContent = JSON.parse(content);
  const [newEditor, setNewEditor] = useState<Editor | null>(null);
  const [newImages, setNewImages] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
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
      StarterKit.configure({
        horizontalRule: false,
        link: {
          openOnClick: false,
          enableClickSelection: true,
        },
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

    content: newContent,
  });
  useEffect(() => {
    if (editor) {
      setNewEditor(editor);
    }
  }, [editor]);
  if (!newEditor) return <div>loading</div>;
  return (
    <>
      <section className="flex md:flex-row gap-3 flex-col mt-10 mb-5 px-3 md:px-10 items-center justify-between w-full">
        <section className="space-x-2">
          <CopyButton role="reader"></CopyButton>
          <CopyButton role="writer"></CopyButton>
        </section>
        <div className="flex flex-wrap gap-5 items-center justify-end x">
          <p className="italic md:block  hidden">Updated at:{lastUpdatedAt}</p>
          <Button
            disabled={isPending}
            onClick={() => {
              startTransition(async () => {
                const res = await fetch(`/api/notes/${id}`, {
                  method: "PATCH",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(editor?.getJSON()),
                });
                if (!res.ok) {
                  if (res.status === 401) {
                    router.push("/sign-in");
                  } else {
                    toast.error("Unable to save file at moment");
                  }
                } else {
                  const data = await res.json();
                  setLastUpdatedAt(getLastUpdatedTime(0));
                  toast.success("Succesfully saved note");
                }
              });
            }}
          >
            Save
          </Button>
          <DeleteButton id={id} />
        </div>
      </section>
      <SimpleEditor editor={newEditor} content={content} />
    </>
  );
}
