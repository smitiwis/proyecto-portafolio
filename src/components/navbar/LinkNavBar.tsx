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
    const updatePath = pathname === "/" ? "/home" : pathname;
    return updatePath.includes(pathCurrent) ? "navbar__link--active" : "";
  };

  return (
    <Link key={name} className={`navbar__link ${activeLink(path)}`} to={path}>
      {name}
    </Link>
  );
};
