import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import {AntDesign, Entypo } from '@expo/vector-icons';

export default function ButtonNew({ size, color, focused }) {
  return (
    <View style={[styles.container, { backgroundColor: focused ? '#FF6A46' : '#F9CD2F' }]}>
      <Entypo name="plus" size={size} color={focused ? '#F9CD2F' : '#051037'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F9CD2F',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
});