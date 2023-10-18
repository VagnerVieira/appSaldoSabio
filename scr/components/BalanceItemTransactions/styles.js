import styled from "styled-components/native";

export const Container = styled.View`
 background-color: ${props => `#${props.bg}`};
  margin-left: 14px;
  margin-top:14px;
  margin-bottom:14px;
  margin-right: 14px;
  border-radius:4px;
  justify-content: center;
  align-items: flex-start;
  width: 200px;
  height:80px;
  padding-left: 14px;

`;

export const Label = styled.Text`
  color: #FFF;
  font-size: 14px;
  margin-top:-10px;
  font-weight: bold;
  
`;

export const Balance = styled.Text`
  margin-top: 5px;
  font-size: 30px;
  color: #FFF;
  
`;
export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 14px;
`;