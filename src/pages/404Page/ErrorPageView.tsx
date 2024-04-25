import { ZUimages } from "assets";
import { Link } from "react-router-dom";
import { HOME } from "routes/CONSTANTS";

const ErrorPageView = () => {
  return (
    <div className="flex flex-col md:gap-16 gap-12 items-center justify-center h-screen bg-white px-28">
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="font-bold text-[61px] text-center">Whoops!</p>
        <p className="text-[20px] text-center">Sorry, this page is not available or broken.</p>
      </div>
      <div>
        <img src={ZUimages.img404} />
      </div>
      <Link
        to={HOME}
        className="bg-[#07AA3D] text-center md:w-[406px] w-4/5 py-4 rounded-xl text-white"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPageView;
