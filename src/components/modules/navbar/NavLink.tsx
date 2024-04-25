import { Link, useLocation } from "react-router-dom";
import type { ReactNode } from "react";

interface Props {
  to: string;
  children: ReactNode;
}

const NavLink = ({ to, children }: Props) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={to}
      className={`${
        pathname === to
          ? "text-primary border-b-2 border-b-primary"
          : "text-white hover:text-primary"
      } pb-px px-1`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
