import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

function Welcome(): ReactElement {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Image />
      <S.Sidebar>
        <S.Section>
        <h1>Bem vindo(a)!</h1>
        <p>Nesse site você vai ser capaz de encontrar mais informações sobre as trilhas e das disciplinas que as compõem - e se ainda estiver em dúvida sobre qual vai seguir, não se preocupe! Temos um teste de afinidade pra te ajudar nisso.</p>
      <S.ButtonContainer>
        <S.Button onClick={() => navigate('/home')}>começar</S.Button>
      </S.ButtonContainer>
      </S.Section>
      </S.Sidebar>
    </S.Container>
  );
}

export default Welcome;