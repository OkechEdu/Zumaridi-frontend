import { useState, useEffect } from "react";

export const useScroll = () => {
  const hasWindow = typeof window !== "undefined";

  const getScroll = () => {
    return hasWindow ? { x: window.scrollX, y: window.scrollY } : { x: 0, y: 0 };
  };

  const [scroll, setScroll] = useState(getScroll());

  useEffect(() => {
    if (hasWindow) {
      const handleScroll = () => {
        setScroll(getScroll());
      };

      window.addEventListener("scroll", handleScroll);
    }
  }, [hasWindow]);

  return scroll;
};
