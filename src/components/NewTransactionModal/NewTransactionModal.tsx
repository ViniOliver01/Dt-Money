import { Content, Overlay, CloseButton, TransactionTypeButton, TransactionType } from './NewTransactionModal.style';
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

export function NewTransactionModal(){

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>

        <Dialog.Title>Nova Transação</Dialog.Title> 

        <CloseButton>
          <X />
        </CloseButton>
        
        <form action="">
          <input type="text" placeholder='Descrição' required/>
          <input type="number" placeholder='Preço' required/>
          <input type="text" placeholder='Categoria' required/>

          <TransactionType>
            <TransactionTypeButton variant='income' value='income'>
              <ArrowCircleUp />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton variant='outcome' value='outcome'>
              <ArrowCircleDown />
              Saida
            </TransactionTypeButton>
          </TransactionType>


          <button type="submit">Cadastrar</button>
        </form>


        

      </Content>

        
    </Dialog.Portal>
  );
}