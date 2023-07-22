import styled from "styled-components";
import colors from "../../Colors";

export const Container = styled.div`
  width: 100%;
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
  }
`;

export const Image = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 50px 0;

  img {
    width: 300px;
    max-width: 100%;
  }

  @media (max-width: 768px) {
  }
`;

export const Header = styled.h4`
  width: 100%;
  text-align: center;
  color: #444444;
  font-weight: bold;

  @media (max-width: 768px) {
  }
`;

export const Text = styled.p`
  width: 650px;
  margin: 20px auto;
  text-align: center;
  color: #666666;

  max-width: 95%;

  @media (max-width: 768px) {
  }
`;

export const ButtonsContainer = styled.div`
  width: 400px;
  max-width: 95%;
  margin: 50px auto;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  color: white;
  background-color: ${colors.blue};
  border-radius: 5px;

  @media (max-width: 768px) {
  }
`;
