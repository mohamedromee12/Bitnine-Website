import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

import colors from "../../Colors";

export const MyNav = styled(Navbar)`
  position: ${({ isFixed }) => (isFixed ? "fixed" : "absolute")};
  top: ${({ isFixed }) => (isFixed ? "80px" : "40px")};
  transition: top 0.3s ease; /* Define the transition property and duration */
  width: 100%;
  background-color: white !important;
  font-weight: 500;
  z-index: 200;

  img {
    width: 230px;
  }

  a.nav-link {
    color: black;
    margin: 0 5px;
    &:hover {
      color: ${colors.orange} !important;
    }

    &:after {
      display: none;
    }
  }

  @media (max-width: 768px) {
    top: ${({ isFixed }) => (isFixed ? "40px" : "0px")};
    img {
      width: 96px;
    }
  }
  @media (min-width: 992px) {
    .me-auto.my-2.my-lg-0.navbar-nav.navbar-nav-scroll {
      position: absolute;
      right: 5%;
    }
  }
`;

export const MyNavDropdown = styled(NavDropdown)`
  a:first-child {
    color: ${(p) => (p.active ? colors.orange : "black")} !important;
  }
`;

export const NavItem = styled(Nav.Link)`
  background-color: ${(p) => (p.back ? colors.blue : "transparent")} !important;
  color: white !important;
  border-radius: 5px !important;
  max-width: fit-content !important;
`;

export const MyButton = styled(Button)`
  color: #5e3bee;
  border-color: #5e3bee;

  &:hover {
    color: white;
    background-color: #5e3bee;
  }
`;
