import Typical from "react-typical";

const Banner = () => (
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
              {/* className="interes" */}
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  " passion",
                  1500,
                  " life",
                  1500,
                  " favorite hobby",
                  1500,
                ]}
              />
            </p>
          </div>
        </div>

        <p className="descripcion-paradax-parrafo">
          Busco trabajar con una visión de <br />
          superación en la vida y ser feliz con lo que me gusta hacer
        </p>

        <div className="descripcion-paradax-accion">
          <button className="link1 boton">Ver Proyectos</button>
          <button className="link2 boton">Contácteme</button>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
