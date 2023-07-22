import {
  Container,
  Image,
  Header,
  Text,
  ButtonsContainer,
  Button,
} from "./Agens.styled";

const Agens = () => {
  return (
    <Container>
      <Image>
        <img
          src="https://bitnine.net/wp-content/uploads/2022/04/AgenSQL-Logo.png"
          alt="photo"
        />
      </Image>
      <Header>
        An integration of Bitnine’s DB technology and PG expertise
      </Header>
      <Text>
        AgensSQL is an all-new relational DBMS based on PostgreSQL, with years
        of expertise and knowledge accumulated through database research and
        development.
      </Text>
      <Text>
        The enterprise package, along with AgensSQL engine, is an all-in-one
        solution that ensures the efficiency and scalability of data management.
      </Text>
      <Text>
        Get AgensSQL now for stable operation and management services at a
        reduced maintenance cost.
      </Text>
      <ButtonsContainer>
        <Button>CONTACT</Button>
        <Button>BROCHURE</Button>
        <Button>BLOG</Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Agens;
