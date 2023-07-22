import styled from "styled-components";


export const Container = styled.div`
  width: 100%;

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

export const Text = styled.p`
  width: 650px;
  margin: 0px auto;
  text-align: center;
  color: #666666;

  max-width: 95%;

  @media (max-width: 768px) {
  }
`;

export const SecondContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 30px 0;
  

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Child = styled.div`
  width: 40%;

  @media (max-width: 768px) {
    width: 95%;
    margin: 0px auto;
  }
`;

export const SecondHeader = styled.h5`
  color: #444444;
  font-weight: bold;


  @media (max-width: 768px) {
  }
`;

export const Image = styled.div`
  width: 100%;

  img {
    max-width: 100%;
  }

  @media (max-width: 768px) {
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  

  @media (max-width: 768px) {
  }
`;
