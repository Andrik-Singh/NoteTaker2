import { defaultSettings } from "@/lib/utils"
import { useEffect, useState } from "react"

export function useLocalStorage<T>(key:string) {
  const [value, setValue] = useState(()=>{
    if(typeof window==="undefined" || !window){
      return defaultSettings
    }
    try {
      const stored= JSON.parse(localStorage.getItem(key) || "")
      return stored as T || defaultSettings  
    } catch (error) {
      return defaultSettings
    }
  })
  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))
  },[key,value])
  return [value,setValue] as const
}