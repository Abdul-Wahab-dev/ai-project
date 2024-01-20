import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PDFDocument } from "pdf-lib";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const file = formData.get("file");
  let pageNumbers: number[] = JSON.parse(formData.get("pageNumbers"));
  console.log(pageNumbers, "pageNumbers");
  if (!file) {
    return NextResponse.json({
      status: 404,
      statusText: "file not found",
    });
  }
  const fileBuffer = await file.arrayBuffer();
  const loadedPdf = await PDFDocument.load(fileBuffer);
  if (pageNumbers.length < 2) {
    const lastPageNumber = loadedPdf.getPageCount();
    pageNumbers.push(lastPageNumber);
  }
  const pdfFirst = await PDFDocument.create();
  const pdfSecond = await PDFDocument.create();

  const [firstPageCopy] = await pdfFirst.copyPages(loadedPdf, [
    pageNumbers[0] - 1,
  ]);
  const [secondPageCopy] = await pdfSecond.copyPages(loadedPdf, [
    pageNumbers[1] - 1,
  ]);

  pdfFirst.addPage(firstPageCopy);
  pdfSecond.addPage(secondPageCopy);
  const pdfBase64First = await pdfFirst.saveAsBase64({ dataUri: true });
  const pdfBase64Second = await pdfSecond.saveAsBase64({ dataUri: true });

  return NextResponse.json({
    pageFromPreview: pdfBase64First,
    pageToPreview: pdfBase64Second,
    totalPages: loadedPdf.getPageCount(),
  });
};
