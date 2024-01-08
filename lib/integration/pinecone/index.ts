import { pinecone } from "@/config/pinecone";
class PineconeClient {
  async createIndex(name: string) {
    await pinecone.createIndex({
      dimension: 1536,
      name: name,
      metric: "cosine",
    });
  }

  async initializePineconeClient(index: string) {
    console.log("hello initialize pinecone client");
    const existingIndex = await pinecone.listIndexes();
    if (
      existingIndex.filter(
        (el) => el.name.toLowerCase() === index.toLowerCase()
      ).length === 0
    ) {
      await this.createIndex(index);
    }
    return pinecone;
  }
}

export const pineconeInstance = new PineconeClient();
