import React, { useContext } from 'react';
import {View, Text, Button} from 'react-native';

import { AuthContext } from '../../contexts/auth'

export default function Home(){
  const { signOut, user } = useContext(AuthContext);

  return(
    <View>
      <Text>TELA HOME</Text>
      <Text>Nome: {user.name}</Text>
      <Button
        title="Sair da conta"
        onPress={ () => signOut() }
      />
    </View>
  )
}