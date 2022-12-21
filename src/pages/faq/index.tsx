import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillCaretDownFill, BsFillCaretRightFill } from "react-icons/bs";
import Footer from '../../components/footer';
import Header  from '../../components/header';
import homeAreas  from '../../constants/homeAreas';
import vector1 from '../../assets/manchas-tela.png';

import * as S from './styles';

function Home(): ReactElement {
  const [question1Open, setQuestion1Open] = useState<boolean>(false);
  const [question2Open, setQuestion2Open] = useState<boolean>(false);
  const [question3Open, setQuestion3Open] = useState<boolean>(false);
  const [question4Open, setQuestion4Open] = useState<boolean>(false);

  const navigate = useNavigate();
  return (
    <S.ContainerDiv>
      <Header/>
        <>
          <div style={{ position: 'fixed', bottom: 0, left: 0, zIndex: -1, objectFit: 'fill'}}>
            <img src={vector1} alt="" loading="eager" height='850' width='1500'/>
          </div>
        </>
        <S.Container>
         <h1>FAQ</h1>
        <S.QuestionContainer onClick={() => question1Open ? setQuestion1Open(false) : setQuestion1Open(true)}> 
            <p>O que são as trilhas?</p>
            {!question1Open ? 
            <BsFillCaretRightFill color={'#7E8281'} size={20} onClick={() => setQuestion1Open(true)}/> : <BsFillCaretDownFill color={'#7E8281'} size={20} onClick={() => setQuestion1Open(false)}/> }
        </S.QuestionContainer>
        { question1Open && <S.AnswerContainer>
          <p> São um conjunto de cadeiras optativas separadas por áreas. Elas servem como sugestões de quais disciplinas você pode cursar dependendo do seu interesse. </p>
        </S.AnswerContainer> }

        <S.QuestionContainer onClick={() => question2Open ? setQuestion2Open(false) : setQuestion2Open(true)}>
          <p>Sou obrigado(a) a seguir alguma trilha?</p>
        { !question2Open ? 
            <BsFillCaretRightFill color={'#7E8281'} size={20} onClick={() => setQuestion2Open(true)}/> : <BsFillCaretDownFill color={'#7E8281'} size={20} onClick={() => setQuestion2Open(false)}/> } 
        </S.QuestionContainer>
        { question2Open && <S.AnswerContainer>
          <p>Não. As trilhas servem somente como uma sugestão de disciplinas optativas que você pode cursar ao longo da terceira etapa do curso (após os quatro primeiros semestres), mas ainda assim você é livre para escolher as disciplinas sem se preocupar em qual(is) trilha(s) elas fazem parte.</p>
        </S.AnswerContainer> }

        <S.QuestionContainer onClick={() => question3Open ? setQuestion3Open(false) : setQuestion3Open(true)}>
          <p>Quando posso começar a cursar alguma trilha?</p>
        { !question3Open ? 
            <BsFillCaretRightFill color={'#7E8281'} size={20} onClick={() => setQuestion3Open(true)}/> : <BsFillCaretDownFill color={'#7E8281'} size={20} onClick={() => setQuestion3Open(false)}/> } 
        </S.QuestionContainer>
        { question3Open && <S.AnswerContainer>
          <p>No Projeto Pedagógico é previsto que elas se iniciem a partir do quinto semestre do curso.</p>
        </S.AnswerContainer> }

        <S.QuestionContainer onClick={() => question4Open ? setQuestion4Open(false) : setQuestion4Open(true)}>
        <p>Posso misturar disciplinas de diferentes trilhas?</p>
        { !question4Open ? 
            <BsFillCaretRightFill color={'#7E8281'} size={20} onClick={() => setQuestion4Open(true)}/> : <BsFillCaretDownFill color={'#7E8281'} size={20} onClick={() => setQuestion4Open(false)}/> } 
        </S.QuestionContainer>
        { question4Open && <S.AnswerContainer>
          <p>Sim. Você é livre para seguir quantas trilhas quiser. A ideia é que esses itinerários possam ajudar a guiar os estudantes em suas jornadas formativas, sem prendê-los a um único percurso. Caso queiram uma formação híbrida e generalista, os estudantes podem percorrer as múltiplas trilhas do curso.</p>
        </S.AnswerContainer> }


        </S.Container>
      <Footer/>
    </S.ContainerDiv>
  );
}

export default Home;