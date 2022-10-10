import { HeaderContainer, HeaderContent, NewTransactionButton } from './Header.style';
import { NewTransactionModal } from '../NewTransactionModal/NewTransactionModal';
import logoImg from '../../assets/Logo.svg';

import * as Dialog from '@radix-ui/react-dialog';


export function Header(){

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
      
    </HeaderContainer>
  );
}