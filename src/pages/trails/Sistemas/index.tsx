import { ReactElement } from 'react';
import TrailsComponent from '../../../components/trails';
import Footer from '../../../components/footer';
import Header  from '../../../components/header';
import * as S from './styles';

function Sistemas(): ReactElement {
  return (
    <S.ContainerDiv>
      <Header/>
        <S.Container>

          <S.AreaSection >
            <TrailsComponent 
              title={'Sistemas Multimídias'}
              navigateToCourses={'disciplinas-sistemas'}
              subtitle={'Objetivo'}
              description={'Capacitar os alunos a analisar requisitos, projetar, implementar, testar, implantar, avaliar e manter sistemas computacionais para que atendam as necessidades do público alvo específico.'}
            />
          </S.AreaSection>

          <S.AreaSection >
            <TrailsComponent
              hasSpecialBg
              isImageLeft
              description={'Busca desenvolver nos discentes a capacidade de representar as informações nestes sistemas de forma múltipla, como por meio de imagens, vídeos e linguagem sonora, sejam elas integradas ou isoladas em mídias interativas.'}
            />
          </S.AreaSection>

          <S.AreaSection >
            <TrailsComponent
              subtitle={'Aborda:'}
              hasList
            />
          </S.AreaSection>

          <S.AreaSection >
            <TrailsComponent
              hasSpecialBg
              isImageLeft
              subtitle={'Mercado de Trabalho: '}
              description={'A pessoa que faz essa trilha tem interesse em exercer atividades de programação web, análise de projetos embarcados, programação para dispositivos móveis, análise de sistemas distribuídos e desenvolvimento de aplicações.'}
            />
          </S.AreaSection>

          <S.AreaSection >
            <TrailsComponent
              description={'Sendo assim, poderá encontrar oportunidades em desenvolvimento web no planejamento, teste e manutenção em sites institucionais, blogs, lojas virtuais, sistemas web e diversos tipos de aplicações que rodam em plataformas web; Desenvolvimentos de aplicações multimídia; Análise e projeto de sistemas multimídia.'}
            />
          </S.AreaSection>
          
        </S.Container>
      <Footer/>
    </S.ContainerDiv>
  );
}

export default Sistemas;