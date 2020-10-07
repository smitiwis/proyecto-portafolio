import React, { Component, Fragment } from 'react';
import Banner from '../banner/Banner'


class Home extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <div className="bienvenido margen">
          <div className="bienvenido__cont-h1">
            <div className="bienvenido__titulo titulo-cont-h1">
              <h1 className="bienvenido__titulo-h1 titulo-h1">
                Bienvenido a mi portafolio</h1>
            </div>
            <div className="bienvenido__capacidades">
              <div className="bienvenido__cont-Ind">
                <span className="bienvenido__icon icon-grafico3"></span>
                <h2 className="bienvenido__titulo-h2">Tendencia</h2>
                <p className="bienvenido__parrafo-desc">
                  Me puedo adaptar rapidamente a las nuevas tecnologías
                  de desarrollo web y así poder adquirir nuevos conocimientos.
                </p>
              </div>

              <div className="bienvenido__cont-Ind">
                <span className="bienvenido__icon icon-time"></span>
                <h2 className="bienvenido__titulo-h2">Agilidad</h2>
                <p className="bienvenido__parrafo-desc">
                  Trabajo y mido mi tiempo, busco lograr mis objetivos
                  el en tiempo estimado para poder complir con mis tareas.
                </p>
              </div>

              <div className="bienvenido__cont-Ind">
                <span className="bienvenido__icon icon-like"></span>
                <h2 className="bienvenido__titulo-h2">Confianza</h2>
                <p className="bienvenido__parrafo-desc">
                  Soy una persona con principios muy claros de la vida, soy
                  comprensivo y trato de mejorar en mis habilidades blandas.
                </p>
              </div>

              <div className="bienvenido__cont-Ind">
                
                <span className="bienvenido__icon icon-seguridad"></span>
                <h2 className="bienvenido__titulo-h2">Seguridad</h2>
                <p className="bienvenido__parrafo-desc">
                  Soy cauteloso en mis cosas, asi que no divulgo información
                  a terceras personas es un hábito que lo tengo como persona.
                </p>
              </div>
              
              <div className="bienvenido__cont-Ind">
                
                <span className="bienvenido__icon icon-foco"></span>
                <h2 className="bienvenido__titulo-h2">Creatividad</h2>
                <p className="bienvenido__parrafo-desc">
                  Me gusta el mundo del desarrollo web especialemnte la parte 
                  <b> Front-end</b>, mi creatividad muchas veces me sorprende a la hora de
                  ponerteme a codear.
                </p>
              </div>

              <div className="bienvenido__cont-Ind">
                
                <span className="bienvenido__icon icon-responsabilidad"></span>
                <h2 className="bienvenido__titulo-h2">Responsabilidad</h2>
                <p className="bienvenido__parrafo-desc">
                  Soy una persona responsable en mi trabajo, estaré a la par buscando
                  mejorar profesionalmente y ser cada día mejor en mi trabajo y 
                  como persona.
                </p>
              </div>

            </div>
           
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Home;