"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { authClient } from "@/lib/auth-client"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const SignOutButton = () => {
  const [loading, setLoading] = useState(false)
  const router=useRouter()
  const handleSignOut=async()=>{
    try {
        setLoading(true)
        const data=await authClient.signOut()
        if(data.error){
            console.error(data.error)
            throw new Error(data.error.message)
        }
        toast.success("Signed out successfully")
        router.refresh()
    } catch (error) {
        setLoading(false)
        if(typeof error === "string"){
            toast.error(error)
        }else if(error instanceof Error){
            console.error(error.message)
        }
    }finally{
        setLoading(false)
    }
  }
  return (
    <Button
    onClick={handleSignOut} 
    variant={"destructive"}
    >
        Sign Out
    </Button>
  )
}

export default SignOutButton