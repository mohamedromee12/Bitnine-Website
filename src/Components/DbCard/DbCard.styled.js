import styled from "styled-components";


export const Container = styled.div`
  width: 30%;
  height: 226px;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: white;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px -5px black;

  img {
    margin: auto;
    height: 70%;
    max-width: 70%;
  }

  div {
    opacity: 0; /* Start with opacity 0 (invisible) */
    width: 80%;
    height: 70%;
    font-size: 13px;
    color: #666666;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    transition: opacity 0.5s ease; /* Define the transition property and duration */
  }

  &:hover {
    div {
      opacity: 1; /* Change opacity to 1 (visible) on hover */
    }

    img {
      opacity: 0; /* Hide the image on hover */
    }
  }

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const MyLi = styled.li`
  color: black;

  @media (max-width: 768px) {
  }
`;
