import { LinkNavBar } from "./LinkNavBar";
import { ITEMS } from "../../constants";

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar__contenedor">
        <ul className="navbar__contenedor-menu">
          {ITEMS.map((item) => (
            <LinkNavBar key={item.name} item={item} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
