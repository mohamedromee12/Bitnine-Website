import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";

export const Container = styled.div`
  position: ${({ isFixed }) => (isFixed ? "fixed" : "absolute")};
  top: ${({ isFixed }) => (isFixed ? "40px" : "0")};
  transition: top 0.3s ease; /* Define the transition property and duration */
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  background-color: #fafafa;
  z-index: 500;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MyDropDown = styled(Dropdown)`
  @media (max-width: 768px) {
  }
`;

export const First = styled.div`
  @media (max-width: 768px) {
  }
`;

export const Second = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: #808080;

  span {
    cursor: pointer;

    &:hover {
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
  }
`;

export const Third = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-right: 15px;
  color: #808080;

  @media (max-width: 768px) {
  }
`;
