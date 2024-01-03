import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { s3Client } from "@/config/aws";
import { PutObjectCommand } from "@aws-sdk/client-s3";
export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const files = formData.getAll("files");
  const images = ["temp/third-scheme.png", "temp/tree-gb2f57de40_1280.jpg"];
  // upload to s3
  //   for (let i = 0; i < files.length; i++) {
  //     const imageKey = `temp/${files[i].name}`;
  //     images.push(imageKey);
  //     console.log(imageKey, "imageKey");
  //     const fileBuffer = await files[i].arrayBuffer();

  //     const command = new PutObjectCommand({
  //       Bucket: "image-to-pdf-images",
  //       Body: fileBuffer,
  //       Key: imageKey,
  //       ContentType: files[i].type,
  //     });
  //     await s3Client.send(command);
  //   }
  let pageContent = "";

  for (let i = 0; i < images.length; i++) {
    pageContent += `<div
      
    style="display:flex; height:100%; width:100%; justify-content:center; align-items:center; flex-direction:column; page-break-after:always; position:relative; overflow:hidden"
  >
  <img src="https://image-to-pdf-images.s3.us-east-2.amazonaws.com/${images[i]}" alt="cover" style="width:100%, height:100%;" width="100%" />
  </div>
  `;
  }
  const response = await lambdaFunctionPdf(pageContent, 8.3, 11.7, 0.5);

  return NextResponse.json({
    pdfBuffer: response,
  });
}

async function lambdaFunctionPdf(pageContent, width, height, margin) {
  const res = await (
    await fetch(
      "https://ekz3qjo4jq5q7k27gu6vzsjbp40yuqan.lambda-url.us-east-2.on.aws/",
      {
        method: "POST",
        body: JSON.stringify({
          pageContent,
          height,
          width,
          margin,
        }),
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      }
    )
  ).json();
  return res;
}
