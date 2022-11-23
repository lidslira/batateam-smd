import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: calc(100vh - 70px);
  padding: 0 1.5rem;

  display: grid;
  grid-template-rows: 1fr 100px;
  gap: 2rem; 


  .button {
    width: 90%;
    margin-top: 32px;
    padding: 16px 24px;
    border-radius: 10px;
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

  .skip {
    font-size: 1.25rem;
    margin-top: 10px;
    width: 70px;

    cursor: pointer;
    
    background-color: transparent;
    border: none;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 700px;
  max-height: 700px;

  display: grid;
  align-items: center;


  > p {
    font-size: 2.25rem;
    margin: 0px;
  }
`;

export const Box = styled.div`
  width: 100%;

  > p {
    font-size: 2rem;
  }
`;

export const ButtonContainer = styled.div`
  float: right;
  position: absolute;
  bottom: 310px;
  right: 450px;
  align-self: center;
`;

