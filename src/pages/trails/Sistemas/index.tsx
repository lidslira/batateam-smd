import { ReactElement } from 'react';
import TrailsComponent from '../../../components/trails';
import Footer from '../../../components/footer';
import Header  from '../../../components/header';
import * as S from './styles';
import Sis1 from '../../../assets/dev.png';
import Sis3 from '../../../assets/debug.png';
import Sis4 from '../../../assets/trilha-jog-3.png';
import upBottom from '../../../assets/up-bottom.png';


function Sistemas(): ReactElement {

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
          <div onClick={() => scrollTo()} style={{ cursor: 'pointer', position: 'fixed', right: 50, bottom: 30, zIndex: 1 }}>
            <img src={upBottom} alt="" loading="eager" height='80' width='80'/>
          </div>
          <S.AreaSection >
            <TrailsComponent
              image={Sis1}
              title={'Sistemas Multimídias'}
              navigateToCourses={'optativas'}
              subtitle={'Objetivo'}
              description={'Capacitar os alunos a analisar requisitos, projetar, implementar, testar, implantar, avaliar e manter sistemas computacionais para que atendam as necessidades do público alvo específico.'}
              description2={'Busca desenvolver nos discentes a capacidade de representar as informações nestes sistemas de forma múltipla, como por meio de imagens, vídeos e linguagem sonora, sejam elas integradas ou isoladas em mídias interativas.'}
            />
          </S.AreaSection>

          <S.AreaSection >
            <TrailsComponent
              image={Sis3}
              subtitle={'Aborda:'}
              isImageLeft
              hasSpecialBg
              hasList
            />
          </S.AreaSection>

          <S.AreaSection >
            <TrailsComponent
              image={Sis4}
              navigateBack
              subtitle={'Mercado de Trabalho: '}
              description={'A pessoa que faz essa trilha tem interesse em exercer atividades de programação web, análise de projetos embarcados, programação para dispositivos móveis, análise de sistemas distribuídos e desenvolvimento de aplicações.'}
              description2={'Sendo assim, poderá encontrar oportunidades em desenvolvimento web no planejamento, teste e manutenção em sites institucionais, blogs, lojas virtuais, sistemas web e diversos tipos de aplicações que rodam em plataformas web; Desenvolvimentos de aplicações multimídia; Análise e projeto de sistemas multimídia.'}
            />
          </S.AreaSection>
        </S.Container>
      <Footer/>
    </S.ContainerDiv>
  );
}

export default Sistemas;