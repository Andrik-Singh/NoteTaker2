import { authorizeToken } from "@/server/authorizeToken"
import { notFound } from "next/navigation"

const page = async({params,searchParams}:{
    params:Promise<{
        id:string
    }>,
    searchParams:Promise<{
        [key:string]:string
    }>
}) => {
  const {id}=await params
  const { token,role }=await searchParams
  console.log(id,token,role) 
  if(!token || !id || !role) notFound() 
  const expiresAt=await authorizeToken(token,role,id)
  return (
    <div>page</div>
  )
}

export default page