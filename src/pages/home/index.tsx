import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AreasComponent from '../../components/areas';
import Footer from '../../components/footer';
import Header  from '../../components/header';
import homeAreas  from '../../constants/homeAreas';
import disciplinas from '../../constants/disciplinas';
import * as S from './styles';
import Placas from '../../assets/placasInicial.png';
import Survey from '../../assets/survey-inicio.png';
import upBottom from '../../assets/up-bottom.png';


function Home(): ReactElement {
  const navigate = useNavigate();
  const animacao: string[] = disciplinas[0].list;
  const design: string[] = disciplinas[1].list;
  const jogos: string[] = disciplinas[2].list;
  const sistemas: string[] = disciplinas[3].list;

  const scrollTo = () => {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }

  return (
    <S.ContainerDiv>
      <Header/>
        <>
          {/* <div style={{ position: 'fixed', bottom: 0, left: 0, zIndex: 0, objectFit: 'fill'}}>
            <img src={vector1} alt="" loading="eager" height='850' width='1500'/>
          </div> */}
          <div onClick={() => scrollTo()} style={{ cursor: 'pointer', position: 'fixed', right: 50, bottom: 30, zIndex: 1 }}>
            <img src={upBottom} alt="" loading="eager" height='80' width='80'/>
          </div>

          {/* <div style={{ position: 'fixed', top: -50, zIndex: -1 }}>
            <img src={vector4} alt="" loading="eager" />
          </div> */}
        </>
        <S.Container>


          <S.AreaSection id="trilhas" >
            <AreasComponent
              image={Placas}
              title={homeAreas[0].title}
              description={homeAreas[0].description}
              children= {
                <>
                <S.Button onClick={() => navigate('/audiovisual', {state: {disciplinasEscolhidas: animacao}})}>Animação e Audiovisual</S.Button>
                <S.Button onClick={() => navigate('/design', {state: {disciplinasEscolhidas: design}})}>Design Digital Interativo</S.Button>
                <S.Button onClick={() => navigate('/jogos', {state: {disciplinasEscolhidas: jogos}})}>Jogos Digitais</S.Button>
                <S.Button onClick={() => navigate('/sistemas', {state: {disciplinasEscolhidas: sistemas}})}>Sistemas Multimídias</S.Button>
                </>
              }/>
          </S.AreaSection>

          <S.AreaSection id="disciplinas" >
            <AreasComponent
              hasSpecialBg
              title={homeAreas[1].title}
              description={homeAreas[1].description}
              children= {
                <S.ButtonContainer>
                <S.ButtonDisciplinas onClick={() => navigate('/obrigatórias')}>
                  <h2>Obrigatórias</h2>
                  <p>Juntam conhecimentos mais gerais do curso</p>
                </S.ButtonDisciplinas>
                <S.ButtonDisciplinas onClick={() => navigate('/eletivas')}>
                <h2>Eletivas</h2>
                  <p>São base para a especialização das trilhas</p> 
                </S.ButtonDisciplinas>
                <S.ButtonDisciplinas onClick={() => navigate('/optativas')}>
                  <h2>Optativas</h2>
                  <p>Responsáveis por compor as trilhas</p></S.ButtonDisciplinas>
                </S.ButtonContainer>
              }/>
          </S.AreaSection>

          <S.AreaSection id="teste-afinidade" >
            <AreasComponent
              image={Survey}
              title={homeAreas[2].title}
              subtitle={'Tempo de duração: 15 min'}
              description={homeAreas[2].description}
              children= {
                <>
                <S.Button onClick={() => navigate('/survey-questoes')}>Acessar</S.Button>
                </>
              }/>
          </S.AreaSection>

          <S.AreaSection id="faq" >
            <AreasComponent
              hasSpecialBg
              title={homeAreas[3].title}
              description={homeAreas[3].description}
              children= {
                <>
                <S.Button onClick={() => navigate('/help')}>Acessar</S.Button>
                </>
              }/>
          </S.AreaSection>
          
        </S.Container>
      <Footer/>
    </S.ContainerDiv>
  );
}

export default Home;