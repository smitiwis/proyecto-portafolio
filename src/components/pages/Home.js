import React, { Component, Fragment } from 'react';
import Banner from '../banner/Banner'
import Cards from '../cards/Cards';
import CardsFramework from '../cards/Cards-framework';
import CardsCms from '../cards/Cards-cms'

class Home extends Component {
    render(){
        return(
            <Fragment>
                <Banner/>
                <Cards/>
                <CardsFramework/>
                <CardsCms/>
            </Fragment>
        )
    }
}
export default Home;