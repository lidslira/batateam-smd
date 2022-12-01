import { ReactElement } from 'react';
import Header  from '../../components/header';
import * as S from './styles';

function Home(): ReactElement {
  return (
    <S.ContainerDiv>
      <Header/>
      <S.Container>
        <h1>HOME!</h1>
    </S.Container>
    </S.ContainerDiv>
    
  );
}

export default Home;