import { motion } from "framer-motion";

interface MenuProp {
  toggle: Function;
}

interface PathProp {
  d?: string;
  variants: {
    closed: {
      d?: string;
      opacity?: number;
    };
    open: {
      d?: string;
      opacity?: number;
    };
  };
  transition?: {
    duration: number;
  };
}

const Path = (props: PathProp) => {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 25%, 95%)"
      strokeLinecap="round"
      {...props}
    />
  );
};

const Menu = ({ toggle }: MenuProp) => (
  <button className="lg:hidden" onClick={() => toggle()}>
    <svg width="20" height="20" viewBox="0 0 20 20">
      <Path
        variants={{
          closed: { d: "M 2 3.5 L 20 3.5" },
          open: { d: "M 3 16.5 L 17 3.5" }
        }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 3.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);

export default Menu;
