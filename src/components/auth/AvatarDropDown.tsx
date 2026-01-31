"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Settings, SunMoon, User } from "lucide-react";
import { useRouter } from "next/navigation";
import SignOutButton from "./SignOutButton";
import ThemeChanger from "../ThemeChanger";

export default function UserAvatar({
  user,
}: {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}) {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring">
          <Avatar className="h-7 w-7">
            <AvatarImage src={user.image ?? ""} />
            <AvatarFallback>
              {user.name?.[0] ?? user.email?.[0]}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56 text-sm"
      >
        <div className="px-2 py-1.5 text-xs text-muted-foreground truncate">
          {user.email}
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => router.push("/settings")}>
          <Settings className="mr-2 h-4 w-4 opacity-70" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ThemeChanger variant="menu"/>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
