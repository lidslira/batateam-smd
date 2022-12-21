import styled from 'styled-components';
import { device } from '../../../constants/breakpoints';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
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
  align-items: center;
  justify-content: center;
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

export const AreaSection = styled.section`
  width: 100%;
  padding: 30px 0px 20px 0px;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: rgba(211,211,211, 0.2);

  h2 {
    font-family: 'Poppins', sans-serif;
    word-wrap: break-word;
    margin-bottom: 20px;
    
    @media ${device.mobile} {
      font-size: 2rem;
    }
  }
`;


export const ImageContainer = styled.div`
  display: flex;
  height: 500px;
  width: 100%;
  justify-content: center;
  margin: 0px 100px 0px 100px;
  max-width: 200px;
  padding: 0px 3px 0px 3px;

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
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
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
