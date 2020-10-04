import React, { Component } from 'react';

// IMPORTACION DE IMAGENES
import html5 from '../../images/html5.png';
import css3 from '../../images/css3.png';
import js from '../../images/js.png';
import php from '../../images/php.png';

class Cards extends Component {
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
                <div className="card-html --card">
                  <div className="--card-cara card-cara-html">
                    <img className="card-html-img --card-img " src={html5} alt="imagen-html" />
                  </div>
                  <div className="--card-back card-back">
                    <div className="--card-back-descripcion">
                      <div className="--card-back-descripcion-content-img">
                        <img className="__img " src={html5} alt="imagen-html" />
                        <span className="__sombra"></span>
                      </div>
                      <div className="--card-back-descripcion-titulo">
                        <h3 className="__titulo">Html:5 Avanzado</h3>
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
                <div className="card-css --card">
                  <div className="--card-cara card-cara-css">
                    <img className="card-css-img --card-img " src={css3} alt="imagen-css" />
                  </div>
                  <div className="--card-back card-back">
                    <div className="--card-back-descripcion">
                      <div className="--card-back-descripcion-content-img">
                        <img className="__img " src={css3} alt="imagen-css" />
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
                <div className="card-js --card">
                  <div className="--card-cara card-cara-js">
                    <img className="card-js-img --card-img " src={js} alt="imagen-js" />
                  </div>
                  <div className="--card-back card-back">
                    <div className="--card-back-descripcion">
                      <div className="--card-back-descripcion-content-img">
                        <img className="__img " src={js} alt="imagen-js" />
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


              <div className="card-cont">
                <div className="card-php --card">
                  <div className="--card-cara card-cara-php">
                    <img className="card-php-img --card-img " src={php} alt="imagen-php" />
                  </div>
                  <div className="--card-back card-back">
                    <div className="--card-back-descripcion">
                      <div className="--card-back-descripcion-content-img">
                        <img className="__img " src={php} alt="imagen-php" />
                        <span className="__sombra"></span>
                      </div>
                      <div className="--card-back-descripcion-titulo">
                        <h3 className="__titulo">php:5 Avanzado</h3>
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
export default Cards;