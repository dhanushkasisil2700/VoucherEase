import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import Feed from '../screens/Feed.jsx';
import ProfileScreen from '../screens/ProfileScreen.jsx';
import SignupScreen from '../screens/SignupScreen.jsx';
import ListItemScreen from '../screens/ListItemScreen.jsx';
import CartScreen from '../screens/CartScreen.jsx';
import AccountScreen from '../screens/AccountScreen.jsx';
import ProductListScreen from '../screens/ProductListScreen.jsx';
import ProductPage from '../components/ProductPage.jsx';

import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Home Page' }} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Sign Up Now!' }} />
      <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Shop Now!' }} />
    </Stack.Navigator>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = 'dashboard';
          } else if (route.name === 'ListItems') {
            iconName = 'list';
          } else if (route.name === 'Cart') {
            iconName = 'shopping-cart';
          } else if (route.name === 'Profile') {
            iconName = 'account-circle';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ListItems"
        component={ListItemScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function NavigatorS() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="UserAccount" component={AccountScreen} />
        <Stack.Screen name="ProductList" component={ProductListScreen} />
        <Stack.Screen name="Product" component={ProductPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
