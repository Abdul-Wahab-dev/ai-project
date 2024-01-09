import { langchainClientInstance } from "@/lib/integration/langchain";
import { pineconeInstance } from "@/lib/integration/pinecone";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    await chunkedDocsEmbedAndStoreDocs(file as File);

    NextResponse.json(
      {
        message: "file upload success fully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log({ error });
  }
}

async function chunkedDocsEmbedAndStoreDocs(file: File) {
  try {
    console.log("hello");
    const pineconeClient = await pineconeInstance.initializePineconeClient(
      "temp"
    );
    console.log("Preparing chunks from PDF file");
    const docs = await langchainClientInstance.getChunkedDocsFromPDF(file);
    console.log(`Loading ${docs.length} chunks into pinecone...`);
    await langchainClientInstance.embedAndStoreDocs(
      pineconeClient,
      docs,
      "temp"
    );
    console.log("Data embedded and stored in pine-cone index");
  } catch (error) {}
}
