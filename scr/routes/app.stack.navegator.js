import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FabButton from '../components/ButtonNew/FabButton';

import NewRevenue from '../pages/NewRevenue';
import NewExpenditure from '../pages/NewExpenditure';
import NewExpenditureCreditCard from '../pages/NewExpenditureCreditCard';
import NewTransfer from '../pages/NewTransfer';

const Stack = createNativeStackNavigator();

function AppStackNavegator() {
  return (
    <Stack.Navigator screenListeners={{ title: ''}}>
      
      <Stack.Screen 
      name="FabButtonScreen" 
      component={FabButton} 
      />
      <Stack.Screen 
      name="NewRevenue" 
      component={NewRevenue} />

      <Stack.Screen 
      name="NewExpenditure" 
      component={NewExpenditure} 
      />
      <Stack.Screen 
      name="NewExpenditureCreditCard" 
      component={NewExpenditureCreditCard}
       />
      <Stack.Screen 
      name="NewTransfer" 
      component={NewTransfer} />
    </Stack.Navigator>
  );
}


export default AppStackNavegator;

