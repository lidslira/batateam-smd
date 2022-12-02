import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer';
import Header  from '../../components/header';
import * as S from './styles';
import AreasComponent from '../../components/areas';

function Home(): ReactElement {
  const navigate = useNavigate();
  return (
    <S.ContainerDiv>
      <Header/>
        <S.Container>
        <S.AreaSection id="survey" >
            <AreasComponent
              hasSpecialBg
              title={'Teste de Afinidade'}
              subtitle={'Duração média: '}
              description={'Nesse teste você vai poder classificar seu nível de interesse em atividades que são exercidas pelas quatro trilhas. Utilize esse resultado para se orientar na escolha da sua jornada no curso!'}
              children= {
                <>
                <S.Button onClick={() => navigate('/survey-questoes')}>Começar</S.Button>
                </>
              }/>
          </S.AreaSection>
        </S.Container>
      <Footer/>
    </S.ContainerDiv>
  );
}

export default Home;