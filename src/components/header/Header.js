import React, { Component } from 'react';
import Logo from '../../images/logo.svg';

class Header extends Component {

render(){
    return(
      <header className="main-header">

        <div className="header-contenedor">
          <div className="header-contenedor-logo">
            <div className="logoFis perfil"></div>
          </div>

          <div className="header-contenedor-titulo">
            <h1 className="header-titulo">
                <img className="rotar" src={Logo}/>
                <span className="header-titulo-h1">
                  Smiti developer
                </span>
            </h1>
          </div>

          <div className="header-contenedor-perfil">
            <div className="perfil--foto">
              <div className="foto perfil"></div>
            </div>

            <div className="perfil--redesSociales">
              <span className="icon-whatsapp icono"></span>
              <span className="icon-gmail icono"></span>
              <span className="icon-facebook icono"></span>
            </div>
          </div>
        </div>

      </header>
    )
  }
}


export default Header ;

