import React , { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Componentes de vistas o landing page
import Proyectos from './components/pages/Proyectos';
import Habilidades from './components/pages/Habilidades';
import Formacion from './components/pages/Formacion';
import Contacto from './components/pages/Contacto';
import Experiencia from './components/pages/Experiencia';
import Home from './components/pages/Home';
import Errorpage from './components/pages/Errorpage';

// Componentes estaticos como el header o el footer
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
            {/* COLOCAR LOS COMPONENTES QUE NO CAMBIAN COMO EL HEADER O FOOTER */}
                <Header/>
                <Navbar/>
                <Switch>
                    <Route  exact path="/" component={Home}/>
                    <Route  exact path="/home" component={Home}/>
                    <Route  exact path="/proyectos" component={Proyectos}/>
                    <Route  exact path="/habilidades" component={Habilidades}/>
                    <Route  exact path="/formacion" component={Formacion}/>
                    <Route  exact path="/contacto" component={Contacto}/>
                    <Route  exact path="/experiencia" component={Experiencia}/>
                    <Route  component={Errorpage}/>
                </Switch>
                <Footer/>
            </BrowserRouter>

        )
    }

}

export default Router;