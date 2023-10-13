import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './scr/routes/index';



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#F0F4FF' barStyle= "dark-content"/>
      <Routes/>
    </NavigationContainer>
  );
}


