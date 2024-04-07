import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import StoryContent from './StoryContent';

const Stack = createStackNavigator();

const StoryScreen = ({ route }) => {
  const { story } = route.params;

  return (
    <Stack.Navigator>
      <Stack.Screen name="StoryContent" component={StoryContent} initialParams={{ story }} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default StoryScreen;