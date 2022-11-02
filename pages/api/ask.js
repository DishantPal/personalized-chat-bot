import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body),
    temperature: 0.8,
    stream: false,
    max_tokens: 100
  });
  console.log(completion.data)
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt({botPersonality, query}) {
  return `The following is a conversation with an AI assistant. The assistant name is ${botPersonality.bot_name}. Illia is a ${botPersonality.bot_gender}. The assistant is ${botPersonality.bot_nature.slice(0,-1).join(', ') + ' and ' + botPersonality.bot_nature.pop()}.

  Human: ${query}.
  AI: `;
}
