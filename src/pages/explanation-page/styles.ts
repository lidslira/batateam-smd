import styled from 'styled-components';
import { device } from '../../constants/breakpoints';

interface DotProps {
  isActive: boolean;
}

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0px 0px 0px 20px;
  padding: 5px;
  flex-direction: column;

  .skip {
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 10px;
  justify-content: end;

  cursor: pointer;
  
  background-color: transparent;
  border: none;
}

`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  @media ${device.mobile} {
    margin: 0px 0px 0px 40px;
  }
`;

export const DotsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  background-color: red;
  align-self: baseline;
  align-items: center;
`;

export const Button = styled.button`
  border-radius: 4px;
  border: none;
  padding: 10px;
  background: #A8C2D3;
  color: #000;
  box-shadow: 1px 1px 9px #000;

  display: flex;
  align-items: center;
  justify-content: center;

  max-height: 53px;

  margin: 20px 0px 20px 0px;

  font-size: 1.25rem;

  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #93AABA;
  }
`;

export const DotDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Dot = styled.div<DotProps>`
  border-radius: 15px;
  width: 5px;
  height: 5px;
  margin: 10px 5px 10px 5px;
  background: ${({ isActive }) => isActive ? '#93AABA' : '#BDB1A3'};
  padding: 5px;
`;

export const Section = styled.section`
  max-width: 500px;
  width: 100%;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    word-wrap: break-word;    
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  h2 {
    word-wrap: break-word;
    font-size: 1.8rem;
    font-weight: normal;
    margin-bottom: 10px;
  }

  p {
    font-family: 'Poppins', sans-serif;
    margin: 10px 0px 5px 0px;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.8rem;
  }

  div {
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  height: 300px;
  width: 100%;
  justify-content: center;
  margin: 0px 0px 0px 10px;
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

export const Skip = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  justify-content: end;
`;