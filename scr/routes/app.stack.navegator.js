import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import Category from '../pages/Category';


const Stack = createNativeStackNavigator();

function AppStackNavigator() {
  return (
    <Stack.Navigator screenOptions = {{ headerShown: false}}>
      <Stack.Screen
        name="Category"
        component={Category}
      />
    </Stack.Navigator>
  );
}

export default AppStackNavigator;