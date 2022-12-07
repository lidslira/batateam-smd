import styled from 'styled-components';

export const ContainerDiv = styled.main`
  width: 100%;
`;

export const AreaSection = styled.section`
  margin-top: 20px;
  width: 100%;
`;

export const Container = styled.div`
  width: 105%;
  display: flex;
  margin-top: 40px;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;

  h1 {
    font-family: 'Poppins', sans-serif;
    word-wrap: break-word;
    font-weight: bold;
    font-size: 1.8rem;
    margin-bottom: 20px;
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
    margin-bottom: 4px;
    font-weight: normal;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  border: none;
  padding: 10px;
  background: #A8C2D3;
  color: #000;
  box-shadow: 1px 1px 5px #000;

  /* width: 100%; */
  display: flex;
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
`;

export const Input = styled.input`
  height: 20px;
  margin: 15px 0px 10px 0px;
  border-radius: 10px;
  padding: 10px;
`;