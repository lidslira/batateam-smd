import { ReactElement } from 'react';
import TrailsComponent from '../../../components/trails';
import Footer from '../../../components/footer';
import Header  from '../../../components/header';
import * as S from './styles';

function Audiovisual(): ReactElement {
  return (
    <S.ContainerDiv>
      <Header/>
        <S.Container>

          <S.AreaSection >
            <TrailsComponent 
              title={'Animação e Audiovisual'}
              navigateToCourses={'disciplinas-audiovisual'}
              subtitle={'Objetivo'}
              description={'Capacitar os estudantes em diferentes meios de comunicação, usando recursos multimidiáticos na produção de recursos práticos, sendo eles formas de expressão e ferramentas de linguagem.'}
            />
          </S.AreaSection>

          <S.AreaSection >
            <TrailsComponent
              hasSpecialBg
              isImageLeft
              description={'Busca explorar os recursos tecnológicos, as ferramentas e os conhecimentos operacionais aplicados às áreas de produção artística, cultural e multimídia, para uso nas produções estudantis.'}
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
              description={'A pessoa que faz essa trilha tem interesse em exercer atividades de animador, artista 3D, ilustrador, roteirista, storyboard artist, concept artist, além da possibilidade de trabalhar na produção, gerenciamento e distribuição de produtos audiovisuais, na direção, direção de fotografia, captação de som, montagem ou como colorista.'}
            />
          </S.AreaSection>

          <S.AreaSection >
            <TrailsComponent
              description={'Sendo assim, poderá encontrar oportunidades em estúdios de animação, agências de publicidade, estúdios de jogos, emissoras de TV e rádio, além da possibilidade de trabalhar como freelancer. Isso ainda pode ser estendido para outros mercados, à medida que a prototipagem 3D, por exemplo, é usada para desenvolvimento de produtos em geral, como no mercado de construção civil e da moda.'}
            />
          </S.AreaSection>
          
        </S.Container>
      <Footer/>
    </S.ContainerDiv>
  );
}

export default Audiovisual;