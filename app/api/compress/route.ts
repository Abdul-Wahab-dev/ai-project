import { NextResponse } from "next/server";
import sharp from "sharp";
export async function POST(req: Request) {
  const formData = await req.formData();

  const file = formData.get("file");

  // const type = file.type.split("/")[1];
  console.log(file);
  const compressedFile = await sharp(file.buffer)
    .png({ quality: 60 })
    .toBuffer();

  // console.log({compressedFile})
  return NextResponse.json(
    {
      message: "success",
    },
    {
      status: 200,
    }
  );
}
