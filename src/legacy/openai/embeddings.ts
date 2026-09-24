import OpenAI from "openai";

const openai = new OpenAI();

export async function legacyEmbedding(input: string) {
  return openai.embeddings.create({ model: "text-embedding-ada-002", input });
}
