import { useContext, useEffect, useState } from 'react';
import { SearchForm } from '../../components/SearchFrom/SearchForm';
import { Summary } from '../../components/Summary/Summary';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { Header } from './../../components/Header/Header';

import { PriceHighLight, TransactionsContainer, TransactionsTable } from './Transactions.style';

interface Transaction {
  id: number;
  descripton: string;
  type: "income" | "outcome";
  category: string;
  value: number;
  createdAt: string;
}


export function Transactions(){
  const {transactions} = useContext(TransactionsContext)
  
  return (
    <div>
      <Header />
      <Summary/>
      
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction =>{
              return (
                <tr key={transaction.id}>
                <td width="50%">{transaction.descripton}</td>
                <td>
                  <PriceHighLight variant={transaction.type}>
                    {transaction.value}
                  </PriceHighLight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}