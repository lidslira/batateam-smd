import React from 'react';
import * as S from './styles';

const ProgressBar = (props: {completed: number}) => {
  const { completed } = props;

  return (
    <S.Container>
      <S.Filler width={completed}>
        <S.Span>{`${completed}%`}</S.Span>
      </S.Filler>
    </S.Container>

  );
};

export default ProgressBar;