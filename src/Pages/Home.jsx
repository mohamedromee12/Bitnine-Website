import { Container } from "./Home.styled";

import UpperNabBar from "../Components/UpperNabBar/UpperNabBar";
import NavBar from "../Components/NavBar/NavBar";
import Agens from "../Components/Agens/Agens";
import EnterPrise from "../Components/EnterPrise/EnterPrise";
import KeyFeatures from "../Components/KeyFeatures/KeyFeatures";
import DbEngine from "../Components/DbEngine/DbEngine";
import Package from "../Components/Package/Package";
import HidderNavBar from "../Components/HiddenNavBar/HiddenNavBar";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <Container>
      <HidderNavBar />
      <UpperNabBar />
      <NavBar />
      <Agens />
      <EnterPrise />
      <KeyFeatures />
      <DbEngine />
      <Package />
      <Footer/>
    </Container>
  );
};

export default Home;
