import { logoutimg } from "assets/images";
import { useAppDispatch } from "hooks";
import { logout } from "redux/slices/auth.slice";
import { LOGIN } from "routes/CONSTANTS";

interface LogoutModalProps {
  setOpenModal: (logoutModal: boolean) => void;
}

const LogoutModal = ({ setOpenModal }: LogoutModalProps) => {
  const dispatch = useAppDispatch();

  const onLogoutSubmit = () => {
    dispatch(logout())
      .unwrap()
      .then(() => window.location.replace(LOGIN))
      .catch((err) => console.log(err));
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-5">
      <div className="h-[406px] w-[440px] bg-white pb-4 flex flex-col gap-8 rounded-lg">
        <div className="bg-gray-50 flex items-center justify-center rounded-t-lg h-48">
          <img src={logoutimg} className="h-28 w-28 text-center" />
        </div>
        <div className="px-8">
          <p className="text-black font-bold text-[21px]">Logout?</p>
          <p className="text-black text-[18px]">Are you sure you want to Logout?</p>
        </div>
        <div className="flex items-center justify-between px-8">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="bg-white border-2 border-green rounded-md py-2 px-4 text-green"
          >
            Nevermind
          </button>
          <button className="bg-green py-2 px-4 rounded-md text-white" onClick={onLogoutSubmit}>
            Yes, Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
