import {
  Container,
  MyDropDown,
  First,
  Second,
  Third,
} from "./UpperNabBar.styled";

import { HiOutlineSearch } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { useState, useEffect } from "react";

const UpperNabBar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 40) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container isFixed={isFixed}>
      <First>
        <MyDropDown>
          <MyDropDown.Toggle variant="seconday" id="MyDropDown-basic">
            Select Language
          </MyDropDown.Toggle>

          <MyDropDown.Menu>
            <MyDropDown.Item href="#/action-1">English</MyDropDown.Item>
            <MyDropDown.Item href="#/action-2">한국어</MyDropDown.Item>
          </MyDropDown.Menu>
        </MyDropDown>
      </First>
      <Second>
        <span>
          <HiOutlineSearch />
        </span>
        <span>AG Cloud</span>
        <span>Apache AGE</span>
        <span>CONTACT</span>
      </Second>
      <Third>
        <span>
          <BsGithub />
        </span>
        <span>
          <AiFillYoutube />
        </span>
        <span>
          <FaTwitter />
        </span>
        <span>
          <FaLinkedinIn />
        </span>
        <span>
          <FaFacebook />
        </span>
      </Third>
    </Container>
  );
};

export default UpperNabBar;
