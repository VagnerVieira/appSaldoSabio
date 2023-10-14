import React from 'react';
import { Platform } from 'react-native';

import { Background,
         Container,
         AreaInput,
         Input,
         SubmitButton,
         SubmitText,
         Link,
         LinkText,
         Text,
         TextDescription,
         TextWelcome,
         TextTitle,
         LinkTextPassWord 


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
        <TextTitle>Login</TextTitle>
        <TextWelcome>Olá, Bem-vindo ao Saldo Sábio! 👋</TextWelcome>
        <Text>Sua Rota para a Prosperidade Financeira</Text>

        <TextDescription>E-mail</TextDescription>
        <AreaInput>
        <Input 
          placeholder= "Insira o seu endereço de email"
        />
        </AreaInput>
        <TextDescription>Senha</TextDescription>
        <AreaInput>
        <Input 
          placeholder= "Coloque a sua senha"
        />
        </AreaInput>
        <Link>
         <LinkTextPassWord>Esqueci a senha</LinkTextPassWord>
        </Link>

        <SubmitButton activeOpacity = {0.8}>
          <SubmitText>Entrar</SubmitText>
        </SubmitButton>

        <Link onPress = {() => navigation.navigate('SignUp')}>
         <LinkText><Text>Não tenho uma conta? </Text> Cadastre-se</LinkText>
        </Link>
      </Container>
    </Background>
  )
}