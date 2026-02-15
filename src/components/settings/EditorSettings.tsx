"use client"
import { editorKey, useLocalStorage } from "@/hooks/useLocalStorage";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { defaultSettings } from "@/lib/utils";
import { settingsSchema } from "@/zod/settings";

const EditorSettings = () => {
  const [value,setValue] = useLocalStorage(editorKey,defaultSettings,settingsSchema)
  console.log(value)
  return (
    <section className="mt-10 space-y-5">
      <h3 className="text-md font-semibold uppercase tracking-wider dark:opacity-40 opacity-100 ">
        Editor
      </h3>
      <div className="space-y-5 pl-3">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm dark:opacity-60 opacity-100">Spellcheck</p>
          <Select
          onValueChange={(val)=>{
            setValue({
              ...value,
              spellcheck:val === "enabled" ? true :false
            })
          }}
          defaultValue={value.spellcheck ? "enabled" : "disabled"}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="enabled">Enabled</SelectItem>
              <SelectItem value="disabled">Disabled</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm dark:opacity-60 opacity-100">Zen Mode</p>
          <Select 
          onValueChange={(val)=>{
            setValue({
              ...value,
              zenMode:val === "enabled" ? true :false
            })
          }}
          defaultValue={value.zenMode ? "enabled" : "disabled"}>
            <SelectTrigger>
              <SelectValue  />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="enabled">Enabled</SelectItem>
              <SelectItem value="disabled">Disabled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default EditorSettings;
