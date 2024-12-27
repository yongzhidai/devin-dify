import React from 'react';
import { View } from 'react-native';
import { AIApplication } from '../../../types';

interface AppListProps {
  applications: AIApplication[];
  onSelectApp: (app: AIApplication) => void;
  filter?: string;
}

export const AppList: React.FC<AppListProps> = ({ applications, onSelectApp }) => {
  return <View />; // Will implement UI in presentation layer
};
