import React, { useRef } from 'react';
import { ReactElement, useState } from 'react';
import ReactDOM from 'react-dom';
import Likert from 'react-likert-scale';

import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../../components/footer';
import Header  from '../../../components/header';
import * as S from './styles';
import questions from '../../../constants/surveyQuestions';

function SurveyQuestions() {
  const refLikert = useRef(null);
  const location = useLocation();
  let userName = location.state.name;
  console.log()
  return (
      <S.ContainerDiv>
        <Header/>
          <S.Container>
            <h1>Perguntas</h1>
            <p>Olá <b>{userName}!</b> Algumas informação sobre a escala likert: Para responder às perguntas do Teste de Afinidade é preciso declarar a resposta em uma escala de 1 a 5 em que 1 mostra nenhum interesse e 5 muito interesse. </p>
          <S.AreaSection id="survey" >
            <Likert {...questions[0]} 
              layout='stacked'
              ref={refLikert}
            />
            <Likert {...questions[1]} 
              layout='stacked'
            />
            <Likert {...questions[2]} 
              layout='stacked'
            />
            <Likert {...questions[3]} 
              layout='stacked'
            />
            <Likert {...questions[4]} 
              layout='stacked'
            />
            <Likert {...questions[5]} 
              layout='stacked'
            />
            <Likert {...questions[6]} 
              layout='stacked'
            />
            <Likert {...questions[7]} 
              layout='stacked'
            />
          </S.AreaSection>
        </S.Container>
      <Footer/>
    </S.ContainerDiv>
  );
}
export default SurveyQuestions;