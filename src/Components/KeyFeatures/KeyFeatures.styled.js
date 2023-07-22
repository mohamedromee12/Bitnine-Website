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


export const Image = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 50px 0;

  img {
    width: 1100px;
    max-width: 95%;
  }

  @media (max-width: 768px) {
  }
`;