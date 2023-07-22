/* eslint-disable no-unused-vars */
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";

import { useState, useEffect } from "react";

import { MyNav, MyNavDropdown, NavItem } from "./NavBar.styled";

function NavBar() {
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
    <MyNav isFixed={isFixed} expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <MyNav.Brand href="#">
          <img
            src="https://bitnine.net/wp-content/uploads/2021/02/b_logo.png"
            alt="Logo"
          />
        </MyNav.Brand>
        <MyNav.Toggle aria-controls="navbarScroll" />
        <MyNav.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <MyNavDropdown
              active={true}
              title="PRODUCTS"
              id="navbarScrollingDropdown"
            >
              <MyNavDropdown.Item href="#action3">
                Graph Database
              </MyNavDropdown.Item>
              <MyNavDropdown.Item href="#action4">
                Relational Database
              </MyNavDropdown.Item>
            </MyNavDropdown>
            <Nav.Link href="#">USE CASES</Nav.Link>
            <Nav.Link href="#">SERVICES</Nav.Link>
            <MyNavDropdown title="RESOURCES" id="navbarScrollingDropdown2">
              <MyNavDropdown.Item href="#action3">
                Documentation
              </MyNavDropdown.Item>
              <MyNavDropdown.Item href="#action4">Learn</MyNavDropdown.Item>
            </MyNavDropdown>
            <Nav.Link href="#">BLOG</Nav.Link>
            <MyNavDropdown title="COMPANY" id="navbarScrollingDropdown3">
              <MyNavDropdown.Item href="#action3">About Us</MyNavDropdown.Item>
              <MyNavDropdown.Item href="#action4">Contact</MyNavDropdown.Item>
            </MyNavDropdown>
            <MyNavDropdown title="IR" id="navbarScrollingDropdown4">
              <MyNavDropdown.Item href="#action3">IR 공고</MyNavDropdown.Item>
              <MyNavDropdown.Item href="#action4">
                IR 공시 정보
              </MyNavDropdown.Item>
              <MyNavDropdown.Item href="#action4">
                IR 재무 정보
              </MyNavDropdown.Item>
            </MyNavDropdown>
            <NavItem back={true} href="#">
              TRY FREE
            </NavItem>
          </Nav>
        </MyNav.Collapse>
      </Container>
    </MyNav>
  );
}

export default NavBar;
