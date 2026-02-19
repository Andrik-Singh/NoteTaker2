import { TsettingsSchema } from "@/zod/settings"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const key = "editorSettings"
export const defaultSettings:TsettingsSchema={
  textSize:"md",
  lineWidth:"normal",
  spellcheck:true,
  zenMode:false
}