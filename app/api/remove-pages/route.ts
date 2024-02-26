import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { s3FileHandling } from "@/lib/integration/aws/s3";

import { PDFDocument } from "pdf-lib";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const pdf = await PDFDocument.create();
  const file = formData.get("file");
  const pages: number[] = formData.get("pages");
  const fileBuffer = await file.arrayBuffer();
  const loadedPdf = await PDFDocument.load(fileBuffer);
  const totalPage = loadedPdf.getPageCount();
  for (let i = 0; i < totalPage; i++) {
    if (!pages.includes(i)) {
      const [copyPages] = await pdf.copyPages(loadedPdf, [i]);
      pdf.addPage(copyPages);
    }
  }

  const pdfBytes = await pdf.save();
  const bufferPdf = Buffer.from(pdfBytes);
  return NextResponse.json({
    bufferPdf,
  });
};

export async function DELETE(req: NextRequest) {
  await s3FileHandling.deleteAllTempObj();

  return NextResponse.json(
    {
      message: "success",
    },
    {
      status: 200,
    }
  );
}
