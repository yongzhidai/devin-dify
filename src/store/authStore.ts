import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (username: string, password: string) => {
    // Will implement actual login logic later
    set({ user: { id: '1', username }, isAuthenticated: true });
  },
  logout: () => set({ user: null, isAuthenticated: false }),
}));
