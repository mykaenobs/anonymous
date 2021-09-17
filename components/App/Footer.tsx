import styled from "styled-components";

const Footer = () => {
  return (
    <Foot>
      <Terms>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptate, ullam enim inventore itaque maiores nesciunt obcaecati labore temporibus suscipit.</Terms>
    </Foot>
  );
};

export default Footer;

const Foot = styled.footer`
padding: 0 1em;
`;

const Terms = styled.p`
width: min(450px, 100%);
margin: 3em auto;
font-size: .8rem;
font-weight: 300;
text-align: center;
color: hsl(0, 0%, 50.588235294117645%);
`;