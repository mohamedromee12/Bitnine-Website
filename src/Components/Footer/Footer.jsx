import {
  Container,
  PartsContainer,
  Part,
  Header,
  Text,
  LinksContainer,
  Add,
  Icons,
} from "./Footer.styled";


import { BsGithub } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <PartsContainer>
        <Part>
          <Header>PRODUCTS</Header>
          <Text>Relational Database</Text>
          <Text>Graph Database</Text>
          <Text>Graph-based Solution</Text>
        </Part>
        <Part>
          <Header>USE CASES</Header>
        </Part>
        <Part>
          <Header>SERVICES</Header>
        </Part>
        <Part>
          <Header>RESOURCES</Header>
          <Text>Documentation</Text>
          <Text>Learn</Text>
        </Part>
        <Part>
          <Header>BLOG</Header>
        </Part>
        <Part>
          <Header>COMPANY</Header>
          <Text>About Us</Text>
          <Text>Contact</Text>
        </Part>
      </PartsContainer>
      <LinksContainer>
        <Add>
          <AiOutlineCopyrightCircle /> 2023 by Bitnine Global Inc. All Rights
          Reserved.
        </Add>
        <Icons>
          <span>
            <BsGithub />
          </span>
          <span>
            <AiFillYoutube />
          </span>
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaLinkedinIn />
          </span>
          <span>
            <FaFacebook />
          </span>
        </Icons>
      </LinksContainer>
    </Container>
  );
};

export default Footer;
