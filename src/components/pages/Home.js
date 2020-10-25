import React, { Component, Fragment } from 'react';
import Banner from '../banner/Banner';
import Bienvenido from '../Bienvenido/Bienvenido';
import Habilidades from './Habilidades';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <Bienvenido/>
        <Habilidades/>
      </Fragment>
    )
  }
}
export default Home;