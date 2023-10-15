import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons';

import Home from '../pages/Home';
import Transactions from '../pages/Transactions'
import Planning from '../pages/Planning'
import Report from '../pages/Report'

const Tab = createBottomTabNavigator();

function AppTabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown:false,

    }}
    >
      <Tab.Screen 
        name="Inicio" 
        component={Home}
        options={{
          tabBarIcon: () => <Feather name="home"/>,
          tabBarLabel: 'Home'
        }

        }
         />
        
     
      <Tab.Screen 
        name="Transactions" 
        component={Transactions} 
         options={{
          tabBarIcon: () => <Feather name="home"/>,
          tabBarLabel: 'Transações'
        }
      }
        />
      
      <Tab.Screen 
        name="Planning" 
        component={Planning}
        options={{
          tabBarIcon: () => <Feather name="home"/>,
          tabBarLabel: 'Planejamento'
        }
      } />
      
      <Tab.Screen 
        name="Report" 
        component={Report}
        options={{
          tabBarIcon: () => <Feather name="home"/>,
          tabBarLabel: 'Relatório'
        }
      } />

     
    </Tab.Navigator>
  );
}

export default AppTabNavigator;