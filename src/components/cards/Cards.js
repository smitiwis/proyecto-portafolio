import React, { Component } from 'react';

// IMPORTACION DE IMAGENES
import html5 from '../../images/html5.png';
import css3 from '../../images/css3.png';
import js from '../../images/js.png';
import php from '../../images/php.png';

class Cards extends Component {
    render(){
        return(
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
                      <div className="--card-cara">
                        <img className="card-html-img --card-img " src={html5} alt="imagen-html"/>
                        <p className="card-parrafo">Html - avanzado</p>
                      </div>
        
        
                      <div className="--card-back card-back-html">
                        <div className="--card-back-descripcion">
                          <div className="--card-back-descripcion-content-img">
                            <img className="__img " src={html5} alt="imagen-html"/>
                          </div>
                          <h3 className="__titulo">Html:5 Avanzado</h3>
                        </div>
                      </div>
        
        
                    </div>
                  </div>
        
                  <div className="card-cont">
                    <div className="card-css --card">
                      <div className="--card-cara">
                        <img className="card-css-img --card-img " src={css3} alt="imagen-css"/>
                        <p className="card-parrafo">Css - Intermedio</p>
                      </div>
                      <div className="--card-back card-back-css">
                        <div className="--card-back-descripcion">
                          <div className="--card-back-descripcion-content-img">
                            <img className="__img" src={css3} alt="imagen-css"/>
                          </div>
        
                          <h3 className="__titulo">Css:3 Intermedio</h3>
                          <ul>
                            <li>Sass</li>
                            <li>Less</li>
                            <li>Animaciones</li>
                          </ul>
                        </div>
        
                      </div>
                    </div>
                  </div>
                  <div className="card-cont">
                    <div className="card-js --card">
                      <div className="--card-cara">
                        <img className="card-js-img --card-img " src={js} alt="imagen-js"/>
                        <p className="card-parrafo">Js - Intermedio</p>
                      </div>
                      <div className="--card-back card-back-js">
                        <div className="--card-back-descripcion">
                          <div className="--card-back-descripcion-content-img">
                            <img className="__img " src={js} alt="imagen-js"/>
                          </div>
                          <h3 className="__titulo">JavaScript Intermedio</h3>
                          <ul>
                            <li>TypeScript</li>
                            <li>Ecma5 - Ecma6</li>
                            <li>Jquery</li>
                            <li>Otras librerias</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-cont">
                    <div className="card-php --card">
                      <div className="--card-cara">
                        <img className="card-php-img --card-img " src={php} alt="imagen-php"/>
                        <p className="card-parrafo">Php - Básico y mysql</p>
                      </div>
                      <div className="--card-back card-back-php">
                        <div className="--card-back-descripcion">
                          <div className="--card-back-descripcion-content-img">
                            <img className="__img" src={php} alt="imagen-php"/>
                          </div>
                          <h3 className="__titulo">Php Básico</h3>
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