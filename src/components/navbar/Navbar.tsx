import { LinkNavBar } from "./LinkNavBar";
import { ITEMS } from "../../constants";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
  const { Brand, Toggle, Collapse } = Navbar;

  return (
    <Navbar expand="lg" className="navbar container">
      <Brand>
        <h1 className="navbar__titulo">
          <img
            className="navbar__titulo-img rotar"
            src={`${process.env.PUBLIC_URL}/images/react.png`}
            alt="logo"
          />
          <span className="navbar__titulo-text">Frontend developer</span>
        </h1>
      </Brand>
      <Toggle aria-controls="basic-navbar-nav" />
      <Collapse id="basic-navbar-nav">
        <Nav className="navbar__items">
          {ITEMS.map((item) => (
            <LinkNavBar key={item.name} item={item} />
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
