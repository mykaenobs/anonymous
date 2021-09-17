import Link from 'next/link';
import styled from "styled-components";

const Circle = ({dimension, top, left, right, bottom}) => {
  return <Shape dimension={dimension} top={top} left={left} right={right} bottom={bottom}></Shape>;
};

export default Circle;

interface Position {
  top: string,
  right: string,
  bottom: string,
  left: string,
  dimension: string;
}

const Shape = styled.div<Position>`
height: ${({dimension}) => dimension};
width: ${({dimension}) => dimension};

position: absolute;
inset: ${({ top }) => top} ${({ right }) => right} ${({ bottom }) => bottom} ${({ left }) => left};
z-index: -1;
background-color: hsl(0, 0%, 16.862745098039216%);


border-radius: 50%;

`;