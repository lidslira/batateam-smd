import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../components/footer';
import Header  from '../../../components/header';
import * as S from './styles';
import AreasComponent from '../../../components/areas';
import { ApexOptions } from 'apexcharts'
// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

function Home(): ReactElement {
  const navigate = useNavigate();
  return (
    <S.ContainerDiv>
      <Header/>
        <S.Container>
          <h1>Resultados</h1>
        </S.Container>
      <Footer/>
    </S.ContainerDiv>
  );
}

export default Home;