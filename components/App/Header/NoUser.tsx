import styled from "styled-components";
import Link from 'next/link'
import { Icon, InlineIcon } from '@iconify/react'


const NoUser = () => {
  return (
    <User>
      <Flex>
        <Link href='#'><a>User Account</a></Link>
        <AccountIcon><Icon icon="mdi:account-circle-outline" /></AccountIcon>
      </Flex>
      <Drop>
          <Link href='/'><a>Sign In <span><InlineIcon icon="mdi:login-variant" /></span></a></Link>
          <Hr />
          <Link href='/register'><a>Sign Up <span><InlineIcon icon="mdi:account-plus" /></span></a></Link>
      </Drop>
    </User>
  );
} 

export default NoUser;


const User = styled.div`
position: relative;
a {
  font-size: clamp(.8rem, 3vw, .9rem);
}
&:hover div:last-child {
  display: block;
}
`;

const Flex = styled.div`
display: flex;
gap: 1em;
align-items: center;
`;

const AccountIcon = styled.span`
  display: grid;
  place-items: center;
  font-size: 1.6rem;
  height: 38px;
  width: 38px;
  background-color: ${({theme}) => theme.accent};
  border-radius: 6px;

`;

const Drop = styled.div`
background-color: hsl(0, 0%, 18.823529411764707%);
border-radius: 10px;
position: absolute;
top: 100%;
width: 100%;

display: none;

a {
  color: hsl(0, 0%, 50.588235294117645%);
  font-size: .8rem;
  display: block;
  padding: .8em;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: inline-block;
    /* background-color: hsl(0, 0%, 50.588235294117645%);; */
    border-radius: 50%;
    font-size: 1rem;
  }
}
`;

const Hr = styled.hr`
background-color: hsl(0, 0%, 25.098039215686274%);
border: none;
height: 1px;
margin: 0 .6em;
`;