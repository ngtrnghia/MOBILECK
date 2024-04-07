import React from 'react';
import{ createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Search from './Search';
import StoryList from './StoryList';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="StoryList" component={StoryList} />
    </Stack.Navigator>
  );
};

export default AppNavigator;