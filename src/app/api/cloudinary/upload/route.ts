
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINAR_API_SECRET,
})
export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const file = data.get("file") as File | null;
    if (!file) {
      return NextResponse.json(
        { message: "No file provided" },
        { status: 400 }
      );
    }
    if (
      file.size > 3 * 1024 * 1024 ||
      (file.type !== "image/jpeg" &&
        file.type !== "image/png" &&
        file.type !== "image/gif" &&
        file.type !== "image/webp")
    ) {
      return NextResponse.json(
        { message: "File size exceeds limit" },
        { status: 400 }
      );
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    const res = await new Promise<any>((resolve,reject)=>{
        const stream=cloudinary.uploader.upload_stream(((err,res)=>{
            if(err) reject(err)
            else resolve(res)
        }));
        stream.end(buffer);
    })
    console.log(res);
    return NextResponse.json({ message: "Success", url:res.url }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
