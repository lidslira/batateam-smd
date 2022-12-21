import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer';
import Header  from '../../components/header';
import optativas from '../../constants/optativas';
import * as S from './styles';
import bg from '../../assets/faq-bg.png';
import upBottom from '../../assets/up-bottom.png';

function Optativas(): ReactElement {
  const navigate = useNavigate();
  const scrollTo = () => {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }

  return (
    <div>
      <Header/>
        <>
          <div style={{ position: 'fixed', bottom: 0, left: 0, zIndex: -1, objectFit: 'fill'}}>
            <img src={bg} alt="" loading="eager" height={`${window.screen.height}`} width={`${window.screen.width}`}/>
          </div>
        </>

        <S.Container>
        <div onClick={() => scrollTo()} style={{ cursor: 'pointer', position: 'fixed', right: 50, bottom: 30, zIndex: 1 }}>
            <img src={upBottom} alt="" loading="eager" height='80' width='80'/>
        </div>
          <S.TextContainer>
            <h1>Disciplinas Optativas</h1>
            <p>A partir do quinto semestre o aluno é livre pra escolher seguir disciplinas das trilhas de seu interesse. Aqui estão listadas todas as optativas que fazem parte de alguma trilha.</p>
          </S.TextContainer>
        <div>
        <S.AreaSection>
          <S.SemesterContainer>
            <h2>{optativas[0].title}</h2>
              {optativas[0].disciplinas.map((element, index) => { 
                  return <S.Button index={index} key={index}>{element}</S.Button>
              })}  
          </S.SemesterContainer>
        
          <S.SemesterContainer>
            <h2>{optativas[1].title}</h2>
              {optativas[1].disciplinas.map((element, index) => { 
                  return <S.Button index={index} key={index}>{element}</S.Button>
              })}  
          </S.SemesterContainer>
        
          <S.SemesterContainer>
            <h2>{optativas[2].title}</h2>
              {optativas[2].disciplinas.map((element, index) => { 
                  return <S.Button index={index} key={index}>{element}</S.Button>
              })}  
          </S.SemesterContainer>

          <S.SemesterContainer>
            <h2>{optativas[3].title}</h2>
              {optativas[3].disciplinas.map((element, index) => { 
                  return <S.Button index={index} key={index}>{element}</S.Button>
              })}
          </S.SemesterContainer>
        
        <S.ButtonGoBack onClick={() => navigate(`/home`)}> Voltar </S.ButtonGoBack>
        </S.AreaSection>
        </div>
        </S.Container>
      <Footer/>
    </div>
  );
}

export default Optativas;