import React, { Component } from 'react';
import Logo from '../../images/logo.svg';
import Navbar from '../navbar/Navbar';


class Header extends Component {

  render() {

    var barraMenu = () => {
      let menu = document.querySelector('#header__menu-barra');
      if (menu.classList[1]) {
        menu.classList.remove('navbar__barra-visible');
      } else {
        menu.classList.add("navbar__barra-visible");
      }
    }

    return (
      <header className="header">

        <div className="header__contenedor">


          <div className="header__contenedor-logo">
            <div className="perfil --logoFis"></div>
          </div>

          <div className="header__contenedor-titulo">
            <h1 className="header__titulo">
              <img className="rotar" src={Logo} alt="logo" />
              <span className="header__titulo-h1">
                Smiti developer
                </span>
            </h1>
            <div className="navbar__barra" onClick={barraMenu}>
              <span className="navbar__icon icon-barra "></span>
            </div>

            <div
              className="header__contenedor-navbar"
              id="header__menu-barra">
              <Navbar />
            </div>

          </div>
        
          <div className="header__contenedor-perfil">
            <div className="perfil__foto">
              <div className="perfil --foto"></div>
            </div>

            <div className="perfil__redesSociales">
              <span className="perfil__icono icon-whatsapp"></span>
              <span className="perfil__icono icon-gmail2"></span>
              <span className="perfil__icono icon-facebook2"></span>
            </div>
          </div>


        </div>


      </header>
    )
  }
}

export default Header;

