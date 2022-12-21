import styled from 'styled-components';

export const ContainerDiv = styled.main`
`;

export const Container = styled.div`
  display: flex;
  margin: 60px 300px 60px 300px;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;

  h1 {
    font-family: 'Poppins', sans-serif;
    word-wrap: break-word;
    font-weight: 700;
    font-size: 2.5rem;
    margin-bottom: 20px;
    align-self: baseline;
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
  background-color: #DCE4E3;
  border-radius: 12px;
  padding: 15px 15px 15px 15px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0px 0px 20px 0px;

  p {
    font-family: 'Poppins', sans-serif;
    margin: 5px 15px 5px 15px;
    font-weight: 600;
    color: #7E8281;
  }
`;

export const AnswerContainer = styled.div`
  display: flex;
  background-color: #DCE4E3;
  border-radius: 12px;
  padding: 15px 15px 15px 15px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: -35px 0px 20px 0px;


  p {
    font-family: 'Poppins', sans-serif;
    margin: 0px 30px 0px 30px;
    font-size: 1rem;
    font-weight: 300;
    color: #7E8281;
  }
`;
