import React from 'react';
import { Platform } from 'react-native';

import { Background,
         Container,
         AreaInput,
         Input,
         SubmitButton,
         SubmitText,
         Link,
         LinkText

     } from './styles';

import { useNavigation } from '@react-navigation/native';

export default function SignIn(){
  const navigation = useNavigation();
  return(
    <Background>
      <Container
        behavior = {Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <AreaInput>
        <Input 
          placeholder= "Insira o seu endereço de email"
        />
        </AreaInput>
        <AreaInput>
        <Input 
          placeholder= "Coloque a sua senha"
        />
        </AreaInput>

        <SubmitButton activeOpacity = {0.8}>
          <SubmitText>Entrar</SubmitText>
        </SubmitButton>

        <Link onPress = {() => navigation.navigate('SignUp')}>
         <LinkText>Cadastre-se</LinkText>
        </Link>
      </Container>
    </Background>
  )
}