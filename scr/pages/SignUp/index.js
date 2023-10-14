import React, { useContext, useState } from 'react';
import { Platform } from 'react-native';

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
  TextTitle

} from '../SignIn/styles';

import { AuthContext } from '../../contexts/auth';

export default function SignUp(){

  const { signUp } = useContext(AuthContext)
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp(){
    signUp(email, password, nome);
  }
  return(
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
         <TextTitle>Cadastro</TextTitle>
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
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

      </Container>

    </Background>
  )
}