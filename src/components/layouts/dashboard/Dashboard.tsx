import Header from "./Header";
import Sidebar from "./Sidebar";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Dashboard = ({ children }: Props) => {
  return (
    <div className="w-full relative h-screen">
      <Header />

      <div className="w-full flex h-[90vh]">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <div className="w-full md:w-2/3 lg:w-3/4 xl:w-4/5 h-full pt-5 lg:pt-10 px-5 md:px-10 overflow-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
