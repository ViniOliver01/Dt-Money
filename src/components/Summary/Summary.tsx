import { SummaryCard, SummaryContainer } from './Summary.style';

import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { useContext, useEffect, useState } from 'react';
import { priceFormatter } from '../../utils/formatter';

export function Summary(){
  const {transactions} = useContext(TransactionsContext);
  let sumIncome=0, sumOutcome=0;
  let sumTotal;
  

  transactions.map(item=>{
    item.type === 'income' ? sumIncome+= item.value : sumOutcome+= item.value;;
  })
  sumTotal = sumIncome - sumOutcome;

  const summary = transactions.reduce(
    (acc, transaction) => {
      if(transaction.type === 'income'){
        acc.income += transaction.value;
        acc.total += transaction.value;
      }else{
        acc.outcome += transaction.value;
        acc.total -= transaction.value;
      }
      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0
    }
  )
  

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68"/>
        </header>
        
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff"/>
        </header>
        
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>



    </SummaryContainer>
  );
}