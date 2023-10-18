import React, { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign, Feather } from '@expo/vector-icons';  
import { AuthContext } from '../../scr/contexts/auth';
import CustomDrawer from '../components/CustomDrawer';
import AppStackNavigator from './app.stack.navegator';
import AppTabNavigator from './app.tab.navigator';

const AppDrawer = createDrawerNavigator();

function AppDrawerNavigator({ navigation }) {
  const { user, signOut } = useContext(AuthContext);

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <AppDrawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props}/>}
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
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
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

     
      <AppDrawer.Screen
        name="SignOut"
        options={{
          drawerLabel: 'Sair',
          drawerIcon: ({ color, size }) => (
            <AntDesign name="logout" size={size} color={color} />
          ),
        }}
      >
        {() => (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderTopWidth: 1,
              borderTopColor: '#ccc',
              padding: 10,
            }}
            onPress={handleSignOut}
          >
           
            <AntDesign name="logout" size={24} color="#FF0000" />
            <Text>Sair</Text>
          </TouchableOpacity>
        )}
      </AppDrawer.Screen>
    </AppDrawer.Navigator>
  );
}

export default AppDrawerNavigator;