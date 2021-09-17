import { Button } from "@components/Shared/Button";
import styled from "styled-components";

const Register = () => {
  return (
    <Form>
      <Container>
        <Title>Sign Up</Title>
        <InputGroup>
          <FloatingLabel>Enter Your Username</FloatingLabel>
          <Input type="text" placeholder="e.g johndoe" />
        </InputGroup>
        <Hr />
        <InputGroup>
          <FloatingLabel>Enter Your Email</FloatingLabel>
          <Input type="email" placeholder="e.g example@example.com" />
        </InputGroup>
        <Hr />
        <InputGroup>
          <FloatingLabel>Enter Your Password</FloatingLabel>
          <Input type="password" placeholder="e.g secret" />
        </InputGroup>
        <Hr />
        <ButtonWrapper>
          <Button  title="Sign Up" />
        </ButtonWrapper>
      </Container>
    </Form>
  );
}

export default Register;


const Form = styled.form`
padding: 0 1em;
`;

const Container = styled.div`
background-color: ${({theme}) => theme.bg};
width: min(450px, 100%);
margin: 0 auto;
border-radius: 20px;
border: 1px solid ${({theme}) => theme.bd};
`;

const Title = styled.h2`
font-weight: 600;
border-bottom: 1px solid ${({theme}) => theme.bd};
margin-bottom: 1.4em;
padding: .8em 1rem;
font-size: clamp(1.3rem, 3vw, 1.5rem)
`;

const Hr = styled.hr`
background-color: ${({theme}) => theme.bd};
border: none;
height: 1px;
margin: 2em 0;
`;

const InputGroup = styled.div`
position: relative;
display: flex;
align-items: center;
padding: 0 1em;
`;

const FloatingLabel = styled.label`
font-size: .8rem;
background-color: ${({theme}) => theme.bg};
padding: 0 .5em;
position: absolute;
left: 1.8rem;
bottom: 82%;
color: ${({theme}) => theme.ltc};
`;

const Input = styled.input`
width: 100%;
height: 3.5em;
background-color: ${({theme}) => theme.bg};
border: 2px solid ${({theme}) => theme.bd};
border-radius: 5px;
padding: 0 1.2em;
color: white;
`;

const ButtonWrapper = styled.div`
padding: 0 1em 1.5em 1em;

`
