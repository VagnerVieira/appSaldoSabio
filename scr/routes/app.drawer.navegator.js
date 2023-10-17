import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {AntDesign, Feather } from '@expo/vector-icons';  

import AppStackNavigator from './app.stack.navegator';
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
        drawerInactiveBackgroundColor: '#F9CD2F',
        drawerInactiveTintColor: '#121212',
      }}
    >
      <AppDrawer.Screen
        name="Home"
        component={AppTabNavigator}
        options={{
          drawerIcon: ({ color, size }) => 
          <Feather name="home" color={color} size={size} />,
          drawerLabel: "Home",
        }}
      />
      <AppDrawer.Screen
        name="Categorias"
        component={AppStackNavigator}
        options={{
        drawerIcon: ({ color, size }) => (
        <AntDesign name="profile" color={color} size={size} />
        ),
        drawerLabel: "Categorias",
       }}
      />
    </AppDrawer.Navigator>
  );
}

export default AppDrawerNavigator;