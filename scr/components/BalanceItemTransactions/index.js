import React, { useMemo } from 'react';
import { Container, Label, Balance, ButtonContainer } from './styles';

export default function BalanceItemTransactions({ data }) {
  
  const labelName = useMemo(() => {
    if (data.tag === 'saldo') {
      return {
        label: 'Saldo atual',
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
    <Container bg={labelName.color}>
      {data.tag === 'saldo' ? (
        <>
          <Label>{labelName.label}</Label>
          <Balance>R$ {data.saldo}</Balance>
        </>
      ) : (
        <ButtonContainer>
          <Label>{labelName.label}</Label>
          <Balance>R$ {data.saldo}</Balance>
        </ButtonContainer>
      )}
    </Container>
  );
}