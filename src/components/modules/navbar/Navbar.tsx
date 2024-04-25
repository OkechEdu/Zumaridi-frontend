import { Link } from "react-router-dom";
import { motion, useCycle, AnimatePresence } from "framer-motion";

import NavLink from "./NavLink";
import { ZUimages } from "assets";
import { Drawer } from "components/modules";
import { logout } from "redux/slices/auth.slice";
import { Button, Dropdown, Menu } from "components/widgets";
import { useAppDispatch, useAppSelector, useScroll } from "hooks";
import { ZuFlagUnitedKingdom, ZuDown, ZuLogout } from "components/icons";
import { ABOUT, CONTACT, HOME, LOGIN, SIGNUP, PRICING } from "routes/CONSTANTS";

interface Props {
  transparent?: boolean;
}

const Navbar = ({ transparent = false }: Props) => {
  const { y } = useScroll();
  const dispatch = useAppDispatch();
  const { user, isLoggedIn } = useAppSelector((state) => state.auth);

  const [open, toggle] = useCycle(false, true);

  const handleLogout = () => {
    void dispatch(logout());
  };

  return (
    <motion.div
      initial={false}
      animate={open ? "open" : "closed"}
      className={`${
        transparent && y <= 40 ? "bg-transparent" : "bg-black-100"
      } fixed lg:relative top-0 left-0 right-0 text-white z-50`}
    >
      <div className="relative w-full h-[10vh] px-5 md:px-10 xl:px-20 flex items-center justify-between z-50">
        <Link to={HOME}>
          <img src={ZUimages.logo} alt="logo" />
        </Link>

        <div className="hidden lg:inline-flex items-center space-x-3">
          <Dropdown
            button={
              <div className="flex items-center gap-2 cursor-pointer">
                <p>Products</p>
                <ZuDown size={10} />
              </div>
            }
          >
            <p></p>
          </Dropdown>
          <NavLink to={CONTACT}>Contact Us</NavLink>
          <NavLink to={PRICING}>Pricing</NavLink>
          <NavLink to="#">Services</NavLink>
          <NavLink to={ABOUT}>About Us</NavLink>
        </div>

        <div className="inline-flex items-center space-x-3">
          {!isLoggedIn ? (
            <div className="hidden lg:inline-flex items-center space-x-3">
              <Button to={LOGIN} variant="outline">
                Sign In
              </Button>
              <Button to={SIGNUP}>Create an Account</Button>
            </div>
          ) : (
            <div className="inline-flex items-center space-x-3">
              <p className="hidden lg:block">Welcome {user.user.name.firstName}</p>
              <Dropdown
                button={
                  <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
                    <img src={ZUimages.user1} className="w-full h-full object-cover" />
                  </div>
                }
              >
                <>
                  <button onClick={handleLogout} className="w-full flex items-center gap-1">
                    <ZuLogout className="text-red" />
                    <p className="text-base text-red">Logout</p>
                  </button>
                </>
              </Dropdown>
            </div>
          )}
          <Dropdown
            button={
              <div className="flex items-center gap-2 px-1 py-px border-2  b border-white rounded-lg cursor-pointer">
                <ZuFlagUnitedKingdom size={20} />
                <ZuDown size={10} />
              </div>
            }
          >
            <></>
          </Dropdown>
          <div className="flex items-center lg:hidden">
            <Menu toggle={toggle} />
          </div>
        </div>
      </div>
      <AnimatePresence>{open && <Drawer open={open} />}</AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
