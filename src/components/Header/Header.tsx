import { HeaderContainer, HeaderContent, NewTransactionButton } from './Header.style';

import logoImg from '../../assets/Logo.svg';

export function Header(){

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
      
    </HeaderContainer>
  );
}