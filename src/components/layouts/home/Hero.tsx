import { ZUimages } from "assets";
import { SIGNUP } from "routes/CONSTANTS";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div
      className="w-full md:h-screen h-[50vh] bg-black-100"
      style={{ backgroundImage: `url('${ZUimages.heroBackground}')` }}
    >
      <div className="bg-black-100 bg-opacity-50 absolute inset-0 flex items-center justify-between md:h-screen h-[50vh] overflow-hidden w-full">
        <div className=" flex flex-col md:gap-12 gap-4 text-white md:pl-20 pl-5  md:w-[711px] w-[284px] pt-8">
          <div className="md:leading-[100px] leading-8">
            <p className="text-[28px] md:text-[73px] text-white font-normal">
              Connect Simply, Engage
              <span className="font-black text-[#50C878]"> Powerfully.</span>
            </p>
          </div>

          <p className=" md:text-[28px] text-lg">
            The end-to-end video engagement platform enabling organizations to create meetings and
            webinars at scale.
          </p>
          <div className="md:w-full ">
            <Link to={SIGNUP}>
              <div className="w-[85%] bg-[#50C878] hover:bg-green md:py-4 py-2 px-4 flex items-center justify-center rounded-md">
                GET STARTED!
              </div>
            </Link>
          </div>
        </div>

        <div className="md:mt-60">
          <img
            src={ZUimages.youngManWithVector}
            className=" md:h-full h-[30vh] md:w-full w-[100px]"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
