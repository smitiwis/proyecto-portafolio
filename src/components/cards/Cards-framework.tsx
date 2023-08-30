
import React from "react";

const CardsFramework = () => {
  return (
    <section className="cards margen">
      <div className="cards__cont-Gen">
        <div className="cards__cont-Ind">
          <div className="cards__titulo-cont titulo-cont-h1">
            <h3 className="cards__titulo titulo-h1">Manejos de Frameworks</h3>
          </div>

          <div className="cards__card-cont">
            <div className="card__cont-fron-back">
              <div className="card__cont">
                <div className="card__front --card-cara-react">
                  <div className="card__sombra --sombra-black"></div>
                  <img
                    className="card__front-img "
                    src={`${process.env.PUBLIC_URL}/images/react1.png`}
                    alt="imagen-react"
                  />
                </div>
                <div className="card__back-cont --card-back-react">
                  <div className="card__back">
                    <div className="card__img-cont">
                      <img
                        className="card__img rotar"
                        src={`${process.env.PUBLIC_URL}/images/react1.png`}
                        alt="imagen-react"
                      />
                      <span className="card__sombra --sombra-white"></span>
                    </div>
                    <div className="card__body-cont">
                      <div className="card__body-titulo">
                        <h3 className="card__titulo-h3">React - Intermedio</h3>
                      </div>
                      <ul className="card__body-desc">
                        <li className="card__desc-list">
                          <span className="icon-apuntar"></span>
                          Props, PropTypes, Estados.
                        </li>
                        <li className="card__desc-list">
                          <span className="icon-apuntar"></span>
                          Sistemas de rutas y formularios.
                        </li>
                        <li className="card__desc-list">
                          <span className="icon-apuntar"></span>
                          Conectar y consumir API REST.
                        </li>
                        <li className="card__desc-list">
                          <span className="icon-apuntar"></span>
                          Ciclos de vida de un componente.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card__cont-fron-back">
              <div className="card__cont">
                <div className="card__front --card-cara-angular">
                  <div className="card__sombra --sombra-black"></div>
                  <img
                    className="card__front-img "
                    src={`${process.env.PUBLIC_URL}/images/angular.png`}
                    alt="imagen-angular"
                  />
                </div>
                <div className="card__back-cont --card-back-angular">
                  <div className="card__back">
                    <div className="card__img-cont">
                      <img
                        className="card__img"
                        src={`${process.env.PUBLIC_URL}/images/angular.png`}
                        alt="imagen-angular"
                      />
                      <span className="card__sombra --sombra-white"></span>
                    </div>
                    <div className="card__body-cont">
                      <div className="card__body-titulo">
                        <h3 className="card__titulo-h3">
                          Angular - Intermedio
                        </h3>
                      </div>
                      <ul className="card__body-desc">
                        <li className="card__desc-list">
                          <span className="icon-apuntar"></span>
                          Uso de componentes y su arquitectura.
                        </li>
                        <li className="card__desc-list">
                          <span className="icon-apuntar"></span>
                          Uso de Directivas.
                        </li>
                        <li className="card__desc-list">
                          <span className="icon-apuntar"></span>
                          Sistemas de rutas y formularios.
                        </li>
                        <li className="card__desc-list">
                          <span className="icon-apuntar"></span>
                          Conectar y consumir API REST.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card__cont-fron-back">
              <div className="card__cont">
                <div className="card__front --card-cara-bootstrap">
                  <div className="card__sombra --sombra-black"></div>
                  <img
                    className="card__front-img "
                    src={`${process.env.PUBLIC_URL}/images/bootstrap.png`}
                    alt="imagen-bootstrap"
                  />
                </div>
                <div className="card__back-cont --card-back-bootstrap">
                  <div className="card__back">
                    <div className="card__img-cont">
                      <img
                        className="card__img"
                        src={`${process.env.PUBLIC_URL}/images/bootstrap.png`}
                        alt="imagen-bootstrap"
                      />
                      <span className="card__sombra --sombra-white"></span>
                    </div>
                    <div className="card__body-cont">
                      <div className="card__body-titulo">
                        <h3 className="card__titulo-h3">
                          Bootstrap - Avanzado
                        </h3>
                      </div>
                      <ul className="card__body-desc">
                        <li className="card__desc-list">
                          <span className="icon-apuntar"></span>
                          Manejo de clases de booststrap.
                        </li>
                        <li className="card__desc-list">
                          <span className="icon-apuntar"></span>
                          Código límpio.
                        </li>
                        <li className="card__desc-list">
                          <span className="icon-apuntar"></span>
                          Diseños responsivos.
                        </li>
                        <li className="card__desc-list">
                          <span className="icon-apuntar"></span>
                          Manejo de columnas y filas.
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
  );
};

export default CardsFramework;
