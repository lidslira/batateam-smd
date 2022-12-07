import styled from 'styled-components';
import { device } from '../../constants/breakpoints';

interface ContainerProps {
  hasSpecialBg?: boolean;
}

interface ImageProps {
  isImageLeft?: boolean;
}

export const Container = styled.main<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0px 0px 0px 0px;
  padding: 15px 10px 15px 30px;
  padding-bottom: 10px;
  flex-direction: column;

  background-color: ${({ hasSpecialBg }) => hasSpecialBg ? '#F1EDE6' : '#fff'};

  @media ${device.mobile} {
    padding: 15px 0px 100px 50px;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
`;

export const Section = styled.section`
  max-width: 500px;
  width: 100%;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    word-wrap: break-word;    
    font-size: 2.5rem;
    margin-bottom: 10px;

    @media (${device.mobile}) {
      font-size: 2rem;
    }
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    word-wrap: break-word;
    font-size: 1.2rem;
    font-weight: normal;
    margin: 15px 0px 25px 0px;
  }

  p {
    font-family: 'Poppins', sans-serif;
    margin: 10px 0px 5px 0px;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.8rem;

    @media (${device.mobile}) {
      font-size: 1rem;
    }
  }

  div {
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div<ImageProps>`
  display: flex;
  height: 400px;
  width: 100%;
  justify-content: center;
  margin: ${({ isImageLeft }) => isImageLeft ? `0px 30px 0px 0px` : '0px 0px 0px 30px'};
  max-width: 300px;
  padding: 0px 3px 0px 3px;
  /* border: 2px dashed black; */

  @media ${device.mobile} {
    height: 350px;
    width: 200px;
    margin: 0px 0px 0px 10px;
  }
`;


export const Image = styled.img`
  height: 105%;
  align-items: center;
`;