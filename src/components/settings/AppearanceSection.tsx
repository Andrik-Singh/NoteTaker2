"use client";
import ThemeToggle from "../ThemeChanger";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const AppearanceSection = () => {
  const [value, setValue] = useLocalStorage("editorSettings");

  console.log(value);
  return (
    <section className="mt-10 space-y-5">
      <h3 className="text-md font-semibold uppercase tracking-wider dark:opacity-40 opacity-100 ">
        Appearance
      </h3>

      <div className="space-y-3 pl-3">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm dark:opacity-60 opacity-100">Theme</p>
          <ThemeToggle />
        </div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm dark:opacity-60 opacity-100">Text size</p>

          <Select
            onValueChange={() => {
              setValue({
                dsad: "Dsad",
              });
              console.log(value)
            }}
            defaultValue="md"
          >
            <SelectTrigger className="w-[140px] text-sm">
              <SelectValue placeholder="Default" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="sm">Small</SelectItem>
              <SelectItem value="md">Default</SelectItem>
              <SelectItem value="lg">Large</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default AppearanceSection;
