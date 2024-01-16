import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { s3FileHandling } from "@/lib/integration/aws/s3";

import { PDFDocument } from "pdf-lib";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const pdf = await PDFDocument.create();

  for (const file of formData.getAll("files")) {
    const fileBuffer = await file.arrayBuffer();
    const loadedPdf = await PDFDocument.load(fileBuffer);

    const pageCount = loadedPdf.getPageCount();
    const pageArray = [];

    for (let i = 0; i < pageCount; i++) {
      pageArray.push(i);
    }

    const pages = await pdf.copyPages(loadedPdf, pageArray);

    for (let i = 0; i < pages.length; i++) {
      pdf.addPage(pages[i]);
    }
  }

  const pdfBytes = await pdf.save();
  const bufferPdf = Buffer.from(pdfBytes);
  const objectKey = await s3FileHandling.uploadBufferToS3(bufferPdf);
  return NextResponse.json({
    key: objectKey,
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
