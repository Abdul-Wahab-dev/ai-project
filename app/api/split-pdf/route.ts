import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PDFDocument } from "pdf-lib";
export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const rangesValue: FormDataEntryValue | null = formData.get("ranges");

  let ranges: number[][] =
    typeof rangesValue === "string" ? JSON.parse(rangesValue) : [];

  const formatRanges = [];

  if (!file) {
    return NextResponse.json({
      status: 404,
      statusText: "file not found",
    });
  }

  const fileBuffer = await file.arrayBuffer();
  const loadedPdf = await PDFDocument.load(fileBuffer);
  if (ranges.length) {
    for (const range of ranges) {
      const downloadAblePdd = await PDFDocument.create();
      const generateRange = [];
      for (let i = range[0]; i <= range[1]; i++) {
        generateRange.push(i - 1);
      }
      const copyRangePages = await downloadAblePdd.copyPages(
        loadedPdf,
        generateRange
      );

      if (copyRangePages) {
        for (const page of copyRangePages) {
          downloadAblePdd.addPage(page);
        }
      }

      const pdfBytes = await downloadAblePdd.save();

      const bufferPdf = Buffer.from(pdfBytes);

      formatRanges.push({
        range,
        preview: "",
        bufferPdf,
      });
    }
  }

  return NextResponse.json({
    splittedPdf: formatRanges,
  });
};
