import styled from 'styled-components';
import { device } from '../../constants/breakpoints';

interface DotProps {
  isActive: boolean;
}

interface ButtonProps {
  disabled: boolean;
}

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  padding: 5px;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DotsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button<ButtonProps>`
  border-radius: 4px;
  border: none;
  padding: 10px;
  background: ${({ disabled }) => disabled ? 'rgb(190, 190, 190)' : '#B24BF3'};
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  max-height: 53px;

  margin: 20px 0px 20px 0px;

  font-size: 1.25rem;

  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: grey;
  }
`;

export const DotDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Dot = styled.div<DotProps>`
  border-radius: 15px;
  width: 3px;
  height: 3px;
  margin: 10px 5px 10px 5px;
  background: ${({ isActive }) => isActive ? '#333' : 'rgb(190, 190, 190)'};
  padding: 5px;
`;

export const Section = styled.section`
  max-width: 500px;
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

  div {
    flex-direction: row;
  }
`;

export const Image = styled.div`
  display: flex;
  height: 300px;
  width: 100%;
  max-width: 300px;
  padding: 0px 3px 0px 3px;
  border: 1px dashed black;
`;