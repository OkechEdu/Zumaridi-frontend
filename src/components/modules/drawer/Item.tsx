import { Link, useLocation } from "react-router-dom";
import type { ReactNode } from "react";

interface Props {
  to: string;
  children: ReactNode;
}

const Item = ({ to, children }: Props) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={to}
      className={`${
        pathname === to
          ? "p-1 text-primary border-b-2 border-b-primary"
          : "text-white hover:text-primary"
      }`}
    >
      {children}
    </Link>
  );
};

export default Item;
