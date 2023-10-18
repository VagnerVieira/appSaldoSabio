import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';

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
import { AuthContext } from '../../contexts/auth'

export default function SignIn(){
  const navigation = useNavigation();
  const { signIn, loadingAuth } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleLogin(){
    signIn(email, password);
  }
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
          value={email}
          onChangeText={ (text) => setEmail(text) }
        />
        </AreaInput>
        <TextDescription>Senha</TextDescription>
        <AreaInput>
        <Input 
          placeholder= "Coloque a sua senha"
          value={password}
          onChangeText={ (text) => setPassword(text) }
        />
        </AreaInput>
        <Link>
         <LinkTextPassWord>Esqueci a senha</LinkTextPassWord>
        </Link>

        <SubmitButton  activeOpacity={0.8} onPress={handleLogin}>
        {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <SubmitText>Acessar</SubmitText>
            )
          }
        </SubmitButton>

        <Link onPress = {() => navigation.navigate('SignUp')}>
         <LinkText><Text>Não tenho uma conta? </Text> Cadastre-se</LinkText>
        </Link>
      </Container>
    </Background>
  )
}