import { ReactElement } from 'react';
import TrailsComponent from '../../../components/trails';
import Footer from '../../../components/footer';
import Header  from '../../../components/header';
import * as S from './styles';
import Jogos1 from '../../../assets/trilha-jog-1.png';
import Jogos2 from '../../../assets/trilha-jog-2.png';
import Jogos3 from '../../../assets/trilha-jog-3.png';
import Jogos4 from '../../../assets/trilha-jog-4.png';
import Jogos5 from '../../../assets/trilha-jog-5.png';

function Jogos(): ReactElement {
  return (
    <S.ContainerDiv>
      <Header/>
        <S.Container>

          <S.AreaSection >
            <TrailsComponent
              image={Jogos1}
              title={'Jogos Digitais'}
              navigateToCourses={'optativas'}
              subtitle={'Objetivo'}
              description={'Apresentar uma visão integrada do desenvolvimento de jogos (e aplicações interativas em geral), em uma perspectiva multirreferencial, contemplando computação, arte e cultura.'}
            />
          </S.AreaSection>

          <S.AreaSection >
            <TrailsComponent
              image={Jogos2}
              hasSpecialBg
              isImageLeft
              description={'Os componentes curriculares da trilha oferecem múltiplas perspectivas sobre a interatividade em multimídia digital, contemplando aspectos teóricos e práticos no desenvolvimento de jogos.'}
            />
          </S.AreaSection>

          <S.AreaSection >
            <TrailsComponent
              image={Jogos3}
              subtitle={'Aborda:'}
              hasList
            />
          </S.AreaSection>

          <S.AreaSection >
            <TrailsComponent
              image={Jogos4}
              hasSpecialBg
              isImageLeft
              subtitle={'Mercado de Trabalho: '}
              description={'A pessoa que faz essa trilha tem interesse em exercer atividades de game designer, programador, animador, designer de personagem, designer de cenário, level designer, tester e produtor executivo.'}
            />
          </S.AreaSection>

          <S.AreaSection >
            <TrailsComponent
              image={Jogos5}
              description={'Sendo assim, além das oportunidades de trabalhar em estúdios de jogos, outras áreas que requerem conhecimentos de quem faz essa trilha são as de jogos educacionais; simulações como as médicas, de operação de equipamentos complexos ou de negócios; jogos feitos para empresas, além de estúdios de animação para quem gosta da área de arte.'}
            />
          </S.AreaSection>
          
        </S.Container>
      <Footer/>
    </S.ContainerDiv>
  );
}

export default Jogos;