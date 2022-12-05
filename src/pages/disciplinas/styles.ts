import styled from 'styled-components';

interface AreaProps {
  hasSpecialBg?: boolean;
}

export const ContainerDiv = styled.main`
  width: 100%;
`;

export const AreaSection = styled.section<AreaProps>`
  width: 100%;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${({ hasSpecialBg }) => hasSpecialBg ? '#F1EDE6' : '#fff'};
`;

export const Container = styled.div`
  width: 105%;
  display: flex;
  margin: 40px 0px 20px 0px;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;

  h1 {
    font-family: 'Poppins', sans-serif;
    word-wrap: break-word;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    word-wrap: break-word;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 15px 20px 25px 20px;
  }

  p {
    font-family: 'Poppins', sans-serif;
    margin-bottom: 4px;
    font-weight: normal;
    text-align: center;
  }
`;

export const Button = styled.div`
  border-radius: 10px;
  border: none;
  padding: 10px;
  background: #DECBC0;
  color: #000;
  box-shadow: 1px 1px 5px #000;

  font-family: 'Poppins', sans-serif;

  /* width: 100%; */ //SEE LATER
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  max-height: 53px;

  margin: 15px 20px 10px 20px;

  font-size: 1.2rem;
`;