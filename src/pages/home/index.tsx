import { ReactElement } from 'react';
import * as S from './styles';

function Home(): ReactElement {
  return (
    <S.Container>
      <S.Section>
        <h1>HOME!</h1>
      </S.Section>
    </S.Container>
  );
}

export default Home;