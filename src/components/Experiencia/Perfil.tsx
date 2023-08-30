import { FC } from "react";

interface Profile {
  id: number;
  icono: string;
  titulo: string;
  descripcion: string;
}

const Perfil: FC<Profile> = ({ icono, titulo, descripcion }) => {
  return (
    <div className="bienvenido__cont-Ind">
      <span className={`bienvenido__icon ${icono}`}></span>
      <h2 className="bienvenido__titulo-h2">{titulo}</h2>
      <p className="bienvenido__parrafo-desc">{descripcion}</p>
    </div>
  );
};
export default Perfil;
