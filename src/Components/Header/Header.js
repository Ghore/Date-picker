import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "../../Scss/section/header.scss";
import LogoSvg from "../../image/Logo original RGB new.svg";

const Header = () => {
  return (
    <header>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">
            <img src={LogoSvg} alt="Logo" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/aboutUs">about us</NavLink>
          {/* <Nav.Link href="/aboutUs">About Us</Nav.Link> */}
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default Header;
