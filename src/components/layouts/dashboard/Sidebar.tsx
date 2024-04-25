import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { LogoutModal } from "components/modules/modals";
import { ZuBroadcast, ZuCalender, ZuHome, ZuLogout, ZuSettings, ZuShare } from "components/icons";
import { BROADCASTCHANNEL, CALENDER, DASHBOARD, REFER_A_FRIEND, SETTINGS } from "routes/CONSTANTS";

const sidebar = [
  {
    Icon: ZuHome,
    name: "Home",
    to: DASHBOARD
  },
  {
    Icon: ZuCalender,
    name: "Calender",
    to: CALENDER
  },
  {
    Icon: ZuBroadcast,
    name: "Broadcast Channel",
    to: BROADCASTCHANNEL
  },
  {
    Icon: ZuShare,
    name: "Refer a Friend",
    to: REFER_A_FRIEND
  },
  {
    Icon: ZuSettings,
    name: "Settings",
    to: SETTINGS
  }
];

const Sidebar = () => {
  const { pathname } = useLocation();
  const [logoutModal, setLogoutModal] = useState(false);
  return (
    <div className="md:w-1/3 lg:w-1/4 xl:w-1/5 h-full pt-5 md:pt-8 px-3 md:px-8 flex flex-col gap-8 bg-white">
      {sidebar.map(({ Icon, name, to }, key) => (
        <Link
          key={key}
          to={to}
          className={`${
            pathname === to
              ? "bg-green-600 rounded-md text-white p-2 flex items-center gap-2"
              : "text-gray-200 p-2 flex items-center gap-2"
          } flex items-center`}
        >
          <div className="w-5">
            <Icon size={20} />
          </div>
          <div className="w-full hidden md:block">
            <span className="text-lg">{name}</span>
          </div>
        </Link>
      ))}
      <div
        onClick={() => setLogoutModal(true)}
        className="text-gray-200 p-2 flex items-center gap-2 cursor-pointer"
      >
        <div className="w-5">
          <ZuLogout size={20} className="text-red" />
        </div>
        <div className="w-full hidden md:block">
          <span className="text-lg">Logout</span>
        </div>
      </div>
      {logoutModal && <LogoutModal setOpenModal={setLogoutModal} />}
    </div>
  );
};

export default Sidebar;
