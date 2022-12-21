import styled from 'styled-components';
import { device } from '../../../constants/breakpoints';

export const ContainerDiv = styled.main`
  width: 100%;
`;

export const AreaSection = styled.section`
  margin-top: 20px;
  width: 100%;
  
  .button {
    display: flex;
    align-items: center;
    width: 92%;
    justify-content: center;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
  min-height: 100vh;
  flex-direction: column;
  padding: 20px;

  fieldset.likertScale {
  align-items: center;
  margin-top: 20px;
  font-family: "Poppins", sans-serif;
  padding: 1em;
  border-top: thin solid #D0BBAF;
  border-bottom: thin solid #D0BBAF;
  width: 90%;
}

  h1 {
    font-family: 'Poppins', sans-serif;
    word-wrap: break-word;
    font-weight: bold;
    font-size: 1.6rem;
    margin-bottom: 20px;
    text-align: left;
  }

  p {
    font-family: 'Poppins', sans-serif;
    margin-bottom: 4px;
    font-weight: normal;
    font-size: 1rem;
  }
`;

export const Questions = styled.div`
  margin-bottom: 50px;
`;

export const Button = styled.button`
  border-radius: 4px;
  border: none;
  padding: 10px;
  background: #87B296;
  color: #000;
  box-shadow: 1px 1px 5px #000;

  width: 10%;
  align-items: center;
  justify-content: center;

  max-height: 53px;

  margin: 15px 0px 10px 0px;

  font-size: 1.2rem;

  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #93AABA;
  }
  @media ${device.mobile} {
      width: 100%;
    }
`;