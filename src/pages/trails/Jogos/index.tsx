import { ReactElement } from 'react';
import TrailsComponent from '../../../components/trails';
import Footer from '../../../components/footer';
import Header  from '../../../components/header';
import * as S from './styles';
import Jogos1 from '../../../assets/trilha-jog-1.png';
import Jogos4 from '../../../assets/trilha-jog-4.png';
import Jogos5 from '../../../assets/trilha-jog-5.png';
import upBottom from '../../../assets/up-bottom.png';
import bg from '../../../assets/faq-bg.png';

function Jogos(): ReactElement {

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
        <S.Container>
        <>
          <div style={{ position: 'fixed', bottom: 0, left: 0, zIndex: -1, objectFit: 'fill'}}>
            <img src={bg} alt="" loading="eager" height={`${window.screen.height}`} width={`${window.screen.width}`}/>
          </div>
        </>

          <div onClick={() => scrollTo()} style={{ cursor: 'pointer', position: 'fixed', right: 50, bottom: 30, zIndex: 1 }}>
            <img src={upBottom} alt="" loading="eager" height='80' width='80'/>
          </div>
          <S.AreaSection >
            <TrailsComponent
              image={Jogos1}
              title={'Jogos Digitais'}
              navigateToCourses={'optativas'}
              subtitle={'Objetivo'}
              description={'Apresentar uma visão integrada do desenvolvimento de jogos (e aplicações interativas em geral), em uma perspectiva multirreferencial, contemplando computação, arte e cultura.'}
              description2={'Os componentes curriculares da trilha oferecem múltiplas perspectivas sobre a interatividade em multimídia digital, contemplando aspectos teóricos e práticos no desenvolvimento de jogos.'}
            />
          </S.AreaSection>

          <S.AreaSection >
            <TrailsComponent
              image={Jogos4}
              subtitle={'Aborda:'}
              hasList
              isImageLeft
              hasSpecialBg
            />
          </S.AreaSection>

          <S.AreaSection >
            <TrailsComponent
              image={Jogos5}
              navigateBack
              subtitle={'Mercado de Trabalho: '}
              description={'A pessoa que faz essa trilha tem interesse em exercer atividades de game designer, programador, animador, designer de personagem, designer de cenário, level designer, tester e produtor executivo.'}
              description2={'Sendo assim, além das oportunidades de trabalhar em estúdios de jogos, outras áreas que requerem conhecimentos de quem faz essa trilha são as de jogos educacionais; simulações como as médicas, de operação de equipamentos complexos ou de negócios; jogos feitos para empresas, além de estúdios de animação para quem gosta da área de arte.'}
            />
          </S.AreaSection>
          
        </S.Container>
      <Footer/>
    </S.ContainerDiv>
  );
}

export default Jogos;