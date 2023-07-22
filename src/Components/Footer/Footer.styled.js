import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  margin: 100px auto 20px;


  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const PartsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Part = styled.div`
  width: 15%;

  @media (max-width: 768px) {
  }
`;

export const Header = styled.h5`
  text-align: start;
  color: #ababab;
  font-size: 16px;
  font-weight: bold;

  @media (max-width: 768px) {
  }
`;

export const Text = styled.p`
  text-align: start;
  color: #ababab;
  font-size: 16px;
  cursor: pointer;
  margin: 5px 0;

  &:hover {
    color: #0082cb;
  }

  @media (max-width: 768px) {
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
  }
`;

export const Add = styled.div`
  color: #ababab;

  @media (max-width: 768px) {
  }
`;

export const Icons = styled.div`
  color: #ababab;
  display: flex;
  gap: 5px;

  @media (max-width: 768px) {
    display: none;
  }
`;
