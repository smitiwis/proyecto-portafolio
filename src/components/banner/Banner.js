import React, { Component } from 'react';
import Typical from 'react-typical';

class Banner extends Component {
  render() {
    return (
      <section className="main-banner">
        <div className="banner-contenedor-paradax">
          <div className="descripcion-paradax">

            <div className="descripcion-paradax-h2">
              <p className="titulo">
                Front-end is <br />
              </p>
              <div id="escribir">
                <p className="titulo">
                  my
                  <Typical className="interes"
                    loop={Infinity}
                    wrapper='b'
                    steps={[
                      ' passion', 1500,
                      ' life', 1500,
                      ' favorite hobby', 1500
                    ]}
                  />
                </p>
              </div>
            </div>

            <p className="descripcion-paradax-parrafo">
              Busco trabajar con una visión de <br />superación
              en la vida y ser feliz con lo que me gusta hacer
            </p>

            <div className="descripcion-paradax-accion">
              <button className="link1 boton" href="#">Ver Proyectos</button>
              <button className="link2 boton" href="#">Contácteme</button>
            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default Banner;