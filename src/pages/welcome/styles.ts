import styled from 'styled-components';

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
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  justify-content: center;
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

  margin: 20px 0px 20px 50px;

  font-size: 1.25rem;
  font-family: 'Poppins';

  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #93AABA;
  }
`;

export const Section = styled.section`
  max-width: 400px;
  width: 100%;

  h1 {
    font-family: 'Poppins';
    font-weight: bold;
    word-wrap: break-word;    
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-family: 'Poppins';
    margin: 10px 0px 5px 0px;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.8rem;
  }
`;

export const Image = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  margin: 0px 15px 0px 0px;
  max-width: 200px;
  padding: 0px 3px 0px 3px;
  border: 2px dashed black;
`;
