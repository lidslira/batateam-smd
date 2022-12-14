import React, { useCallback, useEffect, useRef } from 'react';
import { ReactElement, useState } from 'react';
import ReactDOM from 'react-dom';
import Likert from 'react-likert-scale';

import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../../components/footer';
import Header  from '../../../components/header';
import * as S from './styles';
import questions from '../../../constants/surveyQuestions';
import bg from '../../../assets/survey-bg.png';

function SurveyQuestions() {
  const navigate = useNavigate();
  const location = useLocation();
  let userName = location.state?.name;
  
  const [question1, setQuestion1] = useState(0);
  const [question2, setQuestion2] = useState(0);
  const [question3, setQuestion3] = useState(0);
  const [question4, setQuestion4] = useState(0);
  const [question5, setQuestion5] = useState(0);
  const [question6, setQuestion6] = useState(0);
  const [question7, setQuestion7] = useState(0);
  const [question8, setQuestion8] = useState(0);
  const [question9, setQuestion9] = useState(0);
  const [question10, setQuestion10] = useState(0);
  const [question11, setQuestion11] = useState(0);
  const [question12, setQuestion12] = useState(0);
  const [question13, setQuestion13] = useState(0);
  const [question14, setQuestion14] = useState(0);
  const [question15, setQuestion15] = useState(0);
  
  const [chosen, setChosen] = useState(0);
  const [newValue, setNewValue] = useState(0);

  const [audiovisual, setAudiovisual] = useState<number>(0);
  const [jogos, setJogos] = useState<number>(0);
  const [design, setDesign] = useState<number>(0);
  const [sistemas, setSistemas] = useState<number>(0);
  
  const [resultado, setResultado] = useState([]);
  const recomendations: string[] = [];
  
  
  const onChange1 = (chosen: any) => {
    setQuestion1(chosen.value);
  };
  const onChange2 = (chosen: any) => {
    setQuestion2(chosen.value);
  };
  const onChange3 = (chosen: any) => {
    setQuestion3(chosen.value);
  };
  const onChange4 = (chosen: any) => {
    setQuestion4(chosen.value);
  };
  const onChange5 = (chosen: any) => {
    setQuestion5(chosen.value);
  };
  const onChange6 = (chosen: any) => {
    setQuestion6(chosen.value);
  };
  const onChange7 = (chosen: any) => {
    setQuestion7(chosen.value);
  };
  const onChange8 = (chosen: any) => {
    setQuestion8(chosen.value);
  };
  const onChange9 = (chosen: any) => {
    setQuestion9(chosen.value);
  };
  const onChange10 = (chosen: any) => {
    setQuestion10(chosen.value);
  };
  const onChange11 = (chosen: any) => {
    setQuestion11(chosen.value);
  };
  const onChange12 = (chosen: any) => {
    setQuestion12(chosen.value);
  };
  const onChange13 = (chosen: any) => {
    setQuestion13(chosen.value);
  };
  const onChange14 = (chosen: any) => {
    setQuestion14(chosen.value);
  };

const handleScore = () => {
  setAudiovisual(question1 + question7 + question10 + question13 );
  setSistemas(question3 + question6 + question11 + question14);
  setDesign(question2 + question4 + question8 + question12);
  setJogos(question5 + question7 + question9 + question13);
}

  const handleRecomendations = () => {
    if(question1 >= 75) {
      recomendations.push('Linguagem Audiovisual')
    } if(question2 >= 75) {
      recomendations.push('Intera????o Humano-Computador I', 'Intera????o Humano-Computador II')
    } if(question3 >= 75) {
      recomendations.push('Intera????o Humano-Computador I', 'Intera????o Humano-Computador II')
    } if(question4 >= 75) {
      recomendations.push('Reda????o para M??dias Digitais')
    } if(question5 >= 75) {
      recomendations.push('Cultura de Jogos', 'Pesquisa em Jogos')
    } if(question6 >= 75) {
      recomendations.push('Programa????o para Dispositivos M??veis')
    } if(question7 >= 75) {
      recomendations.push('T??cnicas de Anima????o 2d', 'T??cnicas de Anima????o 3d I', 'T??cnicas de Anima????o 3d II', 'Videografismo')
    } if(question8 >= 75) {
      recomendations.push('Experimento em Tipografia Digital')
    } if(question9 >= 75) {
      recomendations.push('Programa????o para Jogos I', 'Programa????o para Jogos II', 'Matem??tica e F??sica para Jogos', 'Intelig??ncia Computacional Aplicada a Jogos I', 'Intelig??ncia Computacional Aplicada a Jogos II')
    } if(question10 >= 75) {
      recomendations.push('Edi????o Audiovisual')
    } if(question12 >= 75) {
      recomendations.push('Design Emocional', 'Teoria e Cr??tica do Design')
    } if(question13 >= 75) {
      recomendations.push('Concep????o de Cen??rios e Personagens')
    }
  }

  function removeDuplicates(arr: any[]) {
    return arr.filter((item: any, index: any) => arr.indexOf(item) === index);
  }
  removeDuplicates(recomendations);

  

  return (
      <S.ContainerDiv>
        <Header/>
          <S.Container>
          <>
            <div style={{ position: 'fixed', bottom: 0, left: 0, zIndex: -1, objectFit: 'contain'}}>
              <img src={bg} alt="" loading="eager" height={`${window.screen.height}-50`} width={`${window.screen.width}`}/>
            </div>
          </>
            <h1>Teste de Afinidade</h1>
            <p>Responda as perguntas abaixo para encontrar seu n??vel de afinidade com as diferentes trilhas do curso</p>
          <S.AreaSection id="survey" >
            <S.Questions>
              <Likert {...questions[0]}
                layout='stacked'
                id='Q1'
                onChange={onChange1}
                onClick={() => {
                  handleScore()
                  handleRecomendations()
                }}
              />
            </S.Questions>

            <S.Questions>
            <Likert {...questions[1]} 
              layout='stacked'
              id='Q2'
              onChange={onChange2}
              onClick={() => {
                handleScore()
                handleRecomendations()
              }}/>
            </S.Questions>

            <S.Questions>
            <Likert {...questions[2]} 
              layout='stacked'
              onChange={onChange3}
              onClick={() => {
                handleScore()
                handleRecomendations()
              }}/>
            </S.Questions>
            
            <S.Questions>
            <Likert {...questions[3]} 
              layout='stacked'
              onChange={onChange4}
              onClick={() => {
                handleScore()
                handleRecomendations()
              }}/>
            </S.Questions>

            <S.Questions>
            <Likert {...questions[4]} 
              layout='stacked'
              onChange={onChange5}
              onClick={() => {
                handleScore()
                handleRecomendations()
              }}/>
            </S.Questions>
            
            <S.Questions>
            <Likert {...questions[5]} 
              layout='stacked'
              onChange={onChange6}
              onClick={() => {
                handleScore()
                handleRecomendations()
              }}/>
            </S.Questions>
            
            <S.Questions>
            <Likert {...questions[6]} 
              layout='stacked'
              onChange={onChange7}
              onClick={() => {
                handleScore()
                handleRecomendations()
              }}/>
            </S.Questions>
            
            <S.Questions>
            <Likert {...questions[7]} 
              layout='stacked'
              onChange={onChange8}
              onClick={() => {
                handleScore()
                handleRecomendations()
              }}/>
            </S.Questions>
            
            <S.Questions>
            <Likert {...questions[8]} 
              layout='stacked'
              onChange={onChange9}
              onClick={() => handleScore()}
            />
            </S.Questions>
            
            <S.Questions>
            <Likert {...questions[9]} 
              layout='stacked'
              onChange={onChange10}
              onClick={() => {
                handleScore()
                handleRecomendations()
              }}/>
            </S.Questions>
            
            <S.Questions>
            <Likert {...questions[10]} 
              layout='stacked'
              onChange={onChange11}
              onClick={() => {
                handleScore()
                handleRecomendations()
              }}/>
            </S.Questions>
            
            <S.Questions>
            <Likert {...questions[11]} 
              layout='stacked'
              onChange={onChange12}
              onClick={() => {
                handleScore()
                handleRecomendations()
              }}/>
            </S.Questions>
            
            <S.Questions>
            <Likert {...questions[12]} 
              layout='stacked'
              onChange={onChange13}
              onClick={() => {
                handleScore()
                handleRecomendations()
              }}/>
            </S.Questions>
            
            <S.Questions>
            <Likert {...questions[13]} 
              layout='stacked'
              onChange={onChange14}
              onClick={() => {
                handleScore()
                handleRecomendations()
                removeDuplicates(recomendations);
              }}/>
            </S.Questions>

            <div className="button">
              <S.Button isCancel type='submit' onClick={() => navigate('/home')}>Cancelar Teste</S.Button>
            
              <S.Button type='submit' onClick={() => {
                  handleScore()
                  handleRecomendations()            
                  navigate('/survey-resultados', {
                    state: { 
                      name: userName,
                      audiovisual: audiovisual,
                      jogos: jogos,
                      sistemas: sistemas,
                      design: design,
                      recomendations: removeDuplicates(recomendations)
                    }
              })}}>Ver Resultados</S.Button>
            </div>
          </S.AreaSection>
        </S.Container>
      <Footer/>
    </S.ContainerDiv>
  );
}
export default SurveyQuestions;