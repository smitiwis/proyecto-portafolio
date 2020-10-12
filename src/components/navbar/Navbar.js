import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">

        <div className="navbar__contenedor">
        
          <ul className="navbar__contenedor-menu">
            <li className="navbar__items activate">
              <NavLink activeClassName="menu__active" className="navbar__link" to="/home">Home</NavLink>
            </li>
            <li className="navbar__items activate">
              <NavLink activeClassName="menu__active" className="navbar__link" to="/proyectos">Proyectos</NavLink>
            </li>
            <li className="navbar__items activate">
              <NavLink activeClassName="menu__active" className="navbar__link" to="/habilidades">Habilidades</NavLink>
            </li>
            <li className="navbar__items activate">
              <NavLink activeClassName="menu__active" className="navbar__link" to="/formacion">Formación</NavLink>
            </li>
            <li className="navbar__items activate">
              <NavLink activeClassName="menu__active" className="navbar__link" to="/contacto">Contacto</NavLink>
            </li>
            <li className="navbar__items activate">
              <NavLink activeClassName="menu__active" className="navbar__link" to="/experiencia">Experiencia</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;