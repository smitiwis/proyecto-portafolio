import React from 'react';
import TituloSeparador from '../TitloSeparador/TituloSeparador';
import Perfil from './Perfil';





const ListaPerfiles = () => {
  return (
    <div className="bienvenido">
      <div className="bienvenido__cont-h1">
        <TituloSeparador />

        <div className="bienvenido__capacidades">
          {
            [1, 2, 3, 4, 5, 6].map((elemento, index) => {
              return (
                <Perfil key={index} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ListaPerfiles;