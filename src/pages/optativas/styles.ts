import styled from 'styled-components';
import { device } from '../../constants/breakpoints';

interface AreaProps {
  hasSpecialBg?: boolean;
}

export const Container = styled.div`
  align-items: center;
  width: 105%;
  h1 {
    font-family: 'Poppins', sans-serif;
    word-wrap: break-word;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 20px 0px 20px 20px;
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
    margin: 0px 0px 4px 20px;
    font-weight: normal;
  }
`;

export const AreaSection = styled.section<AreaProps>`
  width: 101%;
  margin-top: 20px;
  padding: 10px 0px 10px 0px;
  align-items: center;
  justify-content: center;
  background-color: ${({ hasSpecialBg }) => hasSpecialBg ? '#F1EDE6' : '#fff'};

  div {
    /* width: 60%; */
    justify-content: center;
  }
`;

export const SemesterContainer = styled.div`
  @media (${device.mobile}) {
    width: 100%;
  }
  width: 40%;
`;

export const Button = styled.div`
  border-radius: 10px;
  border: none;
  padding: 10px;
  background: #DECBC0;
  color: #000;
  box-shadow: 1px 1px 5px #000;

  font-family: 'Poppins', sans-serif;

  text-align: center;
  align-items: center;
  justify-content: center;

  max-height: 53px;

  margin: 15px 20px 10px 20px;

  font-size: 1rem;
`;