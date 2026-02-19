import { useEffect, useState } from "react"
import z from "zod"
export const editorKey = "editorSettings"
export function useLocalStorage<
  S extends z.ZodTypeAny,
>(key:string,defaultSettings:z.infer<S>,schema:S) {
  type T =z.infer<S>
  const [value, setValue] = useState(()=>{
    if(typeof window==="undefined" || !window){
      return defaultSettings
    }
    try {
      const stored= JSON.parse(localStorage.getItem(key) || "")
      const parsed = schema.safeParse(stored)
      return parsed.success ? parsed.data : defaultSettings
    } catch (error) {
      return defaultSettings
    }
  })
  useEffect(()=>{
    const parsedResult= schema.safeParse(value) 
    if(parsedResult.success){
      localStorage.setItem(key,JSON.stringify(value))
    }else{
      setValue(defaultSettings)
      localStorage.setItem(key,JSON.stringify(defaultSettings))
    }
  },[key,value])
  return [value,setValue] as const
}