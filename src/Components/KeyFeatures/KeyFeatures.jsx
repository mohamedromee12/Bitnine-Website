import { Container, Header, Text, Image } from "./KeyFeatures.styled";

const KeyFeatures = () => {
  return (
    <Container>
      <Header>Key features</Header>
      <Text>Manage your data with Agens Enterprise Package</Text>
      <Text>
        Essential enterprise features such as high availability and sharding are
        provided
      </Text>
      <Image>
        <img
          src="https://bitnine.net/wp-content/uploads/2022/04/img_key-features_eng.png"
          alt="photo"
        />
      </Image>
    </Container>
  );
};

export default KeyFeatures;
