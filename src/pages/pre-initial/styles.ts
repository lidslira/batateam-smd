import styled from 'styled-components';
import { device } from '../../constants/breakpoints';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  padding: 5px 15px 5px 15px;

  .button {
    width: 100%;
    padding: 16px 24px;
    border-radius: 8px;
    border: none;

    background: #A8C2D3;
    box-shadow: 1px 1px 9px #000;
    color: #000;

    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 250px;
    max-height: 53px;

    margin: 30px 0px 20px 0px;

    font-size: 1.25rem;

    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #93AABA;
    }
  }
`;

export const Section = styled.section`
  max-width: 600px;
  width: 100%;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    word-wrap: break-word;
    font-size: 4rem;
    margin-bottom: 0px;
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    word-wrap: break-word;
    font-size: 2rem;
    font-weight: normal;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 4px;
    font-weight: normal;
  }

  a{
    
  }

  .skip {
    display: flex;
    font-size: 1.25rem;
    margin-top: 10px;
    justify-content: end;

    cursor: pointer;
    
    background-color: transparent;
    border: none;
  }
`;

export const Skip = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: end;
`;