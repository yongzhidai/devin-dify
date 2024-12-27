import { AIApplication } from '../types';

// Mock delay to simulate API call
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock recommended applications data
const MOCK_RECOMMENDED_APPLICATIONS: AIApplication[] = [
  {
    id: '6',
    name: '智能写作助手',
    description: '基于AI的写作辅助工具，提供创意和润色建议',
    type: 'creative',
    icon: '✍️'
  },
  {
    id: '7',
    name: '数据可视化专家',
    description: '将复杂数据转化为直观的图表和报告',
    type: 'analysis',
    icon: '📊'
  },
  {
    id: '8',
    name: '智能会议助手',
    description: '自动记录会议内容，生成会议纪要',
    type: 'assistant',
    icon: '📝'
  },
  {
    id: '9',
    name: '多语言翻译大师',
    description: '实时翻译多种语言，支持语音和文字',
    type: 'chatbot',
    icon: '🌐'
  },
  {
    id: '10',
    name: '代码审查助手',
    description: 'AI驱动的代码质量分析和优化建议',
    type: 'development',
    icon: '👨‍💻'
  }
];

export const discoverService = {
  getRecommendedApplications: async (): Promise<AIApplication[]> => {
    await delay(1000);
    return MOCK_RECOMMENDED_APPLICATIONS;
  },

  getApplicationTypes: async (): Promise<string[]> => {
    await delay(500);
    return ['chatbot', 'analysis', 'assistant', 'creative', 'development'];
  }
};
