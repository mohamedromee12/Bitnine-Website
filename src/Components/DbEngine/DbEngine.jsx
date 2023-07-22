import {
  Container,
  Header,
  SecondHeader,
  Text,
  CardContainer,
} from "./DbEngine.styled";
import DbCard from "../DbCard/DbCard";

const DbEngine = () => {
  return (
    <Container>
      <Header>AgensSQL DB Engine</Header>
      <SecondHeader>Enhanced Data Security</SecondHeader>
      <Text>AgensSQL is a PostgreSQL-based DBMS</Text>
      <Text>that guarantees optimal security and stability.</Text>
      <CardContainer>
        <DbCard
          image={
            "https://bitnine.net/wp-content/uploads/2022/04/Password-Profile.png"
          }
          texts={[
            "user password policy reinforces login security",
            "excessive failed login attempts lock an account",
            "define rules for password complexity",
          ]}
        />
        <DbCard
          image={
            "https://bitnine.net/wp-content/uploads/2022/04/Data-Redaction.png"
          }
          texts={[
            "enhanced data security of user personal information",
            "resolve privacy issues in preparation for security audits",
            "encryption or masking with unidentifiable special characters",
          ]}
        />
        <DbCard
          image={"https://bitnine.net/wp-content/uploads/2022/04/Auditing.png"}
          texts={[
            "monitors database activities and collects data",
            "traces object accessed or DDL & DML statements executed by a user",
            "records all actions in logs",
          ]}
        />
      </CardContainer>
    </Container>
  );
};

export default DbEngine;
