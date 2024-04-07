import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const StoryList = ({ navigation, route }) => {
  const { searchTerm } = route.params;
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // Fetch stories based on search term here
    fetch(`https://example.com/stories?q=${searchTerm}`)
      .then(response => response.json())
      .then(data => setStories(data));
  }, [searchTerm]);

  return (
    <View style={styles.container}>
      {stories.map(story => (
        <TouchableOpacity
          key={story.id}
          style={styles.story}
          onPress={() => navigation.navigate('StoryScreen', { story })}
        >
          <Text style={styles.title}>{story.title}</Text>
          <Text style={styles.author}>{story.author}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  story: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  author: {
    fontSize: 14,
    color: '#666',
  },
});

export default StoryList;