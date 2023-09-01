import { Container } from "react-bootstrap";
import Cards from "../components/cards/Cards";

const Habilidades = () => {
  return (
    <section className="secction-skills">
      <Container>
        <p className="text-title-h1 c-white mb-4">
          Skills
          <span className="ovni-decore">
            <img src="/proyecto-portafolio/images/ovni.png" alt="ovni" />
          </span>
        </p>
        <Cards />
      </Container>
    </section>
  );
};

export default Habilidades;
