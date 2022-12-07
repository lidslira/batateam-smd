import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import AreasComponent from '../../components/areas';
import Footer from '../../components/footer';
import Header  from '../../components/header';
import homeAreas  from '../../constants/homeAreas';
import * as S from './styles';
import Placas from '../../assets/placasInicial.png';
import Disciplinas from '../../assets/Mapa.png';
import Bussula from '../../assets/bussulainterf.png';
import Binoculo from '../../assets/binoculo.png';


function Home(): ReactElement {
  const navigate = useNavigate();
  return (
    <S.ContainerDiv>
      <Header/>
        <S.Container>

          <S.AreaSection id="trilhas" >
            <AreasComponent
              image={Placas}
              title={homeAreas[0].title}
              description={homeAreas[0].description}
              children= {
                <>
                <S.Button onClick={() => navigate('/audiovisual')}>Animação/Audiovisual</S.Button>
                <S.Button onClick={() => navigate('/design')}>Design</S.Button>
                <S.Button onClick={() => navigate('/jogos')}>Jogos</S.Button>
                <S.Button onClick={() => navigate('/sistemas')}>Sistemas</S.Button>
                </>
              }/>
          </S.AreaSection>

          <S.AreaSection id="disciplinas" >
            <AreasComponent
              image={Disciplinas}
              hasSpecialBg
              isImageLeft
              title={homeAreas[1].title}
              description={homeAreas[1].description}
              children= {
                <>
                <S.Button onClick={() => navigate('/obrigatórias')}>Obrigatórias</S.Button>
                <S.Button onClick={() => navigate('/eletivas')}>Eletivas</S.Button>
                <S.Button onClick={() => navigate('/optativas')}>Optativas</S.Button>
                </>
              }/>
          </S.AreaSection>

          <S.AreaSection id="teste-afinidade" >
            <AreasComponent
              image={Bussula}
              title={homeAreas[2].title}
              description={homeAreas[2].description}
              children= {
                <>
                <S.Button onClick={() => navigate('/survey')}>Acessar</S.Button>
                </>
              }/>
          </S.AreaSection>

          <S.AreaSection id="faq" >
            <AreasComponent
              image={Binoculo}
              hasSpecialBg
              isImageLeft
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