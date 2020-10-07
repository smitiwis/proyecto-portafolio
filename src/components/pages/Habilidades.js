import React, { Component } from 'react';
import Cards from '../cards/Cards';
import CardsFramework from '../cards/Cards-framework';
import CardsCms from '../cards/Cards-cms'

class Habilidades extends Component {
    render() {
        return (
            <div>
                <Cards />
                <CardsFramework />
                <CardsCms />
            </div>
        )
    }
}
export default Habilidades;