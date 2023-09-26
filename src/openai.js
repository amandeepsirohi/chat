const {Configuration , OpenApi} = require('openai');
const configuration = new Configuration({apiKey :"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" });

const openai = new OpenApi(configuration);

export async function send_msg(message)
{
    const res = await openai.createCompletion({
        module : 'gpt-3.5-turbo',
        prompt : message,
        temprature : 0.7,
        max_token : 256,
        top_p : 1,
        frequency_penalty : 0,
        presense_penalty : 0
    });
    return res.data.choices[0].text;
}
// const OpenAI = require("openai");

// const openai = new OpenAI({
//   apiKey: "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",
//   dangerouslyAllowBrowser: true 
// });

// const openFun=async()=>{
// const chatCompletion = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [{"role": "user", "content": "YOUR PROMPT TEXT",}],
//     max_tokens:100
//   });
//  return chatCompletion.choices[0];
// }