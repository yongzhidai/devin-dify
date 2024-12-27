import { User } from '../types';

// Mock authentication service
export const authService = {
  login: async (username: string, password: string): Promise<User> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: '1',
          username,
          avatar: 'https://via.placeholder.com/150',
        });
      }, 1000);
    });
  },
};
