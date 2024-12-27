import { AIApplication } from '../types';

// Mock delay to simulate API call
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock application types
const APPLICATION_TYPES = ['chatbot', 'analysis', 'assistant', 'creative'];

// Mock applications data
const MOCK_APPLICATIONS: AIApplication[] = [
  {
    id: '1',
    name: '智能客服助手',
    description: '24/7全天候客户服务AI助手',
    type: 'chatbot',
    icon: '🤖'
  },
  {
    id: '2',
    name: '数据分析专家',
    description: '深度分析数据，提供商业洞察',
    type: 'analysis',
    icon: '📊'
  },
  {
    id: '3',
    name: '个人助理',
    description: '帮助管理日程和任务的AI助手',
    type: 'assistant',
    icon: '📅'
  },
  {
    id: '4',
    name: '创意写作助手',
    description: '协助创作文章和内容',
    type: 'creative',
    icon: '✍️'
  },
  {
    id: '5',
    name: '多语言翻译器',
    description: '实时多语言翻译和对话',
    type: 'chatbot',
    icon: '🌐'
  }
];

export const applicationService = {
  getApplications: async (): Promise<AIApplication[]> => {
    await delay(1000);
    return MOCK_APPLICATIONS;
  },

  getApplicationTypes: async (): Promise<string[]> => {
    await delay(500);
    return APPLICATION_TYPES;
  }
};
