import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import sharp from "sharp";
// import { getDocument } from "pdfjs-dist";
import { GlobalWorkerOptions, getDocument, OPS } from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import { File } from "buffer";
GlobalWorkerOptions.workerSrc = pdfjsWorker;

// import "pdfjs-dist/webpack.mjs";
// PDFJS.GlobalWorkerOptions.workerSrc = "pdfjs-dist/build/webpack.mjs";
export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const file = formData.get("file");
  const mimeType = formData.get("mimeType")?.toString();
  //   let conversionType = formData.get("conversionType")?.toString() ?? "jpeg";

  const bytes = await file.arrayBuffer();

  const pdf = getDocument(bytes);

  const pdfInfo = await pdf.promise;
  const page = await pdfInfo.getPage(1);
  const pageCount = await page.getTextContent();
  const operateionList = await page.getOperatorList();
  // const imagePromise = operateionList
  // .reduce((imgs, op) => {
  //   if (op.fnName === "paintImageXObject") {
  //     const imgData = page.objs.get(op.args[0]);
  //     imgs.push(imgData);
  //   }
  //   return imgs;
  // }, [])
  // .map(async (img) => {
  //   const imgData = await img?.obj?.getContent();
  //   const imgBlob = new Blob([imgData], { type: "image/png" });
  //   return URL.createObjectURL(imgBlob);
  // });
  // const imagesPromise = await Promise.all(imagePromise);
  // console.log(imagesPromise, "imagesPromise");

  // console.log(operateionList, "operation list");
  const imagesArray = [];
  for (let i = 0; i < operateionList.fnArray.length; i++) {
    if (operateionList.fnArray[i] == OPS.paintImageXObject) {
      // console.log(, "hello");
      imagesArray.push(operateionList.argsArray[i][0]);
    }
  }

  const imagePromise = imagesArray.map(async (el) => {
    const imageData = await page.objs.get(el);
    console.log(imageData);
    const imageBlob = new Blob([imageData.data], { type: "image/png" });

    return await new Response(imageBlob).arrayBuffer();
  });
  const imageUlrs = await Promise.all(imagePromise);
  // const demoBlob = new File(
  //   [imagesArray.map((el) => page.objs.get(el))[0].data],
  //   "image.png",
  //   { type: "image/png", endings: "transparent" }
  // );
  console.log(imageUlrs[0]);

  let convertedBuffer = imageUlrs[0];

  return NextResponse.json({
    convertedBuffer,
  });
}
