import { ZUimages } from "assets";
import { broadcast, calender, logout, share } from "assets/images";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BROADCASTCHANNEL, CALENDER, DASHBOARD, REFER_A_FRIEND, SETTINGS } from "routes/CONSTANTS";
import { LogoutModal } from "components/modules/modals";

const Sidebar = () => {
  const [logoutModal, setLogoutModal] = useState(false);
  return (
    <div className=" flex flex-col gap-8 pt-12 px-8 bg-white h-screen w-full">
      <div className="mb-4">LOGO</div>
      <NavLink
        to={DASHBOARD}
        className={({ isActive }) =>
          isActive
            ? "bg-green-600 rounded-md text-white p-2 flex items-center gap-2"
            : "text-gray-200 p-2 flex items-center gap-2"
        }
      >
        <img src="" />
        <span className="text-lg font-normal py-2">Home</span>
      </NavLink>

      <NavLink
        to={CALENDER}
        className={({ isActive }) =>
          isActive
            ? "bg-green-600 rounded-md text-white p-2 flex items-center gap-2"
            : "text-gray-200 p-2 flex items-center gap-2"
        }
      >
        <img src={calender} />
        <span className="text-lg font-normal py-2">Calender</span>
      </NavLink>

      <NavLink
        to={BROADCASTCHANNEL}
        className={({ isActive }) =>
          isActive
            ? "bg-green-600 rounded-md text-white p-2 flex items-center gap-2"
            : "text-gray-200 p-2 flex items-center gap-2"
        }
      >
        <img src={broadcast} />
        <span className="text-lg font-normal py-2">Broadcast Channel</span>
      </NavLink>

      <NavLink
        to={REFER_A_FRIEND}
        className={({ isActive }) =>
          isActive
            ? "bg-green-600 rounded-md text-white p-2 flex items-center gap-2"
            : "text-gray-200 p-2 flex items-center gap-2"
        }
      >
        <img src={share} />
        <span className="text-lg font-normal py-2">Refer a Friend</span>
      </NavLink>

      <NavLink
        to={SETTINGS}
        className={({ isActive }) =>
          isActive
            ? "bg-green-600 rounded-md text-white p-2 flex items-center gap-2"
            : "text-gray-200 p-2 flex items-center gap-2"
        }
      >
        <img src={ZUimages.zuSettings} className="h-5 w-5 fill-slate-400" />
        <span className="text-lg font-normal py-2">Settings</span>
      </NavLink>

      <NavLink
        to=""
        className="flex items-center p-2 gap-2 text-gray-200"
        onClick={() => setLogoutModal(true)}
      >
        <img src={logout} />
        Logout
      </NavLink>
      {logoutModal && <LogoutModal setOpenModal={setLogoutModal} />}
    </div>
  );
};
export default Sidebar;
