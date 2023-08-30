import { Fragment } from "react";
import Banner from "../components/banner/Banner";
import ExperienciasLaborables from "../components/Experiencia/ExperienciasLaborables";
import Habilidades from "./Habilidades";
import Container from "react-bootstrap/esm/Container";
import { SobreMi } from "../components/SobreMi/SobreMi";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      {/* <Container> */}
        <SobreMi />
        <ExperienciasLaborables />
        <Habilidades />
      {/* </Container> */}
    </Fragment>
  );
};

export default Home;
