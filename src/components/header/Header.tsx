import Container from "react-bootstrap/Container";
import NavbarComponent from "../navbar/Navbar";

const Header = () => {
  var barraMenu = () => {
    let menu = document.querySelector("#header__menu-barra");
    if (menu?.classList[1]) {
      menu.classList.remove("navbar__barra-visible");
    } else {
      menu?.classList.add("navbar__barra-visible");
    }
  };

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

          <div className="perfil__redesSociales">
            <span className="perfil__icono icon-whatsapp"></span>
            <span className="perfil__icono icon-gmail2"></span>
            <span className="perfil__icono icon-facebook2"></span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
