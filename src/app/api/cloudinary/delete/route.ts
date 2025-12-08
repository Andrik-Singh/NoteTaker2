import { NextResponse } from "next/server"

export async function POST(req:Request){
    try {
        const data=await req.json()
        return NextResponse.json({message:"Deleted"}, {status:200})
    } catch (error) {
        console.error(error)
        return NextResponse.json({message:"Error"}, {status:500})
    }
}