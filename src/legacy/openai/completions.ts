import OpenAI from "openai";

const openai = new OpenAI();

export async function legacyCompletion(prompt: string) {
  const data = await openai.completions.create({ model: "text-davinci-003", prompt, max_tokens: 120, temperature: 0.2 });
  return data.choices[0].text;
}
