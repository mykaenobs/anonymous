import styled from "styled-components";
import Title from './Title';

const Content = ({children, title}) => {
  return (
    <>
      <Title title={title} />
      <Wrapper>
        <Main>
          {children}
        </Main>
      </Wrapper>
    </>
  );
};

export default Content;

const Wrapper = styled.div`
padding: 0 1em;
`;

const Main = styled.div`
width: min(450px, 100%);
margin: 0 auto;
background-color: ${({theme}) => theme.bg};
border-radius: 20px;
padding: 1em;
`;
