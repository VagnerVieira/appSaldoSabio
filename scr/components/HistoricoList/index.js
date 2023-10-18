import React from 'react';
import {
  Container, 
  TipoText,
  Tipo,
  IconView,
  ValorText, 
  Text
} from './styles';

import Icon from 'react-native-vector-icons/Feather'
import { TouchableWithoutFeedback, Alert} from 'react-native';

export default function HistoricoList({ data, deleteItem }) {
  if (!data) {
    return null; 
  }

  const { type, value,  description } = data;

  function handleDeleteItem(){
    Alert.alert(
      'Atenção',
      'Você tem certeza que deseja deletar esse registro?',
      [
        {
          text:'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Continuar',
          onPress: () => deleteItem(data.id)
        }
      ]
    )
  }


  return (
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
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
      <Text>
       {description}
      </Text>
    </Container>
    </TouchableWithoutFeedback>
  );
}