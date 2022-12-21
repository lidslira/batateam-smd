import { ReactElement, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import disciplinas from '../../constants/disciplinas';
import * as S from './styles';
import { TrailsProps } from './types';

function TrailsComponent(props: TrailsProps): ReactElement {
  const navigate = useNavigate();
  const location = useLocation();
  let disciplinasEscolhidas = location.state.disciplinasEscolhidas;

  return (
    <S.Container hasSpecialBg={props.hasSpecialBg}>
      <div>
        <S.Sidebar>
        { props.isImageLeft && <S.ImageContainer isImageLeft><S.Image src={props.image}/>  </S.ImageContainer> }
          <S.Section>
          <h1>{props.title}</h1>
          { props.navigateToCourses && <S.Button className="button" onClick={() => navigate(`/${props.navigateToCourses}`)}> Ver Disciplinas </S.Button> }
          <h2><b>{props.subtitle}</b></h2>
          <p>{props.description}</p>
          <p>{props.description2}</p>
          { props.hasList && <ul>
              { disciplinasEscolhidas.map((item: string, index: number) => { 
                return <li key={index}>{item}</li>;
              })}
          </ul> }
        </S.Section>
        { !props.isImageLeft && <S.ImageContainer><S.Image src={props.image}/>  </S.ImageContainer> }
        </S.Sidebar>
      </div>
      { props.navigateBack && <S.ButtonGoBack onClick={() => navigate(`/home`)}> Voltar </S.ButtonGoBack> }
    </S.Container>
  );
}

export default TrailsComponent;