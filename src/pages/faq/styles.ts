import styled from 'styled-components';

export const ContainerDiv = styled.main`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
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
    font-size: 1.5rem;
    font-weight: normal;
    margin-bottom: 10px;
  }

  p {
    font-family: 'Poppins', sans-serif;
    margin-bottom: 4px;
    font-weight: normal;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  background-color: #F1EDE6;
  padding: 15px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  p {
    font-family: 'Poppins', sans-serif;
    margin: 0px 5px 0px 4px;
    font-weight: 500;
  }
`;

export const AnswerContainer = styled.div`
  display: flex;
  background-color: #fff;
  padding: 15px;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: -10px;


  p {
    font-family: 'Poppins', sans-serif;
    margin: 0px 10px 0px 10px;
    font-size: 1rem;
  }
`;
