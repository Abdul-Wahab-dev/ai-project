import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import sharp from "sharp";
export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const file = formData.get("file") as File;
  let conversionType = formData.get("conversionType")?.toString() ?? "jpeg";

  const bufferFile = await file.arrayBuffer();
  let convertedBuffer;

  if (conversionType.includes("jpeg")) {
    convertedBuffer = await sharp(bufferFile).jpeg({ quality: 100 }).toBuffer();
  } else if (conversionType.includes("png")) {
    convertedBuffer = await sharp(bufferFile).png({ quality: 100 }).toBuffer();
  } else if (conversionType.includes("webp")) {
    convertedBuffer = await sharp(bufferFile).webp({ quality: 100 }).toBuffer();
  }

  return NextResponse.json({
    convertedBuffer,
  });
}
