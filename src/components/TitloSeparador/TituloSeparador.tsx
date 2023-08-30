import { FC } from "react";

const TituloSeparador: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="bienvenido__titulo titulo-cont-h1">
      <h1 className="bienvenido__titulo-h1 titulo-h1">{title}</h1>
    </div>
  );
};

export default TituloSeparador;
