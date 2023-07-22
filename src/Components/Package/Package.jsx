import {
  Container,
  Header,
  Text,
  SecondContainer,
  Child,
  SecondHeader,
  Image,
  CardsContainer,
} from "./Package.styled";
import FlippingCard from "../FlippingCard/FlippingCard";

const Package = () => {
  return (
    <Container>
      <Header>Agens Enterprise Package</Header>
      <Text>
        Agens Enterprise Package comes with a high availability management
        server that
      </Text>
      <Text>
        supports backup and data monitoring dashboard that helps enterprise
        customers manage their data efficiently.
      </Text>
      <SecondContainer>
        <Child>
          <SecondHeader>Agens HA Manager</SecondHeader>
          <Image>
            <img
              src="https://bitnine.net/wp-content/uploads/2022/04/img_AHM_eng-1024x922.png"
              alt="photo"
            />
          </Image>
        </Child>
        <Child>
          <SecondHeader>Agens Enterprise Manager</SecondHeader>
          <CardsContainer>
            <FlippingCard
              title={"Backup/Restore"}
              texts={[
                "provides a convenient interface for backup & restore",
                "provides backup & restore features for DB and table objects",
              ]}
            />
            <FlippingCard
              title={"DB Monitoring Dashboard"}
              texts={[
                "monitors real-time session & transaction lock",
                "provides status for server CPU & memory",
              ]}
            />
            <FlippingCard
              title={"Schedule Management"}
              texts={[
                "provides module for script, SQL job, and scheduling management",
                "provides UX dedicated to scheduling",
              ]}
            />
            <FlippingCard
              title={"Database Audit"}
              texts={[
                "enables auditing via user interface",
                "view audit results via user interface",
              ]}
            />
            <FlippingCard
              title={"SQL Monitoring"}
              texts={[
                "collects query statistics required for performance analysis",
                "extracts monitoring results in query",
              ]}
            />
            <FlippingCard
              title={"Performance Management"}
              texts={[
                "monitors and collects operation status & statistical data",
                "provides status reports required for improving performance",
              ]}
            />
          </CardsContainer>
        </Child>
      </SecondContainer>
    </Container>
  );
};

export default Package;
