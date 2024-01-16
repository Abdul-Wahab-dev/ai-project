import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PDFDocument } from "pdf-lib";
export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const result = [];
  for (let file of formData.getAll("files")) {
    const pdf = await PDFDocument.create();
    const fileBuffer = await file.arrayBuffer();
    const loadedPdf = await PDFDocument.load(fileBuffer);

    const [firstPageCopy] = await pdf.copyPages(loadedPdf, [0]);

    pdf.addPage(firstPageCopy);
    const pdfBase64 = await pdf.saveAsBase64({ dataUri: true });

    result.push({
      name: file.name,
      base64: pdfBase64,
    });
  }

  return NextResponse.json({
    previews: result,
  });
};
