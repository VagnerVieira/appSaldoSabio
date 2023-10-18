
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
      <StatusBar style="light" backgroundColor='#051037' barStyle="light-content"/>
      <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}


