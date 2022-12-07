import styled from 'styled-components';
import { device } from '../../../constants/breakpoints';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  margin: 0px 0px 0px 0px;
  padding: 5px;
  @media ${device.mobile} {
    margin: 0px 20px 0px 20px;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  justify-content: center;
`;

export const Section = styled.section`
  max-width: 400px;
  width: 100%;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    word-wrap: break-word;    
    font-size: 2.5rem;
    margin-bottom: 20px;
    
    @media ${device.mobile} {
      font-size: 2rem;
    }
  }
  h2 {
    font-family: 'Poppins', sans-serif;
    word-wrap: break-word;
    margin-bottom: 20px;
    
    @media ${device.mobile} {
      font-size: 2rem;
    }
  }

  p {
    font-family: 'Poppins', sans-serif;
    margin: 10px 0px 5px 0px;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.8rem;
   
    cursor: pointer;
    transition: background 0.2s;

    @media ${device.mobile} {
      font-size: 0.9rem;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  justify-content: center;
  margin: 0px 45px 0px 0px;
  max-width: 200px;
  padding: 0px 3px 0px 3px;
  border: 2px dashed black;

  @media ${device.mobile} {
    height: 350px;
    margin: 0px 25px 0px 0px;
  }
`;

export const Image = styled.img`
  height: 105%;
  align-items: center;
`;

export const Recomendations = styled.div`
  margin: -50px 30px 100px 130px;

  p {
    font-family: 'Poppins', sans-serif;
    margin: 10px 0px 5px 0px;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.5rem;
  
    @media ${device.mobile} {
      font-size: 0.9rem;
      margin: -60px 0px 100px -100px;
    }
  }
  ul {
    margin: 15px;
    @media ${device.mobile} {
      margin: -60px 0px 100px -100px;
    }
  }
  li {
    font-family: 'Poppins', sans-serif;
    margin: 10px 0px 5px 0px;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2rem;
    @media ${device.mobile} {
      font-size: 0.9rem;
    }
  }
`;