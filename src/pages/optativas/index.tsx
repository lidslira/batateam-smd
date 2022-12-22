import { ReactElement, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../components/footer';
import Header  from '../../components/header';
import optativas from '../../constants/optativas';
import * as S from './styles';
import bg from '../../assets/faq-bg.png';
import upBottom from '../../assets/up-bottom.png';

function Optativas(): ReactElement {
  const location = useLocation();
  let audiovisualTrail = location.state.audiovisual;
  let jogosTrail = location.state.jogos;
  let sistemasTrail = location.state.sistemas;
  let designTrail = location.state.design;

  console.log(sistemasTrail)

  const [audiovisual, setAudiovisual] = useState<boolean>(audiovisualTrail);
  const [jogos, setJogos] = useState<boolean>(jogosTrail);
  const [design, setDesign] = useState<boolean>(designTrail);
  const [sistemas, setSistemas] = useState<boolean>(sistemasTrail);
  const [showModal, setShowModal] = useState<boolean>(false);

  const navigate = useNavigate();
  const scrollTo = () => {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }

  const handleModal = () => {
    setShowModal(!showModal);
  }

  const handleTrails = () => {
    setShowModal(!showModal);
    setAudiovisual(false);
    setDesign(false);
    setJogos(false)
    setSistemas(false);
    scrollTo();
  }
  
  return (
    <div>
      <Header/>
        <>
          <div style={{ position: 'fixed', bottom: 0, left: 0, zIndex: -1, objectFit: 'fill'}}>
            <img src={bg} alt="" loading="eager" height={`${window.screen.height}`} width={`${window.screen.width}`}/>
          </div>
        </>
      { showModal && <S.Modal>
          <S.ModalContent>
            <span className="close" onClick={() => handleModal()}>&times;</span>
            <br/>
            <p onClick={() => {
              handleTrails();
              setAudiovisual(true);
            }}>Animação e Audiovisual</p>
            <br/>
            <p onClick={() => {
              handleTrails();
              setDesign(true);
            }}> Design Digital</p>
            <br/>
            <p onClick={() => {
              handleTrails();
              setJogos(true);
            }}>Jogos Digitais</p>
            <br/>
            <p onClick={() => {
              handleTrails();
              setSistemas(true);
            }}>Sistemas Multimídias</p>
          </S.ModalContent>
      </S.Modal> }
        <S.Container>
        <div onClick={() => scrollTo()} style={{ cursor: 'pointer', position: 'fixed', right: 50, bottom: 30, zIndex: 1 }}>
            <img src={upBottom} alt="" loading="eager" height='80' width='80'/>
        </div>
          <S.TextContainer>
            <h1>Disciplinas Optativas</h1>
            <p>A partir do quinto semestre o aluno é livre pra escolher seguir disciplinas das trilhas de seu interesse. Aqui estão listadas todas as optativas que fazem parte de alguma trilha.</p>
          </S.TextContainer>
        <div>
        <S.AreaSection>
          { audiovisual && <S.SemesterContainer>
            <h2>{optativas[0].title}</h2>
              {optativas[0].disciplinas.map((element, index) => { 
                  return <S.Button index={index} key={index}>{element}</S.Button>
              })}  
          </S.SemesterContainer>}
        
          { design && <S.SemesterContainer>
            <h2>{optativas[1].title}</h2>
              {optativas[1].disciplinas.map((element, index) => { 
                  return <S.Button index={index} key={index}>{element}</S.Button>
              })}  
          </S.SemesterContainer> }
        
          { jogos && <S.SemesterContainer>
            <h2>{optativas[2].title}</h2>
              {optativas[2].disciplinas.map((element, index) => { 
                  return <S.Button index={index} key={index}>{element}</S.Button>
              })}  
          </S.SemesterContainer> }

          { sistemas && <S.SemesterContainer>
            <h2>{optativas[3].title}</h2>
              {optativas[3].disciplinas.map((element, index) => { 
                  return <S.Button index={index} key={index}>{element}</S.Button>
              })}
          </S.SemesterContainer> }
        
        <S.ButtonGoBack onClick={() => navigate(`/home`)}> Voltar </S.ButtonGoBack>
        <S.ButtonChangeTrail onClick={() => handleModal()}> Ver outra trilha </S.ButtonChangeTrail>
        </S.AreaSection>
        </div>
        </S.Container>
      <Footer/>
    </div>
  );
}

export default Optativas;