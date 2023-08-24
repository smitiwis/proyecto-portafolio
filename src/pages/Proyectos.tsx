const Proyectos = () => {
  return (
    <div className="proyectos">
      <div className="proyectos__contenedor">
        <div className="proyectos__imagen-cont">
          <h3 className="proyectos__titulo">Perceptron multicapas I.A</h3>
          <img
            className="proyectos__imagen"
            src="/images/inteligencia.png"
            alt="yankenpo"
          />

          <div className="proycetos__info-cont">
            <div className="proyectos__info">
              <p className="proyectos__descripcion">
                Este proyecto trata del entrenamiento de una red neuronal, donde
                podemos introducir "n" entradas, "n" salidas y "n"
                entrenamientos.
              </p>
              <a
                className="proyectos__video"
                href="https://www.youtube.com/watch?v=s86pfJuVuTk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-youtube icono"></span> Mi canal donde
                explico el código
              </a>
              <div className="proyectos__tecnologias">
                <h4 className="proyectos__tec-titulo">Tecnologías: </h4>
                <p className="proyectos__tec-desc">
                  {" "}
                  Html:5 - Css - JavaScript
                </p>
              </div>
              <a
                className="proyectos__link"
                href="https://smitiwis.github.io/IA-en-javaScript/"
                target="_blank"
                rel="noopener noreferrer"
                type="button"
              >
                <span className="icon-eye icono"></span> Ver proyecto
              </a>
            </div>
          </div>
        </div>

        <div className="proyectos__imagen-cont">
          <h3 className="proyectos__titulo">Proyecto Intranet - Home</h3>
          <img
            className="proyectos__imagen"
            src="/images/colegiohome.png"
            alt="new-proyect"
          />

          <div className="proycetos__info-cont">
            <div className="proyectos__info">
              <p className="proyectos__descripcion">
                Proyecto en grupo de dos integrantes para una institucion
                educativa en Junin - huancayo, la parte front-end fue realizada
                por mi parte, pero fue suspendida por la llegada del Covid 19.
              </p>
              <div className="proyectos__tecnologias">
                <h4 className="proyectos__tec-titulo">Tecnologías:</h4>
                <p className="proyectos__tec-desc">Angular - Sass - NodeJS</p>
              </div>
              <a
                className="proyectos__link"
                href="https://github.com/smitiwis/colegio-home"
                target="_blank"
                rel="noopener noreferrer"
                type="button"
              >
                <span className="icon-eye icono"></span> Ver proyecto
              </a>
            </div>
          </div>
        </div>

        <div className="proyectos__imagen-cont">
          <h3 className="proyectos__titulo">Proyecto muestra Paises</h3>
          <img
            className="proyectos__imagen"
            src="/images/paises.png"
            alt="new-pais"
          />

          <div className="proycetos__info-cont">
            <div className="proyectos__info">
              <p className="proyectos__descripcion">
                Este proyecto trata de mostrar una lista de paises en forma de
                tarjetas en la parte Home del menu.
              </p>
              <div className="proyectos__tecnologias">
                <h4 className="proyectos__tec-titulo">Tecnologías: </h4>
                <p className="proyectos__tec-desc"> Angular - Sass </p>
              </div>
              <a
                className="proyectos__link"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                type="button"
              >
                <span className="icon-eye icono"></span> Ver proyecto
              </a>
            </div>
          </div>
        </div>

        <div className="proyectos__imagen-cont" id="proyectos__imagen-cont">
          <h3 className="proyectos__titulo">Proyecto Yan-Ken-Po</h3>
          <img
            className="proyectos__imagen"
            src="/images/yankenpo.png"
            alt="yankenpo"
          />
          <div className="proycetos__info-cont">
            <div className="proyectos__info">
              <p className="proyectos__descripcion">
                En este proyecto podrás jugar con la computadora al "Yan-ken-po"
                en el que tu escojes una opción y el ordenador escoge otra e
                inmediatamente saber el resultado.
              </p>
              <div className="proyectos__tecnologias">
                <h4 className="proyectos__tec-titulo">Tecnologías: </h4>
                <p className="proyectos__tec-desc">
                  {" "}
                  Html:5 - Css - JavaScript
                </p>
              </div>
              <a
                className="proyectos__link"
                href="https://smitiwis.github.io/proyecto-YKP/"
                target="_blank"
                rel="noopener noreferrer"
                type="button"
              >
                <span className="icon-eye icono"></span> Ver proyecto
              </a>
            </div>
          </div>
        </div>

        <div className="proyectos__imagen-cont">
          <h3 className="proyectos__titulo">Proyecto Piano</h3>
          <img
            className="proyectos__imagen"
            src="/images/piano.png"
            alt="yankenpo"
          />

          <div className="proycetos__info-cont">
            <div className="proyectos__info">
              <p className="proyectos__descripcion">
                En este proyecto puedes reproducir los sonidos de un piano Do -
                Re - Mi - Fa - Sol - La - Si
              </p>
              <div className="proyectos__tecnologias">
                <h4 className="proyectos__tec-titulo">Tecnologías: </h4>
                <p className="proyectos__tec-desc">
                  {" "}
                  Html:5 - Css - Jquery(JS)
                </p>
              </div>
              <a
                className="proyectos__link"
                href="https://smitiwis.github.io/proyecto-piano/"
                target="_blank"
                rel="noopener noreferrer"
                type="button"
              >
                <span className="icon-eye icono"></span> Ver proyecto
              </a>
            </div>
          </div>
        </div>

        <div className="proyectos__imagen-cont">
          <h3 className="proyectos__titulo">Maquetación con Bootstrap</h3>
          <img
            className="proyectos__imagen"
            src="/images/maqutacion-bootstrap.png"
            alt="yankenpo"
          />

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
              <a
                className="proyectos__link"
                href="https://smitiwis.github.io/Proyecto-final-boostrap/"
                target="_blank"
                rel="noopener noreferrer"
                type="button"
              >
                <span className="icon-eye icono"></span> Ver proyecto
              </a>
            </div>
          </div>
        </div>

        <div className="proyectos__imagen-cont">
          <h3 className="proyectos__titulo">Proyecto Maquetacion 2</h3>
          <img
            className="proyectos__imagen"
            src="/images/maquetacion2.png"
            alt="yankenpo"
          />

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
              <a
                className="proyectos__link"
                href="https://smitiwis.github.io/Proyecto-entrega-rock/"
                target="_blank"
                rel="noopener noreferrer"
                type="button"
              >
                <span className="icon-eye icono"></span> Ver proyecto
              </a>
            </div>
          </div>
        </div>

        <div className="proyectos__imagen-cont">
          <h3 className="proyectos__titulo">Proyecto Snake</h3>
          <img
            className="proyectos__imagen"
            src="/images/snake.png"
            alt="yankenpo"
          />

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
              <a
                className="proyectos__link"
                href="https://smitiwis.github.io/proyecto--snake/"
                target="_blank"
                rel="noopener noreferrer"
                type="button"
              >
                <span className="icon-eye icono"></span> Ver proyecto
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
