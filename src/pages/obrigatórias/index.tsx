import { ReactElement } from 'react';
import Footer from '../../components/footer';
import Header  from '../../components/header';
import obrigatórias from '../../constants/obrigatorias';
import * as S from './styles';

function Obrigatorias(): ReactElement {
  return (
    <div>
      <Header/>
        <S.Container>
          <h1>Disciplinas Obrigatórias</h1>
          <p>Juntam conhecimentos mais gerais do curso. Aqui estão listadas as obrigatórias até o quarto semestre.</p>
        <div>
        <S.AreaSection hasSpecialBg>
          <S.SemesterContainer>
            <h2>{obrigatórias[0].title}</h2>
              {obrigatórias[0].disciplinas.map((element, index) => { 
                  return <S.Button key={index}>{element}</S.Button>
              })}  
          </S.SemesterContainer>
        </S.AreaSection>

        <S.AreaSection>
          <S.SemesterContainer>
            <h2>{obrigatórias[1].title}</h2>
              {obrigatórias[1].disciplinas.map((element, index) => { 
                  return <S.Button key={index}>{element}</S.Button>
              })}  
          </S.SemesterContainer>
        </S.AreaSection>

        <S.AreaSection hasSpecialBg>
          <S.SemesterContainer>
            <h2>{obrigatórias[2].title}</h2>
              {obrigatórias[2].disciplinas.map((element, index) => { 
                  return <S.Button key={index}>{element}</S.Button>
              })}  
          </S.SemesterContainer>
        </S.AreaSection>

        <S.AreaSection>
          <S.SemesterContainer>
            <h2>{obrigatórias[3].title}</h2>
              {obrigatórias[3].disciplinas.map((element, index) => { 
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

export default Obrigatorias;