import React from 'react'
import * as S from './styles';

import LogoBatateam from '../../assets/logo-batateam.png'
import LogoSMD from '../../assets/logo-smd.png'
import vector2 from '../../assets/footer.png';

const MCFooter: React.FC = () => {
  return (
    <S.Footer>
      {/* <div style={{ position: 'fixed', bottom: 0, right: 0, zIndex: 1, objectFit: 'contain' }}>
        <img src={vector2} alt="" loading="eager" height='100' width='700' />
      </div>  */}
      <S.ImageContainer>
        <S.Image src={LogoBatateam} alt="Logo Batateam" />
        <S.Image src={LogoSMD} alt="Logo SMD" />
      </S.ImageContainer>
        <p>Site criado em 2022 para a disciplina de Projeto Integrado por alunos do Grupo Batateam.</p>
  </S.Footer>
  )
}

export default MCFooter
