"use client";

import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Home,
  Notebook,
  Settings,
  Share,
  Smile,
  User,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";

export default function CommandSearch() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const navList = [
    { name: "Home", link: "/home", icon: Home },
    { name: "Settings", link: "/settings", icon: Settings },
    { name: "New Notes", link: "/new-note", icon: Notebook },
    { name: "Shared With me", link: "/shared", icon: Share },
  ];

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p
        onClick={() => setOpen((open) => !open)}
        className="text-muted-foreground space-x-3 px-4 p-2 rounded-2xl bg-gray-300 text-sm"
      >
        <span>Search notes</span>
        <kbd className="bg-muted text-muted-foreground inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search for notes or navigate pages" />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Navigation">
            {navList.map((nav) => (
              <CommandItem
                key={nav.name}
                onSelect={() => {
                  router.push(nav.link);
                  setOpen(false); 
                }}
                className="flex items-center gap-2"
              >
                <nav.icon className="mt-0.5" />
                <span>{nav.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Settings">
            <CommandItem
              onSelect={() => {
                router.push("/profile");
                setOpen(false);
              }}
            >
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>

            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>

            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
