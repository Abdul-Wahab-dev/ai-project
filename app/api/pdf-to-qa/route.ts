// import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { NextRequest } from "next/server";

import { Message } from "ai";
import { langchainClientInstance } from "@/lib/integration/langchain";

const formatMessages = (message: Message) => {
  return `${message.role === "user" ? "Human" : "Assistant"}: ${
    message.content
  }`;
};

export async function POST(req: NextRequest) {
  // const formData = await req.formData();
  // const file = formData.get("file");
  const body = await req.json();
  const messages: Message[] = body.messages ?? [];
  const formettedPreviousMessage = messages.slice(0, -1).map(formatMessages);
  const question = messages[messages.length - 1].content;

  const streamingTextResponse = langchainClientInstance.callChain({
    question,
    chathistory: formettedPreviousMessage.join("\n"),
    index: "temp",
  });

  return streamingTextResponse;
}
