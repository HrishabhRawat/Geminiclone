 

import { GoogleGenerativeAI } from "@google/generative-ai";

// 1. Setup - Use an environment variable for your key
const apiKey = import.meta.env.VITE_GEMINI_API_KEY; 
const genAI = new GoogleGenerativeAI(apiKey);

// 2. Configuration - Gemini 3 Flash is ideal for a fast clone
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: "You are a helpful AI assistant. Keep responses concise and friendly.",
});

/**
 * Main chat function
 * @param {string} prompt - The user's message
 * @param {Array} history - Previous messages for context
 */
async function runChat(prompt, history = []) {
  try {
    // Start a chat session with history to maintain context
    const chatSession = model.startChat({
      history: history,
    });

    const result = await chatSession.sendMessage(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I ran into an error processing that request.";
  }
}

export default runChat;