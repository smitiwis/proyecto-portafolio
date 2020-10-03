import React , { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
	render(){
			return(
					<nav className="main-navbar">
							<div className="navbar-contenedor">
									<ul className="navbar-contenedor-menu">
											<li className="menu--items activate">
													<NavLink activeClassName="menu__active" className="link" to="/home">Home</NavLink> 
											</li>
											<li className="menu--items activate">
													<NavLink activeClassName="menu__active" className="link" to="/proyectos">Proyectos</NavLink> 
											</li>
											<li className="menu--items activate">
													<NavLink activeClassName="menu__active" className="link" to="/habilidades">Habilidades</NavLink> 
											</li>
											<li className="menu--items activate">
													<NavLink activeClassName="menu__active" className="link" to="/formacion">Formación</NavLink> 
											</li>
											<li className="menu--items activate">
													<NavLink activeClassName="menu__active" className="link" to="/contacto">Contacto</NavLink> 
											</li>
											<li className="menu--items activate">
													<NavLink activeClassName="menu__active" className="link" to="/experiencia">Experiencia</NavLink> 
											</li>
									</ul>
							</div>
					</nav>
			)
	}
}

export default Navbar;