import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppList } from '../components/business/AppList';
import { AIApplication } from '../types';

const mockApps: AIApplication[] = [
  {
    id: '1',
    name: 'Chat Assistant',
    type: 'Chatbot',
    description: 'General purpose chat assistant',
  },
  {
    id: '2',
    name: 'Code Helper',
    type: 'Development',
    description: 'AI-powered coding assistant',
  },
];

export const StudioScreen = () => {
  const handleSelectApp = (app: AIApplication) => {
    console.log('Selected app:', app);
  };

  return (
    <View style={styles.container}>
      <AppList 
        applications={mockApps}
        onSelectApp={handleSelectApp}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
