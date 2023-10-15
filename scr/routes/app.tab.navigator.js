import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons'; 

import Home from '../pages/Home';
import Transactions from '../pages/Transactions';
import Planning from '../pages/Planning';
import Report from '../pages/Report';
import New from '../components/New';
import ButtonNew from '../components/ButtonNew';

const Tab = createBottomTabNavigator();

function AppTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          display: "flex",
          backgroundColor: '#051037',
          borderTopColor: 'transparent',
        },
      }}
      tabBarOptions={{
        activeTintColor: '#E3B81D',
        inactiveTintColor: '#FFF',
        labelStyle: {
          fontSize: 12,
        },
        tabStyle: {
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen 
        name="Inicio" 
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
     
      <Tab.Screen 
        name="Transactions" 
        component={Transactions} 
        options={{
          tabBarLabel: 'Transações',
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />

<Tab.Screen 
  name="Novo" 
  component={New} 
  options={{
    tabBarLabel: '',
    tabBarIcon: ({ focused, size, color }) => (
      <ButtonNew size={size} color={color} focused={focused} />
    ),
  }}
/>
      
      <Tab.Screen 
        name="Planning" 
        component={Planning}
        options={{
          tabBarLabel: 'Planejamento',
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      
      <Tab.Screen 
        name="Report" 
        component={Report}
        options={{
          tabBarLabel: 'Relatório',
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppTabNavigator;