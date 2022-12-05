import { ReactElement } from 'react';
import Footer from '../../components/footer';
import Header  from '../../components/header';
import optativas from '../../constants/optativas';
import * as S from './styles';

function Optativas(): ReactElement {
  return (
    <div>
      <Header/>
        <S.Container>
          <h1>Disciplinas Optativas</h1>
          <p>A partir do quinto semestre o aluno é livre pra escolher seguir disciplinas das trilhas de seu interesse. Aqui estão listadas todas as optativas que fazem parte de alguma trilha.</p>
          <div>
        <S.AreaSection hasSpecialBg>
          <S.SemesterContainer>
            <h2>{optativas[0].title}</h2>
              {optativas[0].disciplinas.map((element, index) => { 
                  return <S.Button key={index}>{element}</S.Button>
              })}  
          </S.SemesterContainer>
        </S.AreaSection>

        <S.AreaSection>
          <S.SemesterContainer>
            <h2>{optativas[1].title}</h2>
              {optativas[1].disciplinas.map((element, index) => { 
                  return <S.Button key={index}>{element}</S.Button>
              })}  
          </S.SemesterContainer>
        </S.AreaSection>

        <S.AreaSection hasSpecialBg>
          <S.SemesterContainer>
            <h2>{optativas[2].title}</h2>
              {optativas[2].disciplinas.map((element, index) => { 
                  return <S.Button key={index}>{element}</S.Button>
              })}  
          </S.SemesterContainer>
        </S.AreaSection>

        <S.AreaSection>
          <S.SemesterContainer>
            <h2>{optativas[3].title}</h2>
              {optativas[3].disciplinas.map((element, index) => { 
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

export default Optativas;