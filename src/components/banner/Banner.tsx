import Typical from "react-typical";
import Container from "react-bootstrap/Container";
const Banner = () => (
  <section className="main-banner">
    <div className="banner-contenedor-paradax">
      <Container>
        <div className="descripcion-paradax py-4">
          <div className="text-title-h1">
            <p className="mb-0">
              Front-end is <br />
            </p>
            <span className="d-flex">
              <span>my&nbsp;</span>
              <span className="text-title-h1--interes">
                <Typical
                  steps={[
                    "",
                    1000,
                    "passion!",
                    1500,
                    "life!",
                    1500,
                    "favorite hobby!",
                    2000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </span>
            </span>
          </div>

          <p className="descripcion-paradax-parrafo">
            Bachiller con más de 4 años de experiencia en la creación de
            interfaces atractivas y funcionales para el usuario.
          </p>

          <div className="descripcion-paradax-accion">
            <button className="boton boton--primary">Ver Proyectos</button>
            <button className="boton boton--secondary">Contácteme</button>
          </div>
        </div>
      </Container>
    </div>
  </section>
);

export default Banner;
