import { ReactElement, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './styles';
import SurveyResultado from '../../../assets/survey-resultado.png';
import Header from '../../../components/header';
import Footer  from '../../../components/footer';
import ProgressBar from '../../../components/progressBar';
import disciplinas from '../../../constants/disciplinas';


function Results(): ReactElement {
  const navigate = useNavigate();
  const location = useLocation();
  let userName = location.state.name;
  let recomendations = location.state.recomendations;
  let audiovisual = location.state.audiovisual;
  let jogos = location.state.jogos;
  let sistemas = location.state.sistemas;
  let design = location.state.design;
  
  const handleCompleted = (trilha: any, maxPoints: number) => {
    let result = parseFloat(((trilha/maxPoints)*100).toFixed(2));
    // if(result >= 75) {
    //   bestTrails.push(`${trilha}`);
    // }
    if (result > 100) {
      return 100;
    } else return result;
  }

  const animacaoList: string[] = disciplinas[0].list;
  const designList: string[] = disciplinas[1].list;
  const jogosList: string[] = disciplinas[2].list;
  const sistemasList: string[] = disciplinas[3].list;
  
  const resultados = [
    { title: 'Animação/Audiovisual >', completed: handleCompleted(audiovisual, 400), navigateTo: 'audiovisual', list: animacaoList },
    { title: 'Design Digital >', completed: handleCompleted(design, 400), navigateTo: 'design', list: designList },
    { title: 'Jogos >', completed: handleCompleted(jogos, 400), navigateTo: 'jogos', list: jogosList},
    { title: 'Sistemas >', completed: handleCompleted(sistemas, 400), navigateTo: 'sistemas', list: sistemasList},
  ];
  console.log(recomendations)
  return (
    <div>
      <Header />
      <S.Container>
        <S.ImageContainer><S.Image src={SurveyResultado}/>  </S.ImageContainer>
        <S.Sidebar>
          <S.Section>
          <h1>Resultados</h1>
          <div>
            {resultados.map((item, idx) => (
              <><p onClick={() => navigate(`/${item.navigateTo}`, {state: {disciplinasEscolhidas: item.list}})}>{item.title}</p><ProgressBar key={idx} completed={item.completed} /></>
            ))}
          </div>        
        </S.Section>
        </S.Sidebar>
      </S.Container>
      { recomendations.length > 0 && (<S.Recomendations> <p>Olá{`${userName ? `, ${userName}` : ''}`}!</p>
        <p>Com base nas suas respostas, temos algumas <b>cadeiras recomendadas</b>:</p>
        <ul>
          { recomendations.map((item: string, index: number) => { 
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </S.Recomendations> )}
     <Footer/>
    </div> 
  );
}

export default Results;