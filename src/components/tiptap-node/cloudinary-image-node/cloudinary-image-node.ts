import { Node, mergeAttributes, CommandProps } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { CloudinaryImageNodeView } from "./cloudinary-image-node-view";

export const CloudinaryImageNode = Node.create({
  name: "cloudinaryImage",
  group: "block",
  inline: false,
  atom: true,

  addAttributes() {
    return {
      src: { default: null },
      alt: { default: null },
      public_id: { default: null },
    };
  },

  parseHTML() {
    return [{ tag: "img[src]" }];
  },

  renderHTML({ HTMLAttributes }) {
    return ["img", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return ReactNodeViewRenderer(CloudinaryImageNodeView);
  },

  addCommands() {
    return {
      insertCloudinaryImage:
        (options: { src: string; alt?: string; public_id: string }) =>
        ({ commands }: CommandProps) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
    };
  },
});
