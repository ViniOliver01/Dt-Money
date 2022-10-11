import { useContext, useEffect, useState } from 'react';
import { SearchForm } from '../../components/SearchFrom/SearchForm';
import { Summary } from '../../components/Summary/Summary';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { priceFormatter } from '../../utils/formatter';
import { Header } from './../../components/Header/Header';

import { PriceHighLight, TransactionsContainer, TransactionsTable } from './Transactions.style';
import { dateFormatter } from './../../utils/formatter';

interface Transaction {
  id: number;
  descripton: string;
  type: "income" | "outcome";
  category: string;
  price: number;
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
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighLight variant={transaction.type}>
                    {transaction.type == 'outcome' ? 
                      priceFormatter.format(transaction.price*-1) : 
                      priceFormatter.format(transaction.price)}
                  </PriceHighLight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}