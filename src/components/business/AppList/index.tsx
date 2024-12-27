import React from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { AIApplication } from '../../../types';
import { AppCard } from '../../presentation/AppCard';
import { FilterChip } from '../../presentation/FilterChip';

interface AppListProps {
  applications: AIApplication[];
  onFilterChange: (type: string | null) => void;
  selectedType: string | null;
}

const FILTER_TYPES = ['chatbot', 'analysis', 'assistant', 'creative'];

export const AppList: React.FC<AppListProps> = ({ 
  applications,
  onFilterChange,
  selectedType
}) => {
  const handleAppPress = (app: AIApplication) => {
    console.log('Selected app:', app);
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
      >
        <FilterChip
          label="全部"
          isSelected={selectedType === null}
          onPress={() => onFilterChange(null)}
        />
        {FILTER_TYPES.map((type) => (
          <FilterChip
            key={type}
            label={type}
            isSelected={type === selectedType}
            onPress={() => onFilterChange(type)}
          />
        ))}
      </ScrollView>
      
      <FlatList
        data={applications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AppCard app={item} onPress={handleAppPress} />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  listContent: {
    padding: 16,
  },
});
