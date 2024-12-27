import { User } from '../types';

// Mock delay to simulate API call
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock user profile data
const MOCK_USER_PROFILE: User = {
  id: '1',
  username: '张三',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
  email: 'zhangsan@example.com',
  joinDate: '2023-12-01',
  applications: 5,
  favorites: 3
};

export const userService = {
  getUserProfile: async (): Promise<User> => {
    await delay(1000);
    return MOCK_USER_PROFILE;
  },

  updateUserProfile: async (updates: Partial<User>): Promise<User> => {
    await delay(500);
    return {
      ...MOCK_USER_PROFILE,
      ...updates
    };
  }
};
