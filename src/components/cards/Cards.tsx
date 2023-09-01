import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { CardSkill } from "./CardSkill";

const Cards = () => {
  return (
    <>
      <section className="">
        <Container>
          <div className="d-flex gap-5 my-5">
            <CardSkill title="HTML" image="html5.png" />
            <CardSkill title="CSS" image="css3.png" />
            <CardSkill title="JavaScript" image="js.png" />
          </div>
        </Container>
      </section>
      <section className="cards margen">
        <div className="cards__cont-Gen">
          <div className="cards__cont-Ind">
            <div className="cards__titulo-cont titulo-cont-h1">
              <h3 className="cards__titulo titulo-h1">Técnologias básicas</h3>
            </div>

            <div className="cards__card-cont">
              <div className="card__cont-fron-back">
                <div className="card__cont">
                  <div className="card__front --card-cara-html">
                    <div className="card__sombra --sombra-black"></div>
                    <img
                      className="card__front-img "
                      src={`${process.env.PUBLIC_URL}/images/html5.png`}
                      alt="imagen-html1"
                    />
                  </div>
                  <div className="card__back-cont --card-back-html">
                    <div className="card__back">
                      <div className="card__img-cont">
                        <img
                          className="card__img"
                          src={`${process.env.PUBLIC_URL}/images/html5.png`}
                          alt="imagen-html2"
                        />
                        <span className="card__sombra --sombra-white"></span>
                      </div>
                      <div className="card__body-cont">
                        <div className="card__body-titulo">
                          <h3 className="card__titulo-h3">Html:5 Avanzado</h3>
                        </div>
                        <ul className="card__body-desc">
                          <li className="card__desc-list">
                            <span className="icon-apuntar"></span>
                            Manejo de etiquetas y propiedades.
                          </li>
                          <li className="card__desc-list">
                            <span className="icon-apuntar"></span>
                            Uso del transpilador pug.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card__cont-fron-back">
                <div className="card__cont">
                  <div className="card__front --card-cara-css">
                    <img
                      className="card__front-img"
                      src={`${process.env.PUBLIC_URL}/images/css3.png`}
                      alt="imagen-css"
                    />
                    <div className="card__sombra --sombra-black"></div>
                  </div>
                  <div className="card__back-cont --card-back-css">
                    <div className="card__back">
                      <div className="card__img-cont">
                        <img
                          className="card__img"
                          src={`${process.env.PUBLIC_URL}/images/css3.png`}
                          alt="imagen-css2"
                        />
                        <span className="card__sombra --sombra-white"></span>
                      </div>
                      <div className="card__body-cont">
                        <div className="card__body-titulo">
                          <h3 className="card__titulo-h3">CSS:3 Avanzado</h3>
                        </div>
                        <ul className="card__body-desc">
                          <li className="card__desc-list">
                            <span className="icon-apuntar"></span>
                            Uso del transpiladores como SASS.
                          </li>
                          <li className="card__desc-list">
                            <span className="icon-apuntar"></span>
                            Manejo de animaciones.
                          </li>

                          <li className="card__desc-list">
                            <span className="icon-apuntar"></span>
                            Uso de metodologías como "BEM"
                          </li>
                          <li className="card__desc-list">
                            <span className="icon-apuntar"></span>
                            Organizaación de archivos css.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card__cont-fron-back">
                <div className="card__cont">
                  <div className="card__front --card-cara-js">
                    <img
                      className="card__front-img"
                      src={`${process.env.PUBLIC_URL}/images/js.png`}
                      alt="imagen-js"
                    />
                    <div className="card__sombra --sombra-black"></div>
                  </div>
                  <div className="card__back-cont --card-back-js">
                    <div className="card__back">
                      <div className="card__img-cont">
                        <img
                          className="card__img"
                          src={`${process.env.PUBLIC_URL}/images/js.png`}
                          alt="imagen-js2"
                        />
                        <span className="card__sombra --sombra-white"></span>
                      </div>
                      <div className="card__body-cont">
                        <div className="card__body-titulo">
                          <h3 className="card__titulo-h3">
                            JavaScript: Intermedio
                          </h3>
                        </div>
                        <ul className="card__body-desc">
                          <li className="card__desc-list">
                            <span className="icon-apuntar"></span>
                            Manejo de typescript, ecma-s6.
                          </li>
                          <li className="card__desc-list">
                            <span className="icon-apuntar"></span>
                            Manejo de librerias como Jquery.
                          </li>
                          <li className="card__desc-list">
                            <span className="icon-apuntar"></span>
                            Eventos, etc
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card__cont-fron-back">
                <div className="card__cont">
                  <div className="card__front --card-cara-php">
                    <img
                      className="card__front-img "
                      src={`${process.env.PUBLIC_URL}/images/php.png`}
                      alt="imagen-php"
                    />
                    <div className="card__sombra --sombra-black"></div>
                  </div>
                  <div className="card__back-cont --card-back-php">
                    <div className="card__back">
                      <div className="card__img-cont">
                        <img
                          className="card__img"
                          src={`${process.env.PUBLIC_URL}/images/php.png`}
                          alt="imagen-php2"
                        />
                        <span className="card__sombra --sombra-white"></span>
                      </div>
                      <div className="card__body-cont">
                        <div className="card__body-titulo">
                          <h3 className="card__titulo-h3">PHP - Básico</h3>
                        </div>
                        <ul className="card__body-desc">
                          <li className="card__desc-list">
                            <span className="icon-apuntar"></span>
                            Base de datos.
                          </li>
                          <li className="card__desc-list">
                            <span className="icon-apuntar"></span>
                            Manejo Mysql y php.
                          </li>
                          <li className="card__desc-list">
                            <span className="icon-apuntar"></span>
                            Consultas básicas.
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
    </>
  );
};

export default Cards;
