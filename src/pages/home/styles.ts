import styled from 'styled-components';
import { device } from '../../constants/breakpoints';

export const ContainerDiv = styled.div``;

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  padding: 5px;

  .button {
    width: 100%;
    padding: 16px 24px;
    border-radius: 8px;
    border: none;

    background: #333;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 250px;
    max-height: 53px;

    margin: 20px 0px 20px 0px;

    font-size: 1.25rem;

    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: grey;
    }
  }
`;

export const Section = styled.section`
  max-width: 600px;
  width: 100%;

  h1 {
    word-wrap: break-word;
    font-size: 1.8rem;
    margin-bottom: 4px;
  }

  h2 {
    word-wrap: break-word;
    font-size: 1.5rem;
    font-weight: normal;
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