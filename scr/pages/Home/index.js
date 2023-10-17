import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import { Background, ListBalance } from './styles';
import api from '../../services/api';
import { format } from 'date-fns';

import { useIsFocused } from '@react-navigation/native';
import BalanceItem from '../../components/BalanceItem';

export default function Home() {
  const {signOut, user } = useContext(AuthContext);
  const isFocused = useIsFocused(); // garantir o foco na tela
  const [listBalance, setListBalance] = useState([]);
  const [dateMovements, setDateMovements] = useState(new Date()); //pegar a data de hoje

  useEffect(() => {
    console.log('Home component rendered');
    let isActive = true;

    async function getMovements() {
      let dateFormated = format(dateMovements, 'dd/MM/yyyy'); //formatando a data

      try {
        const balance = await api.get('/balance', {
          params: {
            date: dateFormated,
          },
        });

        if (isActive) {
          setListBalance(balance.data); // se está ativo passar o balance
          console.log('List Balance:', balance.data);
        }
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    }

    getMovements();

    return () => {
      isActive = false;
    };
  }, [isFocused]); // quando sair da tela é desmontado para não perder performace

  return (
    <Background>
      <Header title= {user.name} />
      
       <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={ item => item.tag }
        renderItem={ ({ item }) => ( <BalanceItem data={item} /> )}
      />

       <View> 
        <Button title ="Sair"
        onPress={() => signOut()}/>
      </View>
     </Background>
  );
}