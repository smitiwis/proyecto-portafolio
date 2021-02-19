import React, { Component, Fragment } from 'react';
import Banner from '../banner/Banner';
import ListaPerfiles from '../Perfil/ListaPerfiles';
import Habilidades from './Habilidades';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <ListaPerfiles />
        <Habilidades/>
      </Fragment>
    )
  }
}
export default Home;