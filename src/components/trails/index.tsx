import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import disciplinas from '../../constants/disciplinas';
import * as S from './styles';
import { TrailsProps } from './types';

function TrailsComponent(props: TrailsProps): ReactElement {
  const navigate = useNavigate();
  const [disciplinasEscolhidas, setDisciplinasEscolhidas] = useState<string[]>(disciplinas[0].list);
 
  useEffect(() => {
    disciplinas.map((item) => { //CONTINUAR DEPOIS
      switch(props.title) {
        case 'Animação e Audiovisual':
          setDisciplinasEscolhidas(disciplinas[0].list);
          break;
        case 'Design Digital Interativo':
          setDisciplinasEscolhidas(disciplinas[1].list);
          break;
        case 'Jogos Digitais':
          setDisciplinasEscolhidas(disciplinas[2].list);
          break;
        case 'Sistemas Multimídias':
          setDisciplinasEscolhidas(disciplinas[3].list);
          break;
      }
    });
  }),[disciplinas, props, props.title, disciplinasEscolhidas]

  return (
    <S.Container hasSpecialBg={props.hasSpecialBg}>
      <div>
        <S.Sidebar>
        { props.isImageLeft && <S.ImageContainer isImageLeft><S.Image src={props.image}/>  </S.ImageContainer> }
          <S.Section>
          <h1>{props.title}</h1>
          { props.navigateToCourses && <S.Button className="button" onClick={() => navigate(`/${props.navigateToCourses}`)}> Ver Cadeiras &gt; </S.Button> }
          <h2><b>{props.subtitle}</b></h2>
          <p>{props.description}</p>
          { props.hasList && <ul>
              { disciplinasEscolhidas.map((item: string, index: number) => { 
                return <li key={index}>{item}</li>;
              })}
          </ul> }
        </S.Section>
        { !props.isImageLeft && <S.ImageContainer><S.Image src={props.image}/>  </S.ImageContainer> }
        </S.Sidebar>
      </div>
    </S.Container>
  );
}

export default TrailsComponent;