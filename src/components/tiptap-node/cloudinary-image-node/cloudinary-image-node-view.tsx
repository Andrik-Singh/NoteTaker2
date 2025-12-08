"use client";

import { NodeViewWrapper } from "@tiptap/react";
import { FC, useState } from "react";

interface CloudinaryImageNodeViewProps {
  node: any;
  editor: any;
}

export const CloudinaryImageNodeView: FC<CloudinaryImageNodeViewProps> = ({ node, editor }) => {
  const [hovered, setHovered] = useState(false);

  const handleDelete = async () => {
    const public_id = node.attrs.public_id;
    if (public_id) {
      await fetch("/api/cloudinary/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ public_id }),
      });
    }
    editor.commands.deleteNode();
  };

  return (
    <NodeViewWrapper
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={node.attrs.src} alt={node.attrs.alt} className="rounded-md" />

      {hovered && (
        <div className="absolute top-1 right-1 bg-black bg-opacity-50 text-white p-1 rounded flex gap-1">
          <button onClick={handleDelete} className="text-sm">
            Delete
          </button>
        </div>
      )}
    </NodeViewWrapper>
  );
};