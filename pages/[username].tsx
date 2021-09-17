import Head from 'next/head';
import Header from '@components/App/Header/Header';
import Footer from '@components/App/Footer';
import Content from '@components/Shared/Content';
import styled from 'styled-components';
import NoUser from '@components/App/Header/NoUser';
import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
import Axios from 'axios';

const Message = () => {
	const { query } = useRouter();
	const [msg, setMsg] = useState({ message: '', class: '' });
	const [messageInput, setMessageInput] = useState(null);
	const textArea = useRef(null);

	const message = async () => {
		const mgs = {
			message: messageInput,
			username: query.username,
		};
		const send = await Axios.post('http://localhost:8000/api/send', mgs);
		const {data, status} = await send;
		if (status == 200) {
			setMsg({message: data.message, class: 'move'});
			textArea.current.value = ''
		} else {
			setMsg({ message: 'Error sending message! Try again.', class: ''});
		}
	};

	return (
		<>
			<Head>
				<title>Send Message - User Account | Anomity</title>
			</Head>
			<Header>
				<NoUser />
			</Header>
			<Content title={'Send ' + query.username + ' An Anonymous Message'}>
				<Bubble className={msg.class}>{ msg.message }</Bubble>
				<Form>
					<Label>
						<Title>I Dare You To Write Me</Title>{' '}
						<Words>255 letters remaining</Words>
					</Label>
					<TextArea ref={textArea}
						placeholder='Write an anonymous message...'
						name='message' onChange={(e) => setMessageInput(e.target.value)}></TextArea>
				</Form>
				<Button onClick={message}>Send Message</Button>
			</Content>
			<Footer />
		</>
	);
};

export default Message;

const Form = styled.form``;

const Label = styled.label`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.span`
	font-size: 1rem;
	color: white;
	font-weight: 600;
`;

const Words = styled.span`
	color: ${({ theme }) => theme.dtc};
	font-size: 0.8rem;
	font-weight: 300;
`;

const TextArea = styled.textarea`
	width: 100%;
	height: 15em;
	font-size: 0.8rem;
	background-color: ${({ theme }) => theme.bg};
	border: 2px solid ${({ theme }) => theme.bd};
	border-radius: 5px;
	padding: 1em;
	color: white;
	margin: 1em 0;
	resize: none;
	font-family: Poppins;
`;

const Button = styled.button`
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

const Bubble = styled.div`
background-color: ${({theme}) => theme.bg};
position: absolute;
top: -2em;
left: 50%;
transform: translateX(-50%);
border-radius: 10px;
padding: 1em 2em;
color: hsl(160, 100%, 50%);
transition: top .5s ease-in-out;

&.move {
	top: 2em;
}
`;