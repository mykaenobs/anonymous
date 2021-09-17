import Link from 'next/link';
import styled from "styled-components";
import { InlineIcon } from '@iconify/react';

const Button = ({title}) => {
  return <ButtonLink>{title}</ButtonLink>;
};

const ShareBtn = ({title}) => {
  return <Link href=""><Share as="a">{title} <span><InlineIcon icon="mdi:share" /></span></Share></Link>;
};

const OptionBtn = ({title}) => {
  return <Link href=""><Option as="a">{title} <span><InlineIcon icon="mdi:dots-vertical" /></span></Option></Link>;
};

export { Button, ShareBtn, OptionBtn };

const ButtonLink = styled.button`
background-color: ${({ theme }) => theme.accent};
display: block;
padding: .8em 0;
text-align: center;
border-radius: 5px;
width: 100%;
border: none;
color: white;
font-family: Poppins, 'sans-serif'
`;

const Share = styled(ButtonLink)`
background-color: ${({theme}) => theme.accent2};

display: flex;
justify-content: center;
align-items: center;
gap: .5em;

span {
  display: grid;
  place-items: center;
  font-size: 1rem;
}
`;

const Option = styled(Share)`
background-color: ${({theme}) => theme.lg};
`;
