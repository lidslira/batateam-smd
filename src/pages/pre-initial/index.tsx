import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

function PreInitial(): ReactElement {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Section>
        <h1>Olá!</h1>
        <h2>Você conhece as trilhas do SMD?</h2>
          <button type="submit" className="button" onClick={() => navigate('/welcome')}> Sim </button> 
          <button type="submit" className="button" onClick={() => navigate('/explanation')}> Não </button>
        <S.Skip>
          <button type="submit" className="skip" onClick={() => navigate('/home')}>Pular</button>
        </S.Skip>
      </S.Section>
    </S.Container>
  );
}

export default PreInitial;