import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppList } from '../components/business/AppList';
import { AIApplication } from '../types';

const mockRecommendedApps: AIApplication[] = [
  {
    id: '3',
    name: 'Writing Assistant',
    type: 'Content',
    description: 'AI-powered writing helper',
  },
  {
    id: '4',
    name: 'Image Generator',
    type: 'Creative',
    description: 'AI image generation tool',
  },
];

export const DiscoverScreen = () => {
  const handleSelectApp = (app: AIApplication) => {
    console.log('Selected recommended app:', app);
  };

  return (
    <View style={styles.container}>
      <AppList 
        applications={mockRecommendedApps}
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
