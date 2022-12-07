import { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Pages from '../../constants/pages';
import TelaExplicacao1 from '../../assets/tela-explicacao-1.png';
import * as S from './styles';

function Explanation(): ReactElement {
  const navigate = useNavigate();
  const [index, setIndex] = useState<number>(Pages[0].index);
  const [text, setText] = useState<string>(Pages[0].content);
  const [image, setImage] = useState<string | undefined>(Pages[0].image);

  const isLast: boolean = index === Pages.length - 1;
  const isFirst: boolean = index === 0;
  
  const handleFoward = () => {
    setIndex(Pages[index + 1].index) 
    setText(Pages[index + 1].content)
    setImage(Pages[index +1].image)
  }

  const handleBackward = () => {
    setIndex(index - 1) 
    setText(Pages[index-1].content)
    setImage(Pages[index-1].image)
  }

  //const boldString = (str: string, boldString: string) => str.replace(RegExp(boldString, 'g'), `<b>${boldString}</b>`);
  return (
    <S.Container>
      <div>
      <S.Sidebar>
        <S.Section>
        <h1>Antes de prosseguir...</h1>
        <p>{text}</p>
      </S.Section>
      <S.ImageContainer ><S.Image src={TelaExplicacao1}/>  </S.ImageContainer>
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
    </S.Container>
  );
}

export default Explanation;