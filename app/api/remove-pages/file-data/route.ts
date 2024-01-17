import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PDFDocument } from "pdf-lib";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const file = formData.get("file");
  const pageNumber = formData.get("pageNumber");

  if (!file) {
    return NextResponse.json({
      status: 404,
      statusText: "file not found",
    });
  }
  const fileBuffer = await file.arrayBuffer();
  const loadedPdf = await PDFDocument.load(fileBuffer);
  const pdf = await PDFDocument.create();
  const [firstPageCopy] = await pdf.copyPages(loadedPdf, [
    parseInt(pageNumber as string),
  ]);

  pdf.addPage(firstPageCopy);

  const pdfBase64 = await pdf.saveAsBase64({ dataUri: true });

  return NextResponse.json({
    preview: pdfBase64,
    totalPages: loadedPdf.getPageCount(),
  });
};
