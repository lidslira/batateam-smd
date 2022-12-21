import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer';
import Header  from '../../components/header';
import * as S from './styles';
import AreasComponent from '../../components/areas';
import SurveyLogo from '../../assets/survey-inicio.png';

function Survey(): ReactElement {
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');

  return (
    <S.ContainerDiv>
      <Header/>
        <S.Container>
        <S.AreaSection id="survey" >
            <AreasComponent
              image={SurveyLogo} 
              // hasSpecialBg
              title={'Teste de Afinidade'}
              subtitle={'Duração média: 5 min'}
              description={'Nesse teste você vai poder classificar seu nível de interesse em atividades que são exercidas pelas quatro trilhas. Utilize esse resultado para se orientar na escolha da sua jornada no curso!'}
              children= {
                <>
                <S.Input required type="text" placeholder="Digite seu nome" onChange={e => setName(e.target.value)}></S.Input>
                <S.Button type='submit' onClick={() => navigate('/survey-questoes', {
                  state: { name: name }
                })}>Começar</S.Button>
                </>
              }/>
          </S.AreaSection>
        </S.Container>
      <Footer/>
    </S.ContainerDiv>
  );
}

export default Survey;