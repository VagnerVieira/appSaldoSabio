import styled from 'styled-components'

export const Background = styled.View`
   flex:1;
   background-color: #051037;
`;

export const Container = styled.KeyboardAvoidingView`
   flex:1;
   align-items: center;
   justify-content: center;

`;

export const AreaInput = styled.View`
  flex-direction:row;
`;

export const Input = styled.TextInput`
 background-color: #F0F0F0;
 width: 90%;
 font-size:14px;
 padding:10px;
 border-radius: 30px;
 color: #051037;
 margin-bottom:15px;
 font-weight: 600;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height:45px;
  border-radius:8px;
  background-color:#F9CD2F;
  margin-top:20px;
  align-items: center;
  justify-content:center;
  font-weight: 600;
`;
export const SubmitText = styled.Text`
  font-size:20px;
  color:#FFF;
`;
export const Link = styled.TouchableOpacity`
  margin-top: 20px;
  margin-bottom:10px;

`;
export const LinkText = styled.Text`
 font-size:14px;
 color: #00CF7F;
 font-weight: 600;
`;

export const LinkTextPassWord = styled.Text`
 font-size:14px;
 color: #FFF;
 margin-left:220px;
 margin-top: -15px;
 margin-bottom: -15px;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #FFF;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const TextWelcome = styled.Text`
  font-size: 24px;
  color: #F9CD2F;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom:20px;
  font-weight: 600;
`;

export const TextDescription = styled.Text`
  font-size: 14px;
  color: #F9CD2F;
  margin-top: 10px;
  margin-bottom:5px;
  margin-left:40px;
  align-self: flex-start;

`;
export const TextTitle = styled.Text`
  font-size: 20px;
  color: #F9CD2F;
  margin-top: 5px;
  margin-bottom:40px;
  font-weight: 600;
`;
