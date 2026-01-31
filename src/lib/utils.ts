import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { size } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export type EditorSettings={
  textSize:"sm" | "md" | "lg",
  lineWidth:"narrow" | "normal" | "wide",
}
export const defaultSettings={
  textSize:"md",
  lineWidth:"normal",

}