import Head from 'next/head'
import Header from '@components/App/Header/Header';
import User from '@components/App/Header/User';
import Footer from '@components/App/Footer';
import Content from '@components/Shared/Content';
import styled from 'styled-components';
import Answer from '@components/Account/Answer';
import { Button } from '@components/Shared/Button';

import Axios from 'axios'
import { GetServerSideProps } from 'next'
import { useEffect } from 'react'

import { setUser } from '@slice/user/userSlice'
import { useDispatch } from 'react-redux'

const Messages = ({ user, answers }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUser(user))
  }, [])

  return (
    <>
    <Head>
      <title>My Messages - User Account | Anomity</title>
    </Head>
    <Header>
      <User />
    </Header>
    <Content title="My Answers">
      <Info>
        Lorem ipsum {String.fromCodePoint(0x1F344)} dolor sit amet consectetur adipisicing elit. Cumque distinctio, exercitationem voluptatibus deserunt ipsam temporibus!
      </Info>
      { answers.map(answer => {
          return <Answer key={answer.id} message={answer.message} name={answer.name} date={answer.created_at} />
      }) }
      <Button title="Go Back" />
    </Content>
    <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
  const cookie = decodeURIComponent(req.headers.cookie.split('=')[1]);
  const options = {
    headers: { 'Authorization': 'Bearer ' + cookie },
    withCredentials: true,
  }

  const user = await Axios.get('http://localhost:8000/api/user', options);
  const answers = await Axios.get('http://localhost:8000/api/answers', options);

  return {
    props: {
      user: await user.data,
      answers: await answers.data,
    }
  }
}

export default Messages;

const Info = styled.p`
color: ${({theme}) => theme.ltc};
font-size: .75rem;
`;