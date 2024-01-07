namespace NodeJS {
  interface ProcessEnv {
    [Key: string]: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    AWS_ACCESS_KEY: string;
    AWS_SECRET_ACCESS_KEY: string;
    AWS_BUCKET_IMAGE_PDF: string;
    PINECONE_API_KEY: string;
    PINECONE_ENV: string;
    OPEN_AI_API_KEY: string;
    OPEN_AI_ORG: string;
  }
}
