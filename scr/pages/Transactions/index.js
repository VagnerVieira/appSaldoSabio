import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import { Background, ListBalance, Area, Title, List } from './styles';
import api from '../../services/api';
import { format } from 'date-fns';
import { useIsFocused } from '@react-navigation/native';
import BalanceItemTransactions from '../../components/BalanceItemTransactions';
import HistoricoList from '../../components/HistoricoList';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Transactions() {
  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState([]);
  const [movements, setMovements] = useState([]);
  const [dateMovements, setDateMovements] = useState(new Date());

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      console.log('Componente Transactions renderizado');
      try {
        let dateFormated = format(dateMovements, 'dd/MM/yyyy');

        const receives = await api.get('/receives', {
          params: {
            date: dateFormated,
          },
        });

        const balance = await api.get('/balance', {
          params: {
            date: dateFormated,
          },
        });

        if (isActive) {
          setMovements(receives.data);
          setListBalance(balance.data);
          console.log('Receives Data:', receives.data);
          console.log('Balance Data:', balance.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getMovements();

    return () => (isActive = false);
  }, [isFocused, dateMovements]);

  return (
    <Background>
      <Header title="Transações" />

      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.tag}
        renderItem={({ item }) => <BalanceItemTransactions data={item} />}
      />

      <Area>
        <TouchableOpacity>
         
        </TouchableOpacity>
        <Title></Title>
      </Area>

      <List
        data={movements}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HistoricoList data={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </Background>
  );
}