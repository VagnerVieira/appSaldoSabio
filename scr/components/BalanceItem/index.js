import React, { useMemo } from 'react';
import { Container, Label, Balance } from './styles';

export default function BalanceItem({ data }) {
  
  const labelName = useMemo(() => {
    if (data.tag === 'saldo') {
      return {
        label: 'Saldo Disponível',
        color: '314BCE',
      
      };
    } else if (data.tag === 'receita') {
      return {
        label: 'Receitas',
        color: '0A8354',
      };
    } else {
      return {
        label: 'Despesas',
        color: 'FF4D12',
      };
    }
  }, [data]);

  return (
    <Container bg={labelName.color} >
      <Label>{labelName.label}</Label>
      <Balance>R$ {data.saldo}</Balance>
    </Container>
  );
}