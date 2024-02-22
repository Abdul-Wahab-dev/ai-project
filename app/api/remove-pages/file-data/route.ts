import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PDFDocument } from "pdf-lib";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({
      status: 404,
      statusText: "file not found",
    });
  }
  const fileBuffer = await file.arrayBuffer();
  const loadedPdf = await PDFDocument.load(fileBuffer);

  return NextResponse.json({
    // preview: pdfBase64,
    totalPages: loadedPdf.getPageCount(),
  });
};
