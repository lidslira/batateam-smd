import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { AreasProps } from './types';

function AreasComponent(props: AreasProps): ReactElement {
  const navigate = useNavigate();

  return (
    <S.Container hasSpecialBg={props.hasSpecialBg}>
      <div>
        <S.Sidebar>
        { props.isImageLeft && <S.ImageContainer isImageLeft><S.Image src={props.image}/>  </S.ImageContainer>}
          <S.Section>
          <h1>{props.title}</h1>
          <h2>{props.subtitle}</h2>
          <p>{props.description}</p>
          <S.ButtonContainer>
            {props.children}
          </S.ButtonContainer>
        </S.Section>
        { !props.isImageLeft && <S.ImageContainer> <S.Image src={props.image}/>  </S.ImageContainer>}
        </S.Sidebar>
      </div>
    </S.Container>
  );
}

export default AreasComponent;