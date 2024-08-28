import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './BottomTabs';
import 'react-native-gesture-handler'

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default AppNavigator;
