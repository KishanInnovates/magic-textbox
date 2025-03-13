"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function enhanceText(inputText: string): Promise<string> {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      throw new Error("Gemini API key is missing.");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = `Enhance the following text to make it more professional, engaging, and well-written. Maintain the original meaning but improve the language, clarity, and style:\n\n${inputText}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      throw new Error("No response from Gemini API.");
    }

    return text.trim();
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to enhance text");
  }
}
