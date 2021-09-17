import styled from "styled-components";

const Title = ({title}) => {
  return <ContentTitle>{title}</ContentTitle>
};

export default Title;

const ContentTitle = styled.h1`
font-weight: bold;
text-align: center;
margin-bottom: 1em;
font-size: clamp(1.5rem, 3vw, 2em);
`;