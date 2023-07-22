import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 95%;
  height: 82px;
  perspective: 1000px; /* Perspective creates a 3D effect */
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Hide the back face when not being shown */
  transition: transform 0.6s;
`;

export const FrontFace = styled(CardFace)`
  background-color: transparent;
  border: 2px solid #0082cb;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #0082cb;
    margin: 0;
  }
`;

export const BackFace = styled(CardFace)`
  background-color: #0082cb;
  transform: rotateY(180deg); /* Flipped to show the back face */
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 10px;
`;

export const MyLi = styled.li`
  color: white;
  float: left;

  @media (max-width: 768px) {
  }
`;
