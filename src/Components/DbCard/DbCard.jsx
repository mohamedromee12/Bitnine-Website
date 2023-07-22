/* eslint-disable react/prop-types */
import { Container, MyLi } from "./DbCard.styled";

const DbCard = ({ image, texts }) => {
  return (
    <Container>
      <img src={image} alt="image" />
      <div className="Text">
        <ul>
          {texts && texts.map((text, index) => <MyLi key={index}>{text}</MyLi>)}
        </ul>
      </div>
    </Container>
  );
};

export default DbCard;
