import Image from 'next/image';
import styled from "styled-components";

const Account = ({children}) => {
  return (
    <>
    <ResponsiveImage>
      <Image src="/illustrations/login.svg" layout="fill" />
    </ResponsiveImage>
    {children}
    </>
  );
};

export default Account;

const res = '150px';

const ResponsiveImage = styled.div`
position: relative;
width: ${res};
height: ${res};
margin: 0 auto;
`;
