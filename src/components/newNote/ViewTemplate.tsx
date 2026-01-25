"use client"

import { TemplateItem } from "@/lib/templates"
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import { TaskItem, TaskList } from "@tiptap/extension-list";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit";
import { ImageUploadNode } from "../tiptap-node/image-upload-node";
import { handleImageUpload, MAX_FILE_SIZE } from "@/lib/tiptap-utils";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import { SimpleEditor } from "../tiptap-templates/simple/simple-editor";

const ViewTemplate = ({data}:{data:TemplateItem}) => {
   const editor = useEditor({
    content: data.initialContent,
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
  if (!editor) {
    return (
      <div className="flex items-center justify-center h-[500px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        <span className="ml-3 text-gray-500">Initializing editor...</span>
      </div>
    );
  }
  return (
    <SimpleEditor editor={editor}></SimpleEditor>
  )
}
export default ViewTemplate