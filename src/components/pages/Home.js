import React, { Component, Fragment } from 'react';
import Banner from '../banner/Banner';
import Bienvenido from '../Bienvenido/Bienvenido';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <Bienvenido/>
      </Fragment>
    )
  }
}
export default Home;