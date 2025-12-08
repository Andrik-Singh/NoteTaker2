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
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
let changedImageUrl:string[]=[]
function getAllImageNodes(editor: Editor):string[] {
  if(!editor) return []
  const images:   string [] = [];
  function traverse(node: any) {
    if (!node) return;
    if (node.type === "image" || node.type === "cloudinaryImage") {
      images.push(node.attrs.src);
    }
    if (node.content) {
      node.content.forEach(traverse);
    }
  }

  traverse(editor.getJSON());
  return images;
}

const handleImageUpload = async (file: File) => {
  try {
    const form = new FormData();
    form.append("file", file);
    const data = await fetch("/api/cloudinary/upload", {
      method: "POST",
      body: form,
    }).then((res) => res.json());
    toast.success("Image uploaded successfully");
    return data.url;
  } catch (error) {
    toast.error("Image upload failed");
  }
};
const updateImageUrl=(editor:Editor)=>{
  if(!editor){
    return null
  }else{
    const images=getAllImageNodes(editor)
    console.log(images)
  }
}
export default function TipTap({ content = "" }: { content?: string }) {
  const [defaultImages, setDefaultImages] = useState<string[]>([])
  const editor = useEditor({
    immediatelyRender: false,
    onUpdate:({editor})=>{
      updateImageUrl(editor)
    },
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

    content,
  });
  useEffect(()=>{
    if(editor){
      const imageUrl=getAllImageNodes(editor)
      setDefaultImages(imageUrl)
    }
  },[editor])
  return (
    <>
      <section>
        <Button>          
        </Button>
        <Button>
          
        </Button>
      </section>
      <SimpleEditor editor={editor} content={content} />
    </>
  );
}
