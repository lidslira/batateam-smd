import styled from 'styled-components';
import colors from '../../constants/colors';

interface SectionProps {
  isDisciplinas?: boolean;
}

export const ContainerDiv = styled.div`
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;


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

export const AreaSection = styled.section<SectionProps>`
  margin-top: 20px;
  width: 100%;
  height: ${({ isDisciplinas }) => isDisciplinas ? '500px' : 'auto'};
  align-items: center;
  justify-content: center;
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

export const ButtonContainer = styled.div`
  flex-direction: row;
  display: flex;
  height: 100%;
  /* background-color: red; */
  justify-content: space-around;
`;

export const Button = styled.button`
  border-radius: 12px;
  border: none;
  padding: 15px;
  background-color: #8BAB9A;
  color: #fff;
  box-shadow: 1px 1px 5px #000;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  max-height: 53px;

  margin: 15px 0px 10px 0px;

  font-size: 1.2rem;

  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #8BAB8E;
  }
`;

export const ButtonDisciplinas = styled.button`
  border-radius: 12px;
  border: none;
  padding: 10px;
  background-color: #8BAB9A;
  color: #fff;
  box-shadow: 1px 1px 5px #000;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;

  width: 100%;
  display: inline-block;
  align-items: center;
  justify-content: center;

  margin: 0px 10px 0px 10px;

  font-size: 1.2rem;

  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #8BAB8E;
  }
`;