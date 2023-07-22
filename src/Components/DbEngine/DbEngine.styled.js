import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: rgb(243, 246, 251);
  padding: 80px 0;

  @media (max-width: 768px) {
  }
`;

export const Header = styled.h4`
  width: 100%;
  text-align: center;
  color: black;
  font-weight: bold;
  margin: 60px 0 20px;
  font-size: 32px;

  @media (max-width: 768px) {
  }
`;

export const SecondHeader = styled.h4`
  width: 100%;
  text-align: center;
  color: #444444;
  font-weight: bold;
  margin: 20px 0 20px;
  text-decoration: underline;

  @media (max-width: 768px) {
  }
`;

export const Text = styled.p`
  width: 650px;
  margin: 0px auto;
  text-align: center;
  color: #666666;

  max-width: 95%;

  @media (max-width: 768px) {
  }
`;

export const CardContainer = styled.div`
  width: 70%;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
  }
`;
