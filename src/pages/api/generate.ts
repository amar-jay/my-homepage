import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function openaihandler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.input),
    temperature: 0.6,
  });
  res.status(200).json({ result: completion.data.choices });
  } catch (err) {
    res.status(404).json({error: err});
  }
}

function generatePrompt<T extends string>(prompt: T): T {
  const capitalizedText =
    prompt[0].toUpperCase() + prompt.slice(1).toLowerCase();
  return capitalizedText as T;
}
