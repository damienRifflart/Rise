import Groq from 'groq-sdk';
const apiKey = import.meta.env.VITE_API_KEY;
const groq = new Groq({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
});

export const fetchResponse = async (): Promise<string> => {
    const chatCompletion = await groq.chat.completions.create({
        messages: [{ role: 'user',
            content: 'Provide the names of three influential painters who belongs to different artistic movement, each accompanied by one of their most famous paintings. Do not add anything else, like descriptions, specifications. Format your response in a list as follows:  {"Painter1": {"birth": XXXX, "death": XXXX, "movement":"Movement1", "famousPainting": "Painting1"}, "Painter2": {"birth": XXXX, "death": XXXX, "movement":"Movement2", "famousPainting": "Painting2"}, "Painter3": {"birth": XXXX, "death": XXXX, "movement":"Movement3", "famousPainting": "Painting3"}}' }],
        model: 'llama-3.1-8b-instant',
        temperature: 1,
        max_tokens: 1024,
        top_p: 1,
    });
  
    return chatCompletion.choices[0]?.message?.content || '';
};
  
