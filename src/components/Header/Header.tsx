import { Container, Content, NewTransactionButton } from './Header.style';

import logoImg from '../../assets/Logo.svg';

export function Header(){

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </Content>
    </Container>
  );
}