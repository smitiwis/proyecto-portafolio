import { Fragment } from "react";
import Banner from "../components/banner/Banner";
import ListaPerfiles from "../components/Perfil/ListaPerfiles";
import Habilidades from "./Habilidades";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <ListaPerfiles />
      <Habilidades/>
    </Fragment>
  );
};

export default Home;
