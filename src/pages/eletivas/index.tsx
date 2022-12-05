import { ReactElement } from 'react';
import Footer from '../../components/footer';
import Header  from '../../components/header';
import eletivas from '../../constants/eletivas';
import * as S from './styles';

function Eletivas(): ReactElement {
  return (
    <div>
      <Header/>
        <S.Container>
          <h1>Disciplinas Eletivas</h1>
          <p>Se iniciam no quarto semestre e são base para a especialização das trilhas, se concentrando mais nas áreas de mídias ou sistemas.</p>
        <div>
        <S.AreaSection hasSpecialBg>
          <S.SemesterContainer>
            <h2>{eletivas[0].title}</h2>
              {eletivas[0].disciplinas.map((element, index) => { 
                  return <S.Button key={index}>{element}</S.Button>
              })}  
          </S.SemesterContainer>
        </S.AreaSection>

        <S.AreaSection>
          <S.SemesterContainer>
            <h2>{eletivas[1].title}</h2>
              {eletivas[1].disciplinas.map((element, index) => { 
                  return <S.Button key={index}>{element}</S.Button>
              })}  
          </S.SemesterContainer>
        </S.AreaSection>

        </div>
        </S.Container>
      <Footer/>
    </div>
  );
}

export default Eletivas;