import React, { useContext, useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native';

import { 
  Background, 
  Container, 
  AreaInput, 
  Input, 
  SubmitButton, 
  SubmitText,
  Text,
  TextDescription,
  TextWelcome,


} from '../SignIn/styles';

import { AuthContext } from '../../contexts/auth';

export default function SignUp(){

  const { signUp, loadingAuth } = useContext(AuthContext)
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp(){
    if(nome === ''|| email === '' || password === '') return;
    
    signUp(email, password, nome);
  }
  return(
    
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >

         <TextWelcome>Criar uma conta</TextWelcome>
         <Text>Seja bem-vindo(a) à nossa comunidade! 
          Aqui, você está prestes a começar uma jornada de controle financeiro, crescimento pessoal e prosperidade.</Text>

         <TextDescription>Nome Completo</TextDescription>
        <AreaInput>
          <Input
            placeholder="Insira o seu nome completo"
            value={nome}
            onChangeText={ (text) => setNome(text) }
          />
        </AreaInput>
        <TextDescription>E-mail</TextDescription>
        <AreaInput>
          <Input
            placeholder="Insira o seu endereço de email"
            value={email}
            onChangeText={ (text) => setEmail(text) }
          />
        </AreaInput>

        <TextDescription>Senha</TextDescription>
        <AreaInput>
          <Input
            placeholder="Crie uma senha"
            value={password}
            onChangeText={ (text) => setPassword(text) }
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton  onPress={handleSignUp}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF"/>
            ) : (
              <SubmitText>Cadastrar</SubmitText>

            )
          }

        </SubmitButton>

      </Container>

    </Background>
   
  )
}