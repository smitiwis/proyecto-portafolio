import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  item: {
    name: string;
    path: string;
  };
}

export const LinkNavBar: FC<Props> = ({ item }) => {
  const { name, path } = item;
  const { pathname } = useLocation();

  const activeLink = (pathCurrent: string): string => {
    return pathname.includes(pathCurrent) ? "menu__active" : "";
  };

  return (
    <li className="navbar__items activate">
      <Link className={`navbar__link ${activeLink(path)}`} to={path}>
        {name}
      </Link>
    </li>
  );
};
