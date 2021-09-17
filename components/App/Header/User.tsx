import styled from "styled-components";
import Link from 'next/link'
import { InlineIcon } from '@iconify/react'
import Axios from 'axios'
import { useRouter } from 'next/router'

import { useSelector, useDispatch } from 'react-redux';
import { selectIsLogged, selectUser, setIsLogged, setUser } from '@slice/user/userSlice';
import { useEffect } from "react";

import Cookies from 'js-cookie'

const User = () => {
  const isLogged = useSelector(selectIsLogged);
  const user = useSelector(selectUser);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => { if (!isLogged) router.push('/') }, [])

  const logout = async () => {
    
    const options = {
      withCredentials: true,
    }
    const logout = await Axios.delete('http://localhost:8000/api/logout', options);
    const { status, data } = await logout;
    if (status == 200) {
      console.log(data)
      dispatch(setIsLogged(false));
      dispatch(setUser(null));
      Cookies
      router.push('/');
    }
  };

  return (
    <LoggedIn>
      <Flex>
        <Link href='#'><a> {user?.username}</a></Link>
        <Avatar>{ user?.username.slice(0, 1).toUpperCase() }</Avatar>
      </Flex>
      <Drop>
          <Link href='#logout'><a onClick={logout}>Sign Out<span><InlineIcon icon="mdi:exit-run" /></span></a></Link>
      </Drop>
    </LoggedIn>
  );
} 

export default User;


const Flex = styled.div`
display: flex;
gap: 1em;
align-items: center;
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

const LoggedIn = styled.div`
position: relative;
a {
  font-size: clamp(.8rem, 3vw, .9rem);
}
&:hover div:last-child {
  display: block;
}
`;

const Avatar = styled.span`
display: grid;
place-items: center;
font-size: 1.6rem;
height: 38px;
width: 38px;  
border-radius: 6px;
background-color: ${({theme}) => theme.accent2};
font-weight: 700;
`;