import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Pages from '../../constants/pages';
import * as S from './styles';

function Explanation(): ReactElement {
  const navigate = useNavigate();
  const [index, setIndex] = useState<number>(Pages[0].index);
  const [text, setText] = useState<string>(Pages[0].content);

  const isLast: boolean = index === Pages.length - 1;
  const isFirst: boolean = index === 0;
  
  const handleFoward = () => {
    setIndex(Pages[index + 1].index) 
    setText(Pages[index + 1].content)
  }

  const handleBackward = () => {
    setIndex(index - 1) 
    setText(Pages[index-1].content)
  }

  return (
    <S.Container>
      <div>
      <S.Sidebar>
        <S.Section>
        <h1>Antes de prosseguir...</h1>
        <p>{text}</p>
      </S.Section>
      <S.Image />
      </S.Sidebar>
      <S.DotsContainer>
        {!isFirst && <FiChevronLeft size={20} onClick={() => handleBackward()} /> }
          {Pages.map((item, indexKey) => <S.Dot key={indexKey} isActive={item.index === index}/> )} 
        { !isLast && <FiChevronRight size={20} onClick={() => handleFoward()} /> }
        </S.DotsContainer>
        <S.Skip>
          <button type="submit" className="skip" onClick={() => navigate('/home')}>{isLast ? 'Começar' : 'Pular'}</button>
        </S.Skip>
        </div>
        {/* <S.ButtonContainer>
        { isLast && <S.Button onClick={() => navigate('/home')}>Começar</S.Button> }
        </S.ButtonContainer> */}
    </S.Container>
  );
}

export default Explanation;