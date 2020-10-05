import React, { Component } from 'react';
// IMPORTACION DE IMAGENES
import wordpress from '../../images/wordpress.png';
import bem from '../../images/bem.png';
import github from '../../images/github1.png';

class CardsCms extends Component {
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
                <div className="card-wordpress --card">
                  <div className="--card-cara card-cara-wordpress">
                    <img className="card-wordpress-img --card-img " src={wordpress} alt="imagen-wordpress" />
                  </div>
                  <div className="--card-back card-back">
                    <div className="--card-back-descripcion">
                      <div className="--card-back-descripcion-content-img">
                        <img className="__img" src={wordpress} alt="imagen-wordpress" />
                        <span className="__sombra"></span>
                      </div>
                      <div className="--card-back-descripcion-titulo">
                        <h3 className="__titulo">wordpress:5 Avanzado</h3>
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
                <div className="card-bem --card">
                  <div className="--card-cara card-cara-bem">
                    <img className="card-bem-img --card-img " src={bem} alt="imagen-bem" />
                  </div>
                  <div className="--card-back card-back">
                    <div className="--card-back-descripcion">
                      <div className="--card-back-descripcion-content-img">
                        <img className="__img __img--bem" src={bem} alt="imagen-bem" />
                        <span className="__sombra"></span>
                      </div>
                      <div className="--card-back-descripcion-titulo">
                        <h3 className="__titulo">bem:5 Avanzado</h3>
                        <ul>
                          <li>Hola</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="card-cont">
                <div className="card-github --card">
                  <div className="--card-cara card-cara-github">
                    <img className="card-github-img --card-img " src={github} alt="imagen-github" />
                  </div>
                  <div className="--card-back card-back">
                    <div className="--card-back-descripcion">
                      <div className="--card-back-descripcion-content-img">
                        <img className="__img " src={github} alt="imagen-github" />
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

export default CardsCms;