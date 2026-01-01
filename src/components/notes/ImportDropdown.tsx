"use client";
import { Editor } from "@tiptap/core";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Download, FileDown, FileJson, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const ExportDropdown = ({ editor }: { editor: Editor }) => {
  const id = usePathname().split("/")[2];
  console.log(id);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "h-8 px-3 text-sm",
            "gap-1.5",
            "text-muted-foreground hover:text-foreground",
            "hover:bg-accent/60 active:bg-accent/80",
            "transition-colors"
          )}
        >
          <Download className="h-3.5 w-3.5" />
          Export
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 min-w-[180px] p-1.5">
        <DropdownMenuLabel className="px-2 py-1.5 text-xs font-medium text-muted-foreground/80">
          Export as
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="my-1 opacity-60" />

        <DropdownMenuGroup>
          <DropdownMenuItem
            className={cn(
              "group relative flex items-center gap-2.5",
              "rounded-md px-2.5 py-2 text-sm",
              "cursor-pointer select-none",
              "text-foreground/90",
              "focus:bg-accent focus:text-accent-foreground",
              "hover:bg-accent/70 active:bg-accent/90",
              "transition-colors duration-100"
            )}
            onClick={() => {
              const json = editor.getJSON();
              const blob = new Blob([JSON.stringify(json, null, 2)], {
                type: "application/json",
              });
              const a = document.createElement("a");
              const url = URL.createObjectURL(blob);
              a.href = url;
              a.download = `note-${id}.json`;
              a.click();
              URL.revokeObjectURL(url);
            }}
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
              <FileJson className="h-4 w-4" />
            </div>

            <div className="flex flex-col">
              <span className="font-medium">JSON</span>
              <span className="text-xs text-muted-foreground/80">
                Tiptap JSON format
              </span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem
            className={cn(
              "group relative flex items-center gap-2.5",
              "rounded-md px-2.5 py-2 text-sm",
              "cursor-pointer select-none",
              "text-foreground/90",
              "focus:bg-accent focus:text-accent-foreground",
              "hover:bg-accent/70 active:bg-accent/90",
              "transition-colors duration-100"
            )}
            onClick={() => {
              const text = editor.getText();
              const blob = new Blob([text], {
                type: "text/plain",
              });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = `note-${id}.text`;
              a.click();
              URL.revokeObjectURL(url);
            }}
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
              <FileText className="h-4 w-4" />
            </div>

            <div className="flex flex-col">
              <span className="font-medium">Text</span>
              <span className="text-xs text-muted-foreground/80">
                Text format
              </span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem
            className={cn(
              "group relative flex items-center gap-2.5",
              "rounded-md px-2.5 py-2 text-sm",
              "cursor-pointer select-none",
              "text-foreground/90",
              "focus:bg-accent focus:text-accent-foreground",
              "hover:bg-accent/70 active:bg-accent/90",
              "transition-colors duration-100"
            )}
            onClick={() => {
              const html = editor.getHTML();
              const blob = new Blob([html], {
                type: "text/html",
              });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = `note-${id}.html`;
              a.click();
              URL.revokeObjectURL(url);
            }}
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
              <FileDown className="h-4 w-4" />
            </div>

            <div className="flex flex-col">
              <span className="font-medium">Html</span>
              <span className="text-xs text-muted-foreground/80">
                Html format
              </span>
            </div>
          </DropdownMenuItem>
          {/* <DropdownMenuItem
            className={cn(
              "group relative flex items-center gap-2.5",
              "rounded-md px-2.5 py-2 text-sm",
              "cursor-pointer select-none",
              "text-foreground/90",
              "focus:bg-accent focus:text-accent-foreground",
              "hover:bg-accent/70 active:bg-accent/90",
              "transition-colors duration-100"
            )}
            onClick={async () => {
              const html2pdf = (await import("html2pdf.js")).default;
              const wrapper = document.createElement("div");
              wrapper.style.color = "rgb(0,0,0)";
              wrapper.style.backgroundColor = "rgb(255,255,255)";
              wrapper.style.fontFamily = "Helvetica, Arial, sans-serif";
              wrapper.style.padding = "32px 24px";
              wrapper.style.lineHeight = "1.5";
              wrapper.innerHTML = editor.getHTML();

              const opt = {
                margin: 12,
                filename: `note-${id}.pdf`,
                image: { type: "jpeg" as const, quality: 0.98 },
                html2canvas: {
                  scale: 2,
                  useCORS: true,
                  backgroundColor: "#ffffff",
                },
                jsPDF: { unit: "mm", format: "a4", orientation: "portrait" as const },
              };

              await html2pdf().from(wrapper).set(opt).save();
            }}
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
              <FileText className="h-4 w-4 text-red-600" />
            </div>

            <div className="flex flex-col">
              <span className="font-medium">Pdf</span>
              <span className="text-xs text-muted-foreground/80">
                Pdf format
              </span>
            </div>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ExportDropdown;
