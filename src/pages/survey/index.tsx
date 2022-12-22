import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer';
import Header  from '../../components/header';
import * as S from './styles';
import AreasComponent from '../../components/areas';
import SurveyLogo from '../../assets/survey-inicio.png';
import bg from '../../assets/faq-bg.png';

function Survey(): ReactElement {
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');

  return (
    <S.ContainerDiv>
      <Header/>
        <>
          <div style={{ position: 'fixed', bottom: 0, left: 0, zIndex: -1, objectFit: 'contain'}}>
            <img src={bg} alt="" loading="eager" height='850' width='1500'/>
          </div>
        </>
        <S.Container>
        <S.AreaSection id="survey" >
            <AreasComponent
              image={SurveyLogo}
              title={'Teste de Afinidade'}
              subtitle={'Duração média: 15 min'}
              description={'Nesse teste você vai poder classificar seu nível de interesse em atividades que são exercidas pelas quatro trilhas. Utilize esse resultado para se orientar na escolha da sua jornada no curso!'}
              children= {
                <>
                <S.Button type='submit' onClick={() => navigate('/survey-questoes', {
                  state: { name: name }
                })}>Acessar</S.Button>
                </>
              }/>
          </S.AreaSection>
        </S.Container>
      <Footer/>
    </S.ContainerDiv>
  );
}

export default Survey;