import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './scr/routes/index';
import AuthProvider from './scr/contexts/auth';



export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
      <StatusBar backgroundColor='#F0F4FF' barStyle= "dark-content"/>
      <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}


