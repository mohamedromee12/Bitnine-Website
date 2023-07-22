/* eslint-disable react/prop-types */
import { useState } from "react";

import { CardWrapper, FrontFace, BackFace, MyLi } from "./FlippingCard.styled";

const FlippingCard = ({title, texts}) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <CardWrapper onMouseEnter={handleCardFlip} onMouseLeave={handleCardFlip}>
      <FrontFace
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0)" }}
      >
        <p>{title}</p>
      </FrontFace>
      <BackFace
        style={{ transform: flipped ? "rotateY(0)" : "rotateY(-180deg)" }}
      >
         <ul>
          {texts && texts.map((text, index) => <MyLi key={index}>{text}</MyLi>)}
        </ul>
      </BackFace>
    </CardWrapper>
  );
};

export default FlippingCard;
