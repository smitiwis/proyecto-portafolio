import React, { Component } from 'react';
// IMPORTACION DE IMAGENES
import react from '../../images/react1.png';
import angular from '../../images/angular.png';
import bootstrap from '../../images/bootstrap.png';

class CardsFramework extends Component {
  render() {
    return (
      <section className="main-cards">

        <div className="cards-container">

          <div className="cards-container-tec-basicas card-container">
            <div className="content-subtitulo">
              <h3 className="subtitulo-general">
                Dominio de técnologias básicas como:
                  </h3>
            </div>

            <div className="cards-cont">

              <div className="card-cont">
                <div className="card-react --card">
                  <div className="--card-cara card-cara-react">
                    <img className="card-react-img --card-img " src={react} alt="imagen-react" />
                  </div>
                  <div className="--card-back card-back">
                    <div className="--card-back-descripcion">
                      <div className="--card-back-descripcion-content-img">
                        <img className="__img rotar" src={react} alt="imagen-react" />
                        <span className="__sombra"></span>
                      </div>
                      <div className="--card-back-descripcion-titulo">
                        <h3 className="__titulo">react:5 Avanzado</h3>
                        <ul>
                          <li>Hola</li>
                          <li>Hola</li>
                          <li>Hola</li>
                          <li>Hola</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-cont">
                <div className="card-angular --card">
                  <div className="--card-cara card-cara-angular">
                    <img className="card-css-img --card-img " src={angular} alt="imagen-css" />
                  </div>
                  <div className="--card-back card-back">
                    <div className="--card-back-descripcion">
                      <div className="--card-back-descripcion-content-img">
                        <img className="__img " src={angular} alt="imagen-css" />
                        <span className="__sombra"></span>
                      </div>
                      <div className="--card-back-descripcion-titulo">
                        <h3 className="__titulo">css:5 Avanzado</h3>
                        <ul>
                          <li>Hola</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="card-cont">
                <div className="card-bootstrap --card">
                  <div className="--card-cara card-cara-bootstrap">
                    <img className="card-js-img --card-img " src={bootstrap} alt="imagen-js" />
                  </div>
                  <div className="--card-back card-back">
                    <div className="--card-back-descripcion">
                      <div className="--card-back-descripcion-content-img">
                        <img className="__img " src={bootstrap} alt="imagen-js" />
                        <span className="__sombra"></span>
                      </div>
                      <div className="--card-back-descripcion-titulo">
                        <h3 className="__titulo">js:5 Avanzado</h3>
                        <ul>
                          <li>Hola</li>
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

export default CardsFramework;