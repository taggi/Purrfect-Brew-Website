import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getBaristaResponse = async (userMessage: string, history: string[]): Promise<string> => {
  try {
    // Construct a simple context from recent history
    const context = history.join('\n');
    const prompt = `
      Context: ${context}
      User: ${userMessage}
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "เมี๊ยว? เหมือนระบบจะมีปัญหานิดหน่อย ลองใหม่นะเมี๊ยว!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "ขอโทษนะเมี๊ยว ตอนนี้กะทิง่วงนอน (API Error) ลองถามใหม่ทีหลังนะ";
  }
};