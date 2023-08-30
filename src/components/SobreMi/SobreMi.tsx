import React from "react";
import { Container } from "react-bootstrap";

export const SobreMi = () => {
  return (
    <section className="secction-aboutMy">
      <Container>
        <div className="card-main">
          <div className="card-main__data">
            <div className="profile">
              <img
                className="profile-image"
                src={`${process.env.PUBLIC_URL}/images/foto2.jpg`}
                alt="my"
              />
              <h1 className="text text--name text-center mt-2">
                Peralta Diaz Luis Angel
              </h1>
              <p className="text--work mt-2">Front-end developer</p>
            </div>
            <div className="card-main__data-footer">
              <div className="icons separator">
                <span className="icon icon-linkedin"></span>
                <span className="icon icon-github"></span>
                <span className="icon icon-gmail2"></span>
                <span className="icon icon-whatsapp"></span>
              </div>
            </div>
          </div>

          <div className="card-main__description">
            <h1 className="text text--title">Sobre mi</h1>
            <p>Esto es lo que soy y lo que hago</p>

            <div className="d-flex gap-3 mb-3">
              <button className="boton boton--primary">Proyectos</button>
              <button className="boton boton--secondary">Curriculum </button>
            </div>

            <p className="text text--parraf mb-0">
              Bachiller en Ingeniería de Sistemas especializado en desarrollo
              frontend, amplia experiencia en integración de servicios web
              Restfull, creación de microlibrerías y servidores de despliegue.
              Certificación a nivel avanzado en el lenguaje Javascript, asimismo
              en el uso de los frameworks: React, Angular.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
