import { ReactElement } from 'react';
import TrailsComponent from '../../../components/trails';
import Footer from '../../../components/footer';
import Header  from '../../../components/header';
import * as S from './styles';

function Design(): ReactElement {
  return (
    <S.ContainerDiv>
      <Header/>
        <S.Container>

          <S.AreaSection >
            <TrailsComponent 
              title={'Design Digital Interativo'}
              navigateToCourses={'disciplinas-design'}
              subtitle={'Objetivo'}
              description={'Aprofundar os conhecimentos sobre as bases teóricas e práticas do design e do desenvolvimento de tecnologias digitais interativos adquiridos na formação básica inicial do curso.'}
            />
          </S.AreaSection>

          <S.AreaSection >
            <TrailsComponent
              hasSpecialBg
              isImageLeft
              description={'Busca estimular uma visão crítica do processo de design e de suas funções (prática, estética e simbólica). Abrange a interatividade no design digital, e questões relativas a experiências do usuário.'}
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
              description={'A pessoa que faz essa trilha tem interesse em exercer atividades de programação visual nos meios digitais, como sites, aplicativos, e-books, jogos ou interfaces digitais inseridas em produtos eletroeletrônicos. Também pode atuar como social media e na criação de animação/motion design, identidade visual, peças gráficas, arquitetura de informação, UX Design, direção de arte, etc.'}
            />
          </S.AreaSection>

          <S.AreaSection >
            <TrailsComponent
              description={'Sendo assim, poderá encontrar oportunidades em agências e produtoras de mídia digital interativa; estúdios de vídeo, cinema e animação; emissoras de televisão; empresas de desenvolvimento de games; empresas multinacionais; departamento de marketing digital e internet; departamentos de comunicação e criação; escritórios de design e de comunicação visual; agências de comunicação e publicidade, entre outras.'}
            />
          </S.AreaSection>
          
        </S.Container>
      <Footer/>
    </S.ContainerDiv>
  );
}

export default Design;