import { motion } from "framer-motion";

import Item from "./Item";
import { useAppSelector } from "hooks";
import { ZuDown } from "components/icons";
import { Button, Dropdown } from "components/widgets";
import { ABOUT, CONTACT, LOGIN, PRICING, SIGNUP } from "routes/CONSTANTS";

interface Props {
  open: boolean;
}

const variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      staggerDirection: 1,
      delayChildren: 0.2
    }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const items = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const Drawer = ({ open }: Props) => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  return (
    <motion.aside
      initial={{ height: 0 }}
      animate={{ height: "100%" }}
      exit={{ height: 0, transition: { delay: 0.7, duration: 0.3 } }}
      className={`${
        open ? "block lg:hidden" : "hidden"
      } fixed w-full pt-[10vh] top-0 left-0 bottom-0 px-5 bg-black-100 text-white z-30`}
    >
      <motion.ul
        initial="closed"
        animate="open"
        exit="closed"
        variants={variants}
        className="pt-5 pb-20 w-full h-full flex flex-col justify-between"
      >
        <motion.div
          variants={items}
          className="w-full h-full flex flex-col justify-center items-center text-[24px] gap-5"
        >
          <Dropdown
            button={
              <div className="flex items-center gap-2 cursor-pointer">
                <p>Products</p>
                <ZuDown size={10} />
              </div>
            }
          >
            <div></div>
          </Dropdown>
          <Item to={CONTACT}>Contact Us</Item>
          <Item to={PRICING}>Pricing</Item>
          <Item to="#">Services</Item>
          <Item to={ABOUT}>About Us</Item>
        </motion.div>

        {!isLoggedIn && (
          <motion.div variants={items} className="w-full flex flex-col gap-5">
            <Button to={LOGIN} variant="outline" className="w-full">
              Sign In
            </Button>
            <Button to={SIGNUP} className="w-full">
              Create an Account
            </Button>
          </motion.div>
        )}
      </motion.ul>
    </motion.aside>
  );
};

export default Drawer;
