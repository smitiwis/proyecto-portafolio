import React, { Component } from 'react';
// IMPORTACION DE IMAGENES
import wordpress from '../../images/wordpress.png';
import bem from '../../images/bem.png';
import github from '../../images/github1.png';

class CardsCms extends Component {
  render() {
    return (
      <section className="cards margen">
        <div className="cards__cont-Gen">

          <div className="cards__cont-Ind">
            <div className="cards__titulo-cont titulo-cont-h1">
              <h3 className="cards__titulo titulo-h1">Control de CMS y metodologías</h3>
            </div>

            <div className="cards__card-cont">

              <div className="card__cont-fron-back">
                <div className="card__cont">
                  <div className="card__front --card-cara-wordpress">
                    <div className="card__sombra --sombra-black"></div>
                    <img className="card__front-img " src={wordpress} alt="imagen-wordpress" />
                  </div>
                  <div className="card__back-cont --card-back-wordpress">
                    <div className="card__back">
                      <div className="card__img-cont">
                        <img className="card__img" src={wordpress} alt="imagen-wordpress" />
                        <span className="card__sombra --sombra-white"></span>
                      </div>
                      <div className="card__body-cont">
                        <div className="card__body-titulo">
                          <h3 className="card__titulo-h3">Wordpress - Avanzado</h3>
                        </div>
                        <ul className="card__body-desc">
                          <li className="card__desc-list">
                            <span className="icon-apuntar"></span>
                            Instalación y configuraciones principales.
                          </li>
                          <li className="card__desc-list">
                            <span className="icon-apuntar"></span>
                            Ínstalacion de pluggins.
                          </li>

                          <li className="card__desc-list">
                            <span className="icon-apuntar"></span>
                            Editar plantillas con código básíco.
                          </li>
                          <li className="card__desc-list">
                            <span className="icon-apuntar"></span>
                            Creación de plantillas personalizadas, etc.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card__cont-fron-back">
                <div className="card__cont">
                  <div className="card__front --card-cara-bem">
                    <div className="card__sombra --sombra-black"></div>
                    <img className="card__front-img " src={bem} alt="imagen-bem" />
                  </div>
                  <div className="card__back-cont --card-back-bem">
                    <div className="card__back">
                      <div className="card__img-cont">
                        <img className="card__img" src={bem} alt="imagen-bem" />
                        <span className="card__sombra --sombra-white"></span>
                      </div>
                      <div className="card__body-cont">
                        <div className="card__body-titulo">
                          <h3 className="card__titulo-h3">BEM - Intermedio</h3>
                        </div>
                        <ul className="card__body-desc">
                          <li className="card__desc-list">
                            <span className="icon-apuntar"></span>
                            Manejo de clases según el standar "BEM".
                          </li>
                          <li className="card__desc-list">
                            <span className="icon-apuntar"></span>
                            Bloque-Elemento-Modificador.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="card__cont-fron-back">
                <div className="card__cont">
                  <div className="card__front --card-cara-github">
                    <div className="card__sombra --sombra-black"></div>
                    <img className="card__front-img " src={github} alt="imagen-github" />
                  </div>
                  <div className="card__back-cont --card-back-github">
                    <div className="card__back">
                      <div className="card__img-cont">
                        <img className="card__img" src={github} alt="imagen-github" />
                        <span className="card__sombra --sombra-white"></span>
                      </div>
                      <div className="card__body-cont">
                        <div className="card__body-titulo">
                          <h3 className="card__titulo-h3">Github - Intermedio</h3>
                        </div>
                        <ul className="card__body-desc">
                          <li className="card__desc-list">
                            <span className="icon-apuntar"></span>
                            Manejo de versiones.
                          </li>
                          <li className="card__desc-list">
                            <span className="icon-apuntar"></span>
                            Trabajo en equipo.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            


            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default CardsCms;