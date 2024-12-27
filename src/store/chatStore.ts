import { create } from "zustand";
import { ChatMessage } from "../types";
import { chatService } from "../services/chatService";

interface ChatStore {
  messages: ChatMessage[];
  isLoading: boolean;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
}

export const useChatStore = create<ChatStore>((set, get) => ({
  messages: [],
  isLoading: false,
  sendMessage: async (content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: Date.now(),
    };

    set(state => ({
      messages: [...state.messages, userMessage],
      isLoading: true,
    }));

    try {
      const aiResponse = await chatService.sendMessage(content);
      set(state => ({
        messages: [...state.messages, aiResponse],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Failed to get AI response:", error);
      set({ isLoading: false });
    }
  },
  clearMessages: () => set({ messages: [] }),
}));
