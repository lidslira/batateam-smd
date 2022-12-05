import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer';
import Header  from '../../components/header';
import optativas from '../../constants/optativas';
import * as S from './styles';

function Home(): ReactElement {
  const navigate = useNavigate();
  return (
    <div>
      <Header/>
        <S.Container>
          <h1>Disciplinas Optativas</h1>
          <p>A partir do quinto semestre o aluno é livre pra escolher seguir disciplinas das trilhas de seu interesse. Aqui estão listadas todas as optativas que fazem parte de alguma trilha.</p>
        
        <S.AreaSection hasSpecialBg>
          <h2>{optativas[0].title}</h2>
            {optativas[0].optativas.map((element, index) => { 
                return <S.Button key={index}>{element}</S.Button>
            })}  
        </S.AreaSection>

        <S.AreaSection>
          <h2>{optativas[1].title}</h2>
            {optativas[1].optativas.map((element, index) => { 
                return <S.Button key={index}>{element}</S.Button>
            })}  
        </S.AreaSection>

        <S.AreaSection hasSpecialBg>
          <h2>{optativas[2].title}</h2>
            {optativas[2].optativas.map((element, index) => { 
                return <S.Button key={index}>{element}</S.Button>
            })}  
        </S.AreaSection>

        <S.AreaSection>
          <h2>{optativas[3].title}</h2>
            {optativas[3].optativas.map((element, index) => { 
                return <S.Button key={index}>{element}</S.Button>
            })}  
        </S.AreaSection>

        </S.Container>
      <Footer/>
    </div>
  );
}

export default Home;