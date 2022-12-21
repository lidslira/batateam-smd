import styled from "styled-components";

interface FillerStyleProps{
  width: number;
}

export const Container = styled.div`
  height: 22px;
  width: 200px;
  background-color: #87B296;
  margin-bottom: 20px;
  justify-content: center;
`;

export const Filler = styled.div<FillerStyleProps>`
  height: 100%;
  background-color: #688CA5;
  text-align: right;
  transition: width 1s ease-in-out;
  width: ${({ width }) => `${width}%`};
`;

export const Span = styled.span`
  padding: 5px;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
`;