import Head from 'next/head'
import Header from '@components/App/Header/Header';
import NoUser from '@components/App/Header/NoUser';
import Account from '@components/Account/Account';
import Login from '@components/Account/Login';
import Footer from '@components/App/Footer';
import Circle from '@components/Shared/Circle';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { selectIsLogged } from '@slice/user/userSlice'
import { useSelector } from 'react-redux';

const LoginPage = () => {
  const isLogged = useSelector(selectIsLogged);
  const router = useRouter();

  useEffect(() => { if (isLogged) router.push('/dashboard') }, [])

  return (
    <>
      <Head>
        <title>Login - User Account | Anomity</title>
      </Head>
      <Header>
        <NoUser />
      </Header>
      <Account>
        <Login />
      </Account>
      <Footer />
      <Circle dimension={'357px'} left={'-95px'} top={'-102px'} right={'0'} bottom={'0'}  />
      <Circle dimension={'259px'} left={'-129px'} top={'200px'} right={'0'} bottom={'0'}  />
    </>
  );
};

export default LoginPage;
