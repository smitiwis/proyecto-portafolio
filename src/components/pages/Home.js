import React, { Component, Fragment } from 'react';
import Banner from '../banner/Banner'
import Cards from '../cards/Cards';

class Home extends Component {
    render(){
        return(
            <Fragment>
                <Banner/>
                <Cards/>
            </Fragment>
        )
    }
}
export default Home;