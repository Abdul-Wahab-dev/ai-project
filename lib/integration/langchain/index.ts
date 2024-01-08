import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings, ChatOpenAI } from "@langchain/openai";
import { PineconeStore } from "@langchain/community/vectorstores/pinecone";
import { PineconeClient } from "@pinecone-database/pinecone";
class LangchainClient {
  streamingModel;
  nonStreamModel;
  constructor() {
    this.streamingModel = new ChatOpenAI({
      openAIApiKey: process.env.OPEN_AI_API_KEY,
      streaming: true,
      verbose: true,
      temperature: 0,
    });

    this.nonStreamModel = new ChatOpenAI({
      openAIApiKey: process.env.OPEN_AI_API_KEY,
      streaming: false,
      verbose: true,
      temperature: 0,
    });
  }

  async embedAndStoreDocs(
    client: PineconeClient,
    // @ts-ignore docs type error
    docs: Document<Record<string, any>>[],
    index: string
  ) {
    /*create and store the embeddings in the vectorStore*/
    try {
      const embeddings = new OpenAIEmbeddings({
        openAIApiKey: process.env.OPEN_AI_API_KEY,
        modelName: "text-embedding-ada-002",
      });
      const getIndexData = client.Index(index);
      console.log(getIndexData, "getIndexData");
      //embed the PDF documents
      await PineconeStore.fromDocuments(docs, embeddings, {
        pineconeIndex: getIndexData,
        textKey: "text",
      });
    } catch (error) {
      console.log("error ", error);
      throw new Error("Failed to load your docs !");
    }
  }

  async getVectorStore(client: PineconeClient, index: string) {
    try {
      const embeddings = new OpenAIEmbeddings();
      const getIndexData = client.Index(index);

      const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
        pineconeIndex: getIndexData,
        textKey: "text",
      });

      return vectorStore;
    } catch (error) {
      console.log("error ", error);
      throw new Error("Something went wrong while getting vector store !");
    }
  }

  async getChunkedDocsFromPDF(file: File) {
    try {
      const loader = new PDFLoader(file);
      const docs = await loader.load();

      // From the docs https://www.pinecone.io/learn/chunking-strategies/
      const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 200,
      });

      const chunkedDocs = await textSplitter.splitDocuments(docs);

      return chunkedDocs;
    } catch (e) {
      console.error(e);
      throw new Error("PDF docs chunking failed !");
    }
  }
}

export const langchainClientInstance = new LangchainClient();
