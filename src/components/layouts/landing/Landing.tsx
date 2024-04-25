import { useLocation } from "react-router-dom";

import { Fab } from "components/widgets";
import { Footer, Navbar } from "components/modules";
import type { ReactNode } from "react";

interface Props {
  footer?: boolean;
  children: ReactNode;
}

const Landing = ({ children, footer = true }: Props) => {
  const { pathname } = useLocation();
  return (
    <div className="relative w-full min-h-screen">
      {pathname === "/" ? (
        <div className="absolute top-0 left-0 right-0 z-20">
          <Navbar transparent />
        </div>
      ) : (
        <Navbar />
      )}

      <div className={`${pathname === "/" ? "pt-0" : "pt-[10vh]"} lg:pt-0`}>
        {children}
        {footer && <Footer />}
      </div>
      <Fab />
    </div>
  );
};

export default Landing;
