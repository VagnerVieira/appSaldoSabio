import React from 'react';
import {
  Container, 
  TipoText,
  Tipo,
  IconView,
  ValorText
} from './styles';

import Icon from 'react-native-vector-icons/Feather'

export default function HistoricoList({ data }) {
  if (!data) {
    return null; 
  }

  const { type, value } = data;

  return (
    <Container>
      <Tipo>
        <IconView tipo={type}>
          <Icon
            name={type === 'despesa' ? 'arrow-down' : 'arrow-up'}
            size={20}
            color="#FFF"
          />
          <TipoText>{type}</TipoText>
        </IconView>
      </Tipo>

      <ValorText>
        R$ {value}
      </ValorText>
    </Container>
  );
}