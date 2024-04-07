import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StoryContent = ({ route }) => {
  const { story } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{story.title}</Text>
      <Text style={styles.content}>{story.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 14,
    lineHeight: 18,
    color: '#333',
  },
});

export default StoryContent;