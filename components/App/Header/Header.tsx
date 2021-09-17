import Link from 'next/link';
import styled from "styled-components";

import { useSelector, useDispatch } from 'react-redux';
import { selectIsLogged } from '@slice/user/userSlice';

const Header = ({ children }) => {
  const isLogged = useSelector(selectIsLogged);

  return (
    <Head>
      <Logo><Figure>A</Figure> <p>Anomity</p></Logo>
      { children }     
    </Head>
  );
};

export default Header;

const Head = styled.header`
width: min(1088px, 100%);
margin: 0 auto;
padding: 2em 1em 1em 1em;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Logo = styled.div`  
display: flex;
align-items: center;
gap: clamp(.5rem, 2vw, 1rem);

p {
  text-transform: uppercase;
  font-weight: 500;
  font-size: clamp(.8rem, 3vw, 1rem);
}
`;

const Figure = styled.h1`
background-color: hsl(328, 100%, 50%);
display: inline-block;
padding: .1em .5em;
border-radius: 16px;
font-size: clamp(1rem, 5vw, 2rem);
`;