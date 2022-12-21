import styled from 'styled-components';

export const Footer = styled.footer`
  background: #fff;
  width: 100%;
  height: 100px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  z-index: 1;

  > p {
    margin-right: 5px;
    word-wrap: break-word;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }
`;

export const ImageContainer = styled.div`
  flex-direction: row;
`;

export const Image = styled.img`
  height: 60px;
  margin: 0px 20px 0px 20px;
`;

