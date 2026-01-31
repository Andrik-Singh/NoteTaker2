"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Props = {
  variant?: "icon" | "menu";
};

export default function ThemeToggle({ variant = "icon" }: Props) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  if (variant === "menu") {
    return (
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="
          flex w-full items-center gap-2
          py-1.5 text-sm
          text-foreground
          hover:text-foreground
          transition
        "
      >
        {isDark ? (
          <Sun className="h-4 w-4 opacity-70" />
        ) : (
          <Moon className="h-4 w-4 opacity-70" />
        )}
        <p className="truncate mx-2">{isDark ? "Light mode" : "Dark mode"}</p>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="
        rounded-md p-1.5
        text-foreground
        hover:text-foreground
        transition
      "
    >
      {isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
