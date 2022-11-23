import { ReactElement } from 'react';
import { PreInitialProps } from './types';
import * as S from './styles';

function PreInitial(props: PreInitialProps): ReactElement {
  return (
    <S.Container>
      <S.Content>
      <p>Olá!</p>
      <S.Box>
      <p>Você conhece as trilhas do SMD?</p>
        <button type="submit" className="button"> Sim </button> 
        <button type="submit" className="button"> Não </button> 
      </S.Box>
      <S.ButtonContainer>
        <button type="submit" className="skip">Pular</button>
      </S.ButtonContainer>
      </S.Content>
    </S.Container>
  );
}

export default PreInitial;