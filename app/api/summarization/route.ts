// import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { NextRequest, NextResponse } from "next/server";
import { OpenAIEmbeddings, OpenAI } from "@langchain/openai";
// import { PineconeStore } from "langchain/vectorstores/pinecone";
// import { pinecone } from "@/config/pinecone";
import { langchainClientInstance } from "@/lib/integration/langchain";
import { pineconeInstance } from "@/lib/integration/pinecone";
const openaiEmbeddings = new OpenAIEmbeddings({
  openAIApiKey: process.env.OPEN_AI_API_KEY,
});

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file");
  //   console.log(file, " file object");
  //   const loader = new PDFLoader(file);
  //   const docs = await loader.load();
  //   console.log(docs, "docs");
  // const getIndex = pinecone.index("demo");

  await chunkedDocsEmbedAndStoreDocs(file as File);
  //   await PineconeStore.fromDocuments(docs, openaiEmbeddings, {
  //     pineconeIndex: getIndex,
  //     maxConcurrency: 5,
  //   });
  // const vectorStore = await PineconeStore.fromExistingIndex(openaiEmbeddings, {
  //   pineconeIndex: getIndex,
  // });

  // const model = new OpenAI({
  //   openAIApiKey: process.env.OPEN_AI_API_KEY,
  // });
  // const chain = VectorDBQAChain.fromLLM(model, vectorStore, {
  //   k: 5,
  //   returnSourceDocuments: true,
  // });
  // const result = await chain.call({
  //   query: "make a short summary that should cover all the important points",
  // });

  //   const result = await vectorStore.similaritySearch("Purple Dinosaur", 10);

  //   const embedding = await openaiEmbeddings.embedQuery("");

  return NextResponse.json(
    {
      message: "ok",
    },
    {
      status: 200,
    }
  );
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
