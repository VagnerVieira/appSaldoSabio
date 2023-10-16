import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';  

import Home from '../pages/Home';
import AppTabNavigator from './app.tab.navigator';

const AppDrawer = createDrawerNavigator();

function AppDrawerNavigator() {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#F9CD2F',
          paddingTop: 20,
        },
        drawerActiveBackgroundColor: '#0F0F18',
        drawerActiveTintColor: '#FFF',
        drawerInactiveBackgroundColor: '#0F0F18',
        drawerInactiveTintColor: '#121212',
      }}
    >
      <AppDrawer.Screen
        name="Home"
        component={AppTabNavigator}
        options={{
          drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
          drawerLabel: "Home",
        }}
      />
    </AppDrawer.Navigator>
  );
}

export default AppDrawerNavigator;