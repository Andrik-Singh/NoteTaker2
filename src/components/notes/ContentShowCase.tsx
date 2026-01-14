"use client";
import Image from "@tiptap/extension-image";
import {  useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useMemo, useEffect } from "react";

const ContentShowCase = ({
  content,
}: {
  content: {
    type: string;
    content: any[];
  };
}) => {
  const editor = useEditor({
    content: content,
    editable: false,
    immediatelyRender:false,
    extensions: [StarterKit,Image],
  });

  const textContent = useMemo(() => {
    if (!editor) return "";
    return editor.getText();
  }, [editor]);

  if (!editor) return null;

  return <div>{textContent}</div>;
};

export default ContentShowCase;