import styled from 'styled-components';
import { device } from '../../../constants/breakpoints';

interface ButtonProps {
  isCancel?: boolean;
}

export const ContainerDiv = styled.main`
  width: 100%;
`;

export const AreaSection = styled.section`
  margin-top: 20px;
  margin-left: -50px;
  width: 100%;
  align-items: center;
  z-index: -0;
  background-color: #F8F8F8;
  
  .button {
    display: flex;
    align-items: center;
    align-self: center;
    width: 100%;
    justify-content: center;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 40px 20px 0px 40px;
  min-height: 100vh;
  flex-direction: column;
  padding: 20px;

  fieldset.likertScale {
  align-items: center;
  margin-top: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  padding: 1em;
  border-radius: 8px;
  box-shadow: 1px 1px 5px #000;
  width: 40%;
  background-color: #fff;
}
  .likertLine {
    border-top: 5px solid #767676;
    margin-top: 0.40em;
    width: 50%;
  }

  .likertLegend {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    margin: 0px 0px 20px 0px;
    font-weight: 400;
  } 
   .likertText {
     font-family: 'Poppins', sans-serif;
     font-weight: 300;
   }
  .likertIndicator {
    border: thin solid #808080;
    background-color: #808080;
  }
  .likertResponse > input:checked + .likertIndicator {
    background-color: #87B296;
    width: 18px;
    height: 18px;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    word-wrap: break-word;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: left;
  }

  p {
    font-family: 'Poppins', sans-serif;
    margin-bottom: 4px;
    font-weight: 300;
    font-size: 1rem;
  }
`;

export const Questions = styled.div`
  margin-bottom: 20px;
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button<ButtonProps>`
  border-radius: 4px;
  border: none;
  padding: 10px;
  background-color: ${({ isCancel }) => isCancel ? '#C59B9B' : '#8BAB9A'};
  color: #fff;
  box-shadow: 1px 1px 6px #000;

  align-items: center;
  justify-content: center;

  max-height: 53px;
  width: 300px;

  margin: 15px 50px 10px 50px;

  font-size: 1.2rem;

  cursor: pointer;
  transition: background 0.2s;

  @media ${device.mobile} {
      width: 100%;
    }
`;