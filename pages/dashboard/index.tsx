import { useEffect } from 'react'
import Head from 'next/head'
import { InlineIcon } from '@iconify/react'

import Header from '@components/App/Header/Header'
import NoUser from '@components/App/Header/User'
import Footer from '@components/App/Footer'
import Content from '@components/Shared/Content'
import styled from 'styled-components'
import { Button } from '@components/Shared/Button'

import Axios from 'axios'
import { GetServerSideProps } from 'next'

import { useSelector, useDispatch } from 'react-redux'
import { selectUser, setUser } from '@slice/user/userSlice'

import Cookies from 'js-cookie'
// import useSWR from 'swr'


const fetcher = url => Axios.get(url, { withCredentials: true });

const Dashboard = ({ user,cookie }) => {
  const detail = useSelector(selectUser)
  const dispatch = useDispatch();
  // const { data, error } = useSWR('http://localhost:8000/api/user', fetcher);
  
  // if (!data) return <Loading><p>Loading...</p></Loading>;
  // dispatch(setUser(data.data));

  useEffect(() => {
    dispatch(setUser(user))
    console.log(cookie)
  }, [])
  
  return (
    <>
    <Head>
      <title>Dashboard - User Account | Anomity</title>
    </Head>
    <Header>
      <NoUser />
    </Header>
      <Content title={detail?.username + '\'s you Profile'}>
      <ProfileLink>
        <p>http://anomity/{detail?.username.toLowerCase()}</p>
        <span><InlineIcon icon="mdi:feather" /></span>
      </ProfileLink>
      <ProfileDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque distinctio, exercitationem voluptatibus deserunt ipsam temporibus!
      </ProfileDescription>
      <ProfileCard as="a" href="/messages" color="#0044ff">
        <p>View Messages</p>
        <span><InlineIcon icon="mdi:arrow-right" /></span>
      </ProfileCard>
      <ProfileCard as="a" href="#" color="#ff444a">
        <p>Share My Profile</p>
        <span><InlineIcon icon="mdi:share-variant" /></span>
      </ProfileCard>
      <ProfileCard as="a" href="#" color="#128C7E">
        <p>Share On WhatsApp</p>
        <span><InlineIcon icon="mdi:whatsapp" /></span>
      </ProfileCard>
      <ProfileCard as="a" href="#" color="#3B5998">
        <p>Share On Facebook</p>
        <span><InlineIcon icon="mdi:facebook" /></span>
      </ProfileCard>
      <ProfileCard as="a" href="#" color="linear-gradient(to right, #833AB4, #FD1D1D)">
        <p>Share On Instagram</p>
        <span><InlineIcon icon="mdi:instagram" /></span>
      </ProfileCard>
      <Button title="Settings" />
    </Content>
    <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({req}) => {
  // const cookie = decodeURIComponent(req.headers.cookie.split('=')[1])
  const cookie = decodeURIComponent(req.headers.cookie)
  
  // const response = await Axios.get('http://localhost:8000/api/user', { 
  //   headers: { 'Authorization': 'Bearer ' + cookie },
  //   withCredentials: true,
  // });
  
  return {
    props: {
      // user: await response.data,
      cookie
    }
  }
}

export default Dashboard;

const Loading = styled.div`
position: fixed;
inset: 0;
background-color: ${({theme}) => theme.main};
display: grid;
place-items: center;
color: ${({theme}) => theme.accent};

p {
  font-size: 2.5rem;
  font-weight: 700;
}

`;

const ProfileLink = styled.div`

display: flex;
align-items: center;
justify-content: space-between;

p {
  color: hsl(0, 0%, 56.07843137254902%);
  font-size: .8rem;
}

span {
  display: grid;
  place-items: center;
  height: 24px;
  width: 24px;
  background-color: hsl(0, 0%, 23.137254901960784%);
  border-radius: 50%;
}
`;

const ProfileDescription = styled.p`
color: hsl(0, 0%, 76.86274509803923%);
font-size: .75rem;
margin-top: 1.4em;
`;

interface Color {
  color: string
}

const ProfileCard = styled(ProfileLink)<Color>`
background: ${({color}) => color};
margin: 1.5em 0;
padding: 1em;
border-radius: 10px;

p {
  color: white;
  font-size: .9rem;
}

span {
  background-color: ${({theme}) => theme.trans};
}

&:hover {
  box-shadow: 3px 2px 6px hsla(0, 0%, 0%, 16%)
}
`;