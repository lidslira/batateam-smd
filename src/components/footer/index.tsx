import React from 'react'
import * as S from './styles';

import LogoBatateam from '../../assets/logo-batateam.png'
import LogoSMD from '../../assets/logo-smd.png'


const MCFooter: React.FC = () => {
  return (
    <S.Footer>
      <S.ImageContainer>
        <S.Image src={LogoBatateam} alt="Logo Batateam" />
        <S.Image src={LogoSMD} alt="Logo SMD" />
      </S.ImageContainer>
        <p>Site criado em 2022 para a disciplina de Projeto Integrado por alunos do Grupo Batateam.</p>
  </S.Footer>
  )
}

export default MCFooter
