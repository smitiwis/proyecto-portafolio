import { Fragment } from "react";
import Banner from "../components/banner/Banner";
import ExperienciasLaborables from "../components/Experiencia/ExperienciasLaborables";
import Habilidades from "./Habilidades";
import { SobreMi } from "../components/SobreMi/SobreMi";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <SobreMi />
      <ExperienciasLaborables />
      <Habilidades />
    </Fragment>
  );
};

export default Home;
