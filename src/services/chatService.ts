import { ChatMessage } from "../types";

// Mock delay to simulate API call
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const chatService = {
  sendMessage: async (content: string): Promise<ChatMessage> => {
    // Simulate API delay
    await delay(1000);
    
    // Mock AI response
    return {
      id: Date.now().toString(),
      content: `This is a mock response to: "${content}"`,
      sender: "ai",
      timestamp: Date.now(),
    };
  },
};
