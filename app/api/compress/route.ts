import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import sharp from "sharp";
export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const file = formData.get("file");
  const mimeType = formData.get("mimeType");
  let compress = parseInt(formData.get("compress")) ?? 60;

  const bufferFile = await file.arrayBuffer();
  let compressedBuffer;
  switch (compress) {
    case 20:
      compress = 60;
      break;
    case 40:
      compress = 50;
      break;
    case 60:
      compress = 40;
      break;
    case 80:
      compress = 30;
      break;
    case 100:
      compress = 20;
      break;
    default:
      compress = 70;
      break;
  }

  if (mimeType?.toString().includes("jpeg")) {
    compressedBuffer = await sharp(bufferFile)
      .jpeg({ quality: compress })
      .toBuffer();
  } else if (mimeType?.toString().includes("png")) {
    compressedBuffer = await sharp(bufferFile)
      .png({ quality: compress })
      .toBuffer();
  }

  return NextResponse.json({
    compressedBuffer,
  });
}
