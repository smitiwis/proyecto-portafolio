import Container from "react-bootstrap/Container";
import NavbarComponent from "../navbar/Navbar";

const Header = () => {

  return (
    <header className="header">
      <Container className="header__container">
        <div className="header__image">
          <div className="perfil perfil--logoFis"></div>
        </div>

        <div className="header__navbar">
          <NavbarComponent />
        </div>

        <div className="header__image">
          <div className="perfil perfil--foto"></div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
