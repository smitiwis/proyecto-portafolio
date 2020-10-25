import React, { Component } from 'react';
import Yankenpo from '../../images/yankenpo.png';
import Piano from '../../images/piano.png';
import MaquetacionBootstrap from '../../images/maqutacion-bootstrap.png';
import Maquetacion2 from '../../images/maquetacion2.png';
import Snake from '../../images/snake.png';
import Inteligencia from '../../images/inteligencia.png';

class Proyectos extends Component {
  render() {
    return (
      <div className="proyectos">
        <div className="proyectos__contenedor">

          <div className="proyectos__imagen-cont">
            <h3 className="proyectos__titulo">Proyecto Yan-Ken-Po</h3>
            <img className="proyectos__imagen" src={Yankenpo} alt="yankenpo" />
            <div className="proycetos__info-cont">
              <div className="proyectos__info">
                <p className="proyectos__descripcion">
                  En este proyecto podrás jugar con la computadora al "Yan-ken-po"
                  en el que tu escojes una opción y el ordenador escoge otra e inmediatamente
                  saber el resultado.
                </p>
                <div className="proyectos__tecnologias">
                  <h4 className="proyectos__tec-titulo">Tecnologías: </h4>
                  <p className="proyectos__tec-desc"> Html:5 - Css - JavaScript</p>
                </div>
                <a className="proyectos__link" href="https://smitiwis.github.io/proyecto-YKP/" target="_blank" rel="noopener noreferrer" type="button">
                  <span className="icon-eye icono"></span> Ver proyecto
                </a>
              </div>
            </div>
          </div>

          <div className="proyectos__imagen-cont">
            <h3 className="proyectos__titulo">Proyecto Piano</h3>
            <img className="proyectos__imagen" src={Piano} alt="yankenpo" />

            <div className="proycetos__info-cont">
              <div className="proyectos__info">
                <p className="proyectos__descripcion">
                  En este proyecto puedes reproducir los sonidos de un piano 
                  Do - Re - Mi - Fa - Sol - La - Si
                </p>
                <div className="proyectos__tecnologias">
                  <h4 className="proyectos__tec-titulo">Tecnologías: </h4>
                  <p className="proyectos__tec-desc"> Html:5 - Css - Jquery(JS)</p>
                </div>
                <a className="proyectos__link" href="https://smitiwis.github.io/proyecto-piano/" target="_blank" rel="noopener noreferrer" type="button">
                  <span className="icon-eye icono"></span> Ver proyecto
                </a>
              </div>
            </div>
          </div>


          <div className="proyectos__imagen-cont">
            <h3 className="proyectos__titulo">Maquetación con Bootstrap</h3>
            <img className="proyectos__imagen" src={MaquetacionBootstrap} alt="yankenpo" />
            
            <div className="proycetos__info-cont">
              <div className="proyectos__info">
                <p className="proyectos__descripcion">
                  Este es un proyecto de maquetación con el cual practico mis
                  habilidades seguir siendo cada día mejor.
                </p>
                <div className="proyectos__tecnologias">
                  <h4 className="proyectos__tec-titulo">Tecnologías: </h4>
                  <p className="proyectos__tec-desc"> Html:5 - Css - Bootstrap</p>
                </div>
                <a className="proyectos__link" href="https://smitiwis.github.io/Proyecto-final-boostrap/" target="_blank" rel="noopener noreferrer" type="button">
                  <span className="icon-eye icono"></span> Ver proyecto
                </a>
              </div>
            </div>
          </div>


          <div className="proyectos__imagen-cont">
            <h3 className="proyectos__titulo">Proyecto Maquetacion 2</h3>
            <img className="proyectos__imagen" src={Maquetacion2} alt="yankenpo" />

            <div className="proycetos__info-cont">
              <div className="proyectos__info">
                <p className="proyectos__descripcion">
                  Este es otro proyecto de maquetación con el cual practico mis
                  habilidades asi comencé, pero me alegra mucho que con el tiempo
                  me he ido superando mucho.
                </p>
                <div className="proyectos__tecnologias">
                  <h4 className="proyectos__tec-titulo">Tecnologías: </h4>
                  <p className="proyectos__tec-desc"> Html:5 - Css - Bootstrap</p>
                </div>
                <a className="proyectos__link" href="https://smitiwis.github.io/Proyecto-entrega-rock/" target="_blank" rel="noopener noreferrer" type="button">
                  <span className="icon-eye icono"></span> Ver proyecto
                </a>
              </div>
            </div>
          </div>

          
          <div className="proyectos__imagen-cont">
            <h3 className="proyectos__titulo">Proyecto Snake</h3>
            <img className="proyectos__imagen" src={Snake} alt="yankenpo" />

            <div className="proycetos__info-cont">
              <div className="proyectos__info">
                <p className="proyectos__descripcion">
                  Este proyecto logre hacerlo y si que me tomo mucho tiempo y lo 
                  llegue a concluir juntamente con amigos de la universidad.
                  arriba(W) - abajo(S) - derecha(A) - izquierda(D)
                </p>
                <div className="proyectos__tecnologias">
                  <h4 className="proyectos__tec-titulo">Tecnologías: </h4>
                  <p className="proyectos__tec-desc"> Html:5 - Css - JS(POO)</p>
                </div>
                <a className="proyectos__link" href="https://smitiwis.github.io/proyecto--snake/" target="_blank" rel="noopener noreferrer" type="button">
                  <span className="icon-eye icono"></span> Ver proyecto
                </a>
              </div>
            </div>
          </div>


              
          <div className="proyectos__imagen-cont">
            <h3 className="proyectos__titulo">Perceptron multicapas I.A</h3>
            <img className="proyectos__imagen" src={Inteligencia} alt="yankenpo" />

            <div className="proycetos__info-cont">
              <div className="proyectos__info">
                <p className="proyectos__descripcion">
                  Este proyecto trata del entrenamiento de una red neuronal,
                  donde podemos introducir "n" entradas, "n" salidas y "n" entrenamientos.
                </p>
                <a className="proyectos__video" href="https://www.youtube.com/watch?v=s86pfJuVuTk" target="_blank" rel="noopener noreferrer" >
                  <span className="icon-youtube icono"></span> Mi canal donde explico el código
                </a>
                <div className="proyectos__tecnologias">
                  <h4 className="proyectos__tec-titulo">Tecnologías: </h4>
                  <p className="proyectos__tec-desc"> Html:5 - Css - JavaScript</p>
                </div>
                <a className="proyectos__link" href="https://smitiwis.github.io/IA-en-javaScript/" target="_blank" rel="noopener noreferrer" type="button">
                  <span className="icon-eye icono"></span> Ver proyecto
                </a>
              </div>
            </div>
          </div>

              
          <div className="proyectos__imagen-cont">
            <h3 className="proyectos__titulo">Proyecto ---</h3>
            <img className="proyectos__imagen" src="" alt="new" />

            <div className="proycetos__info-cont">
              <div className="proyectos__info">
                <p className="proyectos__descripcion">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
                </p>
                <div className="proyectos__tecnologias">
                  <h4 className="proyectos__tec-titulo">Tecnologías: </h4>
                  <p className="proyectos__tec-desc"> --- </p>
                </div>
                <a className="proyectos__link" href="#" target="_blank" rel="noopener noreferrer" type="button">
                  <span className="icon-eye icono"></span> Ver proyecto
                </a>
              </div>
            </div>
          </div>

              
          <div className="proyectos__imagen-cont">
            <h3 className="proyectos__titulo">Proyecto ---</h3>
            <img className="proyectos__imagen" src="" alt="new" />

            <div className="proycetos__info-cont">
              <div className="proyectos__info">
                <p className="proyectos__descripcion">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
                </p>
                <div className="proyectos__tecnologias">
                  <h4 className="proyectos__tec-titulo">Tecnologías: </h4>
                  <p className="proyectos__tec-desc"> --- </p>
                </div>
                <a className="proyectos__link" href="#" target="_blank" rel="noopener noreferrer" type="button">
                  <span className="icon-eye icono"></span> Ver proyecto
                </a>
              </div>
            </div>
          </div>    
   

        </div>
      </div>
    )
  }
}
export default Proyectos;