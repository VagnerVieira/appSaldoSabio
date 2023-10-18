import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #191B1E;
  border-radius: 4px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 14px;
  padding: 12px;
`;

export const Tipo = styled.View`
  flex-direction: row;
`;

export const TipoText = styled.Text`
color: #FFF;
font-size: 16px;
font-style: italic;
`;

export const IconView = styled.View`
  flex-direction: row;
  background-color: ${props => props.tipo === 'despesa' ? '#c62c36' : '#049301'};
  padding-bottom: 4px;
  padding-top: 4px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  margin-bottom: 2px;
`;

export const ValorText = styled.Text`
  color: ${props => props.tipo === 'despesa' ? '#c62c36' : '#049301'};
  font-size: 22px;
  margin-right:20px;
  margin-top:-2px;
  align-self: flex-end;
  
`;
export const Text = styled.Text`
  color: #F9CD2F;
  font-size: 18px;
  margin-top:-20px;
  margin-left:8px;
`;

