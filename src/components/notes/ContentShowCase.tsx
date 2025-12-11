"use client";
import { Editor, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";

const ContentShowCase = ({
  content,
}: {
  content: {
    type: string;
    content: [];
  };
}) => {
  const [newEditor, setnewEditor] = useState<Editor | null>(null)
  const editor = useEditor({
    content: content,
    editable: false,
    immediatelyRender: false,
    extensions:[StarterKit]
  });
  useEffect(()=>{
    if(editor){
        setnewEditor(editor)
    }
  },[editor])
  if(!editor) return null
  return (
    <div>
        {editor.getText()}
    </div>
  );
};

export default ContentShowCase;
