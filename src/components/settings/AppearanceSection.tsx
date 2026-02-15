"use client";
import { settingsSchema } from "@/zod/settings";
import ThemeToggle from "../ThemeChanger";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { editorKey, useLocalStorage } from "@/hooks/useLocalStorage";
import { defaultSettings } from "@/lib/utils";

const AppearanceSection = () => {
  const [value, setValue] = useLocalStorage(editorKey,defaultSettings,settingsSchema);
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
            onValueChange={(val)=>{
              setValue({
                ...value,
                textSize: val === "sm" ? "sm" : val === "md" ? "md" : "lg"
              })
            }}
            defaultValue={value.textSize === "sm" ? "sm" : value.textSize === "md" ? "md" : "lg"}
          >
            <SelectTrigger className="w-[140px] text-sm">
              <SelectValue  />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="sm">Small</SelectItem>
              <SelectItem value="md">Default</SelectItem>
              <SelectItem value="lg">Large</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm dark:opacity-60 opacity-100">Line Width</p>

          <Select
            onValueChange={(val)=>{
              setValue({
                ...value,
                lineWidth:val === "narrow" ? "narrow" : val === "normal" ? "normal" : "wide"
              })
            }}
            defaultValue={value.lineWidth === "narrow" ? "narrow" : value.lineWidth === "normal" ? "normal" : "wide"}
          >
            <SelectTrigger className="w-[140px] text-sm">
              <SelectValue  />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="narrow">Narrow</SelectItem>
              <SelectItem value="normal">Normal</SelectItem>
              <SelectItem value="wide">Wide</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default AppearanceSection;
