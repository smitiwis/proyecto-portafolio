import React, { Component } from 'react';
import faustino from '../../images/faustino.png';
import santaIsabel from '../../images/santaIsabel.png';
import uncp from '../../images/uncp.png';
import tecsup from '../../images/tecsup.png';
import udemy from '../../images/udemy.png';
import ceid from '../../images/ceid.jpg';

class Formacion extends Component {
  render() {
    return (
      <div className="formacion">
        <div className="formacion__titulo">
          <h1 className="formacion__titulo-texto">Formación académica</h1>
        </div>
        <div className="formacion__contenedor-Gen">

          <div className="formacion__contenedor-Ind">
            <div className="formacion__contenedor-body">
              <div className="formacion__body">
                <div className="formacion__body-contenido">
                  <div className="formacion__body-subTitulo">
                    <h3 className="formacion__body-subTitulo-texto">Primaria</h3>
                  </div>
                  <div className="formacion__body-descripcion">
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Escuela:</h4>
                      <p className="item-desc">"Domingo Faustino Sarmiento N°31507"</p>
                    </div>
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Tipo:</h4>
                      <p className="item-desc">Estatal</p>
                    </div>
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Fecha:</h4>
                      <p className="item-desc">1997 - 2002</p>
                    </div>
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Lugar:</h4>
                      <p className="item-desc">Huancayo - Perú</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="informacion__body-img">
                <div className="informacion__front">
                  <img className="informacion__img" src={faustino} alt="" />
                  <div className="informacion__img-sombra"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="formacion__contenedor-Ind">
            <div className="formacion__contenedor-body">
              <div className="formacion__body">
                <div className="formacion__body-contenido">
                  <div className="formacion__body-subTitulo">
                    <h3 className="formacion__body-subTitulo-texto">Secundaria</h3>
                  </div>
                  <div className="formacion__body-descripcion">
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Colegio:</h4>
                      <p className="item-desc">"Piloto Santa Isabel"</p>
                    </div>
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Tipo:</h4>
                      <p className="item-desc">Estatal</p>
                    </div>
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Fecha:</h4>
                      <p className="item-desc">2003 - 2007</p>
                    </div>
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Lugar:</h4>
                      <p className="item-desc">Huancayo - Perú</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="informacion__body-img">
                <div className="informacion__front">
                  <img className="informacion__img" src={santaIsabel} alt="" />
                  <div className="informacion__img-sombra"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="formacion__contenedor-Ind">
            <div className="formacion__contenedor-body">
              <div className="formacion__body">
                <div className="formacion__body-contenido">
                  <div className="formacion__body-subTitulo">
                    <h3 className="formacion__body-subTitulo-texto">Universidad</h3>
                  </div>
                  <div className="formacion__body-descripcion">
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Universidad Nacional del Centro del Perú</h4>
                      <p className="item-desc">Facultad: "Ingeniería de sistemas"</p>
                    </div>
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Tipo:</h4>
                      <p className="item-desc">Estatal</p>
                    </div>
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Fecha:</h4>
                      <p className="item-desc">2013 - 2020</p>
                    </div>
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Lugar:</h4>
                      <p className="item-desc">Huancayo - Perú</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="informacion__body-img">
                <div className="informacion__front">
                  <img className="informacion__img" src={uncp} alt="" />
                  <div className="informacion__img-sombra"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="formacion__contenedor-Ind">
            <div className="formacion__contenedor-body">
              <div className="formacion__body">
                <div className="formacion__body-contenido">
                  <div className="formacion__body-subTitulo">
                    <h3 className="formacion__body-subTitulo-texto">Especialidad</h3>
                  </div>
                  <div className="formacion__body-descripcion">
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Tecsup</h4>
                      <p className="item-desc">Formación: "Diseño y programación web - front-end"</p>
                    </div>
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Tipo:</h4>
                      <p className="item-desc">Privada</p>
                    </div>
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Fecha:</h4>
                      <p className="item-desc">09-2019 - 02-2020</p>
                    </div>
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Lugar:</h4>
                      <p className="item-desc">Huancayo - Perú</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="informacion__body-img">
                <div className="informacion__front">
                  <img className="informacion__img" src={tecsup} alt="" />
                  <div className="informacion__img-sombra"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="formacion__contenedor-Ind">
            <div className="formacion__contenedor-body">
              <div className="formacion__body">
                <div className="formacion__body-contenido">
                  <div className="formacion__body-subTitulo">
                    <h3 className="formacion__body-subTitulo-texto">Autodidácta</h3>
                  </div>
                  <div className="formacion__body-descripcion">
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Udemy</h4>
                      <p className="item-desc">Compro y estudio cursos relacionados con desarrollo web , y
                      tambien suelo estar metido en youtube y Edteam</p>
                    </div>
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Tipo:</h4>
                      <p className="item-desc">Privada</p>
                    </div>
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Fecha:</h4>
                      <p className="item-desc">2018 - 2020</p>
                    </div>
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Lugar:</h4>
                      <p className="item-desc">Plataforma - Udemy</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="informacion__body-img">
                <div className="informacion__front">
                  <img className="informacion__img" src={udemy} alt="" />
                  <div className="informacion__img-sombra"></div>
                </div>
              </div>
            </div>
          </div>
          

          <div className="formacion__contenedor-Ind">
            <div className="formacion__contenedor-body">
              <div className="formacion__body">
                <div className="formacion__body-contenido">
                  <div className="formacion__body-subTitulo">
                    <h3 className="formacion__body-subTitulo-texto">Idiomas</h3>
                  </div>
                  <div className="formacion__body-descripcion">
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Centro de idiomas - CEID:</h4>
                      <p className="item-desc">Nivel - Básico</p>
                    </div>
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Tipo:</h4>
                      <p className="item-desc">Privada</p>
                    </div>
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Fecha:</h4>
                      <p className="item-desc">04-2020 / 09-2020</p>
                    </div>
                    <div className="formacion__body-descripcion-item">
                      <h4 className="item-titulo">Lugar:</h4>
                      <p className="item-desc">Huancayo - Perú</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="informacion__body-img">
                <div className="informacion__front">
                  <img className="informacion__img" src={ceid} alt="" />
                  <div className="informacion__img-sombra"></div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    )
  }
}

export default Formacion;