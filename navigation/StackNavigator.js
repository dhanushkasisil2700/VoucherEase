import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen.jsx'
import SignupScreen from '../screens/SignupScreen.jsx'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Home Page' }} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'SignUp Now!' }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
