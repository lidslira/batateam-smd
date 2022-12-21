import styled from "styled-components";

interface FillerStyleProps{
  width: number;
}

export const Container = styled.div`
  height: 20px;
  width: 300px;
  background-color: #DCE4E3;
  border-radius: 12px;
  margin-bottom: 20px;
  justify-content: center;
`;

export const Filler = styled.div<FillerStyleProps>`
  height: 100%;
  border-radius: 12px;
  background-color: #87B295;
  text-align: right;
  transition: width 1s ease-in-out;
  width: ${({ width }) => `${width}%`};
`;

export const Span = styled.span`
  padding: 5px;
  color: #000;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
`;