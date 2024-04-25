import { Header, Sidebar } from "components/modules";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DashboardWrapper = ({ children }: Props) => {
  return (
    <div className="flex">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5">
        <Header />
        <div className="py-8 pl-8 pr-8">{children}</div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
