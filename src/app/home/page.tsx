import { auth } from "@/lib/auth"
import { headers } from "next/headers"

const page = async() => {
  const authData=await auth.api.getSession({
    headers:await headers()
  }) 
  return (
    <div>page</div>
  )
}

export default page