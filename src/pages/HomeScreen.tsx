import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ChatContainer } from '../components/business/ChatContainer';
import { useChatStore } from '../store';

export const HomeScreen = () => {
  const { messages, sendMessage, isLoading } = useChatStore();

  return (
    <View style={styles.container}>
      <ChatContainer 
        messages={messages} 
        onSendMessage={sendMessage}
        isLoading={isLoading}
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
