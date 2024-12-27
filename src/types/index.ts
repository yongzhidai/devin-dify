// Common types used across the application
export interface User {
  id: string;
  username: string;
  avatar?: string;
}

export interface AIApplication {
  id: string;
  name: string;
  type: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: number;
}
