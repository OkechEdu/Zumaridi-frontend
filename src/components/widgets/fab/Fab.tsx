import { ZuArrowUp } from "components/icons";
import { useScroll } from "hooks";

const scrollUp = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Fab = () => {
  const { y } = useScroll();
  return (
    <div
      onClick={scrollUp}
      className={`${
        y >= 300 ? "flex lg:hidden" : "hidden"
      } fixed bottom-5 right-5 w-16 h-16 items-center justify-center rounded-full bg-primary z-40`}
    >
      <ZuArrowUp size={20} />
    </div>
  );
};

export default Fab;
