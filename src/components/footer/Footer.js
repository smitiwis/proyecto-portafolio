import React, { Component } from 'react';

class Footer extends Component {
  render() {

    return (
      <footer className="footer">
        <div className="footer__content-Gen">

          <div className="footer__content-Ind footer__content-publicaciones">
            <div className="footer__titulo">
              <h4 className="footer__titulo-h4 titulo-h1">Publicacines de:</h4>
            </div>
            <div className="footer__body">
              <ul className="footer__content-items">
                <li className="footer__item"><span className="icon-apuntar"></span> Mis habilidades.</li>
                <li className="footer__item"><span className="icon-apuntar"></span> Mi formación educativa.</li>
                <li className="footer__item"><span className="icon-apuntar"></span> Mis Proyectos <button className="footer__boton"> Ver </button></li>
                <li className="footer__item"><span className="icon-apuntar"></span> Mi Experiencia como desarrollor web.</li>
              </ul>
            </div>
          </div>
         
          <div className="footer__content-Ind footer__content-redesSociales">
            <div className="footer__titulo">
              <h4 className="footer__titulo-h4 titulo-h1">Redes sociales</h4>
            </div>
            <div className="footer__body">
              <ul className="footer__content-items">
                <li className="footer__item">
                  <span className="footer__icon icon-facebook2"></span>Facebook
                  </li>
                <li className="footer__item">
                  <span className="footer__icon icon-whatsapp"></span>Whatsapp
                  </li>
                <li className="footer__item">
                  <span className="footer__icon icon-gmail2"></span>Correo-gmail
                  </li>
              </ul>
            </div>
          </div>

          <div className="footer__content-Ind footer__content-categorias">
            <div className="footer__titulo">
              <h4 className="footer__titulo-h4 titulo-h1">Categorías</h4>
            </div>
            <div className="footer__body">
              <ul className="footer__content-items">
                <li className="footer__item">
                  <span className="icon-apuntar"></span><strong>Desarrollador web</strong>
                </li>
                <li className="footer__item">
                  <span className="icon-apuntar"></span><strong>Diseño de páginas web</strong>
                </li>
                <li className="footer__item">
                  <span className="icon-apuntar"></span><strong>Maquetacion de páginas web</strong>
                </li>
                <li className="footer__item">
                  <span className="icon-apuntar"></span><strong>Page Responsive Web Design</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__content-Ind footer__content-contacto">
            <div className="footer__titulo">
              <h4 className="footer__titulo-h4 titulo-h1">Contáctame</h4>
            </div>
            <div className="footer__body">
              <ul className="footer__content-items">
                <li className="footer__item">
                  <span className="footer__icon icon-location"></span>
                  -12.068371, -75.210225 <br />
                  Zona Monumental Huancayo
                </li>
                <li className="footer__item">
                  <span className="footer__icon icon-phone"></span>+51 987 654 321 / +51 912 345 678
                </li>
                <li className="footer__item">
                  <span className="footer__icon icon-gmail2"></span>xx@asdas.com
                </li>
                <li className="footer__item">
                  <span className="footer__icon icon-gmail"></span>xx@asdas.com
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div className="footer__cont-gen">
          <div className="footer__autor">
            <h6 className="footer__autor-text">
              2020 © Creador del sitio:
              Bach. Peralta Diaz Luis
            </h6>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer;