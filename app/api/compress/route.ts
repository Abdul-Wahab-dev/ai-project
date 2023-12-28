import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import sharp from "sharp";
export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const file = formData.get("file");
  // Read the file content into a Buffer
  const bufferFile = await file.arrayBuffer();

  const compressedBuffer = await sharp(bufferFile)
    .jpeg({ quality: 10 })
    .toBuffer();

  return NextResponse.json({
    compressedBuffer,
  });
}
