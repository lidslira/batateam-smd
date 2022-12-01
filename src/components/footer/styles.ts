import styled from 'styled-components';

export const Footer = styled.footer`
  background: #688CA5;
  width: 110%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > p {
    margin-right: 5px;
    word-wrap: break-word;
  }
`;

export const ImageContainer = styled.div`
  display: inline-block;
  flex-direction: row;
`;

export const Image = styled.img`
  margin: 0px 5px 0px 5px;
`;

