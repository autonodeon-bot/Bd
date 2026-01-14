
import { GoogleGenAI, Type } from "@google/genai";
import { InvitationData, DecorIdea } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateInvitationText = async (data: InvitationData): Promise<string> => {
  const prompt = `Напиши текст официального приглашения на день рождения. 
  Имя именинника: ${data.name}. 
  Дата: ${data.date}. 
  Время: ${data.time}. 
  Место: ${data.location}. 
  Стиль: ${data.style}. 
  Текст должен быть торжественным, но соответствовать выбранному стилю. Сделай его на русском языке.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
  });

  return response.text || "Не удалось сгенерировать текст приглашения.";
};

export const generateDecorIdeas = async (theme: string): Promise<DecorIdea> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Придумай дизайн фотозоны и оформления зала в ресторане для темы дня рождения: "${theme}". 
    Опиши детально элементы декора. Ответ верни строго в формате JSON.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          photoZone: { type: Type.STRING, description: 'Описание дизайна фотозоны' },
          hallDecor: { type: Type.STRING, description: 'Описание оформления зала в ресторане' },
          colors: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: 'Основные цвета оформления (HEX или названия)' 
          },
        },
        required: ["photoZone", "hallDecor", "colors"],
      },
    },
  });

  return JSON.parse(response.text.trim()) as DecorIdea;
};

export const generatePreviewImage = async (prompt: string): Promise<string | null> => {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        { text: `High quality concept design visualization for a birthday party: ${prompt}` },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "16:9",
      }
    }
  });

  for (const part of response.candidates?.[0]?.content.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
};
