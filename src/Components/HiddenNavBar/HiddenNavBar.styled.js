import styled from "styled-components";
import colors from "../../Colors";

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  background-image: url("https://bitnine.net/wp-content/uploads/2022/07/AGC_banner_back.jpg");

  span {
    color: white;
    cursor: pointer;
    transition: color 0.5s ease; /* Define the transition property and duration */
    &:hover {
      color: ${colors.orange};
    }
  }
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
