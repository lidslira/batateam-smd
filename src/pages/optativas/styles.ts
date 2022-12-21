import styled from 'styled-components';
import { device } from '../../constants/breakpoints';

interface ButtonProps {
  index: number;
}


export const Container = styled.div`
  align-items: center;
  width: 100%;
  h1 {
    font-family: 'Poppins', sans-serif;
    word-wrap: break-word;
    font-weight: bold;
    font-size: 2.6rem;
    margin: 40px 20px 20px 20px;
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    word-wrap: break-word;
    font-size: 1.3rem;
    font-weight: 700;
    margin: 15px 20px 25px 20px;
  }

  p {
    font-family: 'Poppins', sans-serif;
    margin: 0px 0px 4px 20px;
    font-weight: 300;
  }
`;

export const TextContainer = styled.div`
  margin: 20px 10px 0px 40px;
  width: 30%;
`; 

export const AreaSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  padding: 10px 0px 30px 0px;
  align-items: center;
  justify-content: center;
  background-color: rgba(211,211,211, 0.2);

  div {
    justify-content: center;
  }
`;

export const SemesterContainer = styled.div`
  @media (${device.mobile}) {
    width: 100%;
  }
  width: 40%;
  margin-top: 30px;
`;

export const Button = styled.div<ButtonProps>`
  border-radius: 10px;
  border: none;
  padding: 10px;
  background-color: ${({ index }) => index % 2 === 0 ? '#DCE4E3' : '#D1D8D7'};
  color: #000;
  box-shadow: 1px 1px 5px #000;

  font-family: 'Poppins', sans-serif;
  font-weight: 300;

  text-align: center;
  align-items: center;
  justify-content: center;

  max-height: 53px;

  margin: 15px 20px 10px 20px;

  font-size: 1rem;
`;

export const ButtonGoBack = styled.button`
  display: flex;
  font-size: 1.1rem;
  margin: 50px 0px 20px 0px;
  justify-content: center;
  align-self: center;

  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 1px 1px 5px #000;

  cursor: pointer;
  
  background-color: transparent;
  border: none;
  border-radius: 12px;
  background-color: #8BAB9A;
  padding: 15px;
  width: 300px;
`;

export const ButtonChangeTrail = styled.button`
  display: flex;
  font-size: 1.1rem;
  margin: 10px 0px 20px 0px;
  justify-content: center;
  align-self: center;

  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  color: #8BAB9A;
  text-decoration: underline;

  cursor: pointer;
  
  background-color: transparent;
  border: none;
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 1; 
  padding-top: 300px; 
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 12px;
  width: 30%;
  align-items: center;
  p {
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    cursor: pointer;
    :hover{
      color: #8BAB9A;
      text-decoration: underline;
    }
  }

  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

.close:hover,
.close:focus {
  color: #8BAB9A;
  text-decoration: none;
  cursor: pointer;
}
`;