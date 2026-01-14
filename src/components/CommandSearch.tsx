"use client";
import { Home, Notebook, Search, Settings, Share } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { usePathname, useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { useEffect, useMemo, useRef, useState } from "react";
import { getUserNotes, Note } from "@/server/getNotes";
import Fuse from "fuse.js";

export default function CommandSearch() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const currentPath = usePathname().split("/")[1];
  const [search, setSearch] = useState("");
  const allNotes = useRef<Note[] | null>(null);
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navList = [
    { name: "Notes", link: "/home", icon: Home },
    { name: "New Note", link: "/new-note", icon: Notebook },
    { name: "Shared With Me", link: "/shared", icon: Share },
    { name: "Settings", link: "/settings", icon: Settings },
  ];
  const currentPlaceholder = useMemo(() => {
    const match = navList.find((list) => `/${currentPath}` === list.link);
    return match ? match.name : "Search";
  }, [currentPath]);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await getUserNotes();
        if (res.data) {
          allNotes.current = res.data;
          setFilteredNotes(res.data.slice(0, 10));
        }
      } catch (error) {
        console.error("Failed to fetch notes:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNotes();
  }, []);
  useEffect(() => {
    if (!search.trim()) {
      setFilteredNotes(allNotes.current?.slice(0, 10) || []);
      return;
    }
    const timer = setTimeout(() => {
      if(!allNotes.current) return
      const fuse = new Fuse(allNotes.current, {
        keys: ["note_title", "noteTitle"], 
        threshold: 0.5, 
        includeScore: true,
      });
      const results = fuse.search(search);
      console.log(results);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);
  useEffect(() => {
    if (!open) {
      setSearch("");
    }
  }, [open]);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="relative w-auto cursor-pointer"
      >
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          readOnly
          type="search"
          placeholder={currentPlaceholder}
          className="w-full pl-10 pr-4 h-10 cursor-pointer"
        />
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          value={search}
          onValueChange={setSearch}
          placeholder="Search notes or navigate..."
        />

        <CommandList>
          <CommandEmpty>
            {isLoading ? "Loading..." : "No results found."}
          </CommandEmpty>

          <CommandGroup heading="Navigation">
            {navList.map((nav) => (
              <CommandItem
                key={nav.link}
                onSelect={() => {
                  router.push(nav.link);
                  setOpen(false);
                }}
                className="flex items-center gap-2"
              >
                <nav.icon className="size-4" />
                <span>{nav.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          {filteredNotes.length > 0 && (
            <>
              <CommandGroup heading="Notes">
                {filteredNotes.map((note) => (
                  <CommandItem
                    key={note.id}
                    onSelect={() => {
                      router.push(`/new-note/${note.id}`);
                      setOpen(false);
                    }}
                  >
                    <span className="truncate">
                      {note.noteTitle || "Untitled"}
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
