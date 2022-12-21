import { ReactElement } from 'react';
import TrailsComponent from '../../../components/trails';
import Footer from '../../../components/footer';
import Header  from '../../../components/header';
import * as S from './styles';
import Ani1 from '../../../assets/trilha-ani-1.png';
import Ani4 from '../../../assets/trilha-ani-4.png';
import Ani5 from '../../../assets/trilha-ani-5.png';
import upBottom from '../../../assets/up-bottom.png';
import bg from '../../../assets/faq-bg.png';


function Audiovisual(): ReactElement {

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
          <div style={{ position: 'fixed', bottom: 0, left: 0, zIndex: -1, objectFit: 'contain'}}>
            <img src={bg} alt="" loading="eager" height='850' width='1500'/>
          </div>
        </>
        <S.Container>
        <div onClick={() => scrollTo()} style={{ cursor: 'pointer', position: 'fixed', right: 50, bottom: 30, zIndex: 1 }}>
            <img src={upBottom} alt="" loading="eager" height='80' width='80'/>
        </div>
          <S.AreaSection >
            <TrailsComponent
              image={Ani1}
              title={'Animação e Audiovisual'}
              navigateToCourses={'optativas'}
              subtitle={'Objetivo'}
              description={'Possui o objetivo de capacitar os estudantes em diferentes meios de comunicação, usando recursos multimidiáticos na produção de recursos práticos, sendo eles formas de expressão e ferramentas de linguagem.'}
              description2={'Busca explorar os recursos tecnológicos, as ferramentas e os conhecimentos operacionais aplicados às áreas de produção artística, cultural e multimídia, para uso nas produções estudantis.'}
            />
          </S.AreaSection>

          <S.AreaSection >
            <TrailsComponent
              image={Ani4}
              subtitle={'Aborda:'}
              hasList
              hasSpecialBg
              isImageLeft
            />
          </S.AreaSection>

          <S.AreaSection >
            <TrailsComponent
              image={Ani5}
              navigateBack
              subtitle={'Mercado de Trabalho: '}
              description={'A pessoa que faz essa trilha tem interesse em exercer atividades de animador, artista 3D, ilustrador, roteirista, storyboard artist, concept artist, além da possibilidade de trabalhar na produção, gerenciamento e distribuição de produtos audiovisuais, na direção, direção de fotografia, captação de som, montagem ou como colorista.'}
              description2={'Sendo assim, poderá encontrar oportunidades em estúdios de animação, agências de publicidade, estúdios de jogos, emissoras de TV e rádio, além da possibilidade de trabalhar como freelancer. Isso ainda pode ser estendido para outros mercados, à medida que a prototipagem 3D, por exemplo, é usada para desenvolvimento de produtos em geral, como no mercado de construção civil e da moda.'}
            />
          </S.AreaSection>
          
        </S.Container>
      <Footer/>
    </S.ContainerDiv>
  );
}

export default Audiovisual;