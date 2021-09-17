import styled from 'styled-components';
import { OptionBtn, ShareBtn } from '@components/Shared/Button';

interface Props {
  message: string,
  name: string,
  date: string
}

const Answer = ({ message, name, date }: Props) => {
  return (
    <Card>
      <small>Message:</small>
      <Message>{message}</Message>
      <Sender>
        <span>{name}</span>
        <span>{date}</span>
        {/* <span>08-09-2021 06:59 GMT</span> */}
      </Sender>
      <More>
        <ShareBtn title="Share Response" />
        <OptionBtn title="More Option" />
      </More>
    </Card>
  );
};

export default Answer;

const Card = styled.div`
background-color: hsl(0, 0%, 22.745098039215687%);
margin: 1.5em 0;
border-radius: 20px;
padding: 1em;

small {
color: ${({theme}) => theme.ltc}
}
`;

const Message = styled.p`
font-size: .85rem;
`;

const Sender = styled.div`
margin: 1em 0;
display: flex;
align-items: center;
justify-content: space-between;
color: ${({theme}) => theme.ltc};
font-size: .8rem;
`;

const More = styled.div`
display: flex;
gap: 1em;

a {
  white-space: nowrap;
  &:first-child {
    flex: 1.4;
  }
  &:last-child {
    flex: 1;
  }
}
`;
