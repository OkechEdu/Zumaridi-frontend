import { ZUimages } from "assets";
import {
  Button,
  ZuArcheryTarget,
  ZuClipboard,
  ZuDiamondHand,
  ZuFlash,
  ZuFocus,
  ZuMoneyCoins
} from "components";
import { SIGNUP } from "routes/CONSTANTS";

const AboutView = () => {
  return (
    <div className="text-lg text-gray-300 bg-white">
      <div
        className="relative w-full min-h-[80vh] overflow-hidden bg-cover bg-center bg-white bg-no-repeat"
        style={{ backgroundImage: `url('${ZUimages.aboutBackground}')` }}
      >
        <img src={ZUimages.aboutTop} className="absolute top-0 right-0" />
        <img src={ZUimages.aboutBottom} className="absolute bottom-0 left-0" />
        <div className="relative py-10 px-5 md:px-10 xl:px-20 w-full h-full flex flex-col lg:flex-row items-center lg:space-x-5">
          <div className="w-full lg:w-1/2">
            <p className="text-green text-2xl font-medium">Welcome to Zumaridi</p>
            <h1>
              Connect Simply, <br /> Engage
              <span className="text-green font-bold"> Powerfully.</span>
            </h1>
            <div className="">
              <h6 className="text-justify font-semibold leading-8 text-gray mb-10">
                Zumaridi is a live streaming and conferencing platform where you can connect simply
                and engage powerfully. Zumaridi comes from the Swahili word meaning "Emerald" The
                emerald has been a gem of fascination in many cultures for over six thousand years.
                It is so prized, that carat for carat, a fine emerald may be two to three times as
                valuable as a diamond. Zumaridi harnesses the power of collaboration to create
                innovative solutions to solve African problems and empower young people in Africa.
              </h6>
              <Button to={SIGNUP} className="uppercase ">
                Get Started
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
            <img src={ZUimages.aboutConference} className="" />
          </div>
        </div>
      </div>

      <div className="w-full px-5 py-20 lg:py-40 flex justify-center">
        <div className="w-full lg:w-2/3 bg-white shadow-lg rounded-xl">
          <div className="w-full flex flex-col md:flex-row justify-around items-center py-10">
            <div className="flex flex-col items-center md:items-start px-5 space-y-5">
              <div className="flex items-center space-x-2">
                <ZuArcheryTarget className="w-20 h-20" color="#50C878" />
                <h1>Mission</h1>
              </div>
              <p className="text-gray-200">Connecting people through technology</p>
            </div>
            <div className="rotate-90 md:rotate-0 w-px h-20 bg-gray-300/30 rounded" />
            <div className="flex flex-col items-center md:items-start px-5 space-y-5">
              <div className="flex items-center space-x-2">
                <ZuFocus className="w-20 h-20" />
                <h1>Vision</h1>
              </div>
              <p className="text-gray-200">Innovate for change</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 bg-[#EEFDEE] w-full flex flex-col items-center justify-center space-y-5 md:space-y-20">
        <h3 className="font-bold">Why choose us</h3>
        <div className="px-5 w-full max-w-6xl flex flex-col md:flex-row text-center space-y-3 md:space-y-0 md:space-x-5 ">
          <div className="relative w-full flex flex-col items-center justify-center space-y-3 md:space-y-5">
            <div className="relative w-16 h-16 rounded-full bg-[#FFD166]">
              <ZuClipboard className="w-14 h-14 absolute -bottom-3 md:-bottom-5 -right-4" />
            </div>
            <h6 className="font-bold">Manage Smartly</h6>
            <h6 className="w-2/3 md:w-full">
              Amet minim mollit non deserunt ullamco est sit aliqua
            </h6>
          </div>
          <div className="w-full flex flex-col items-center justify-center space-y-3 md:space-y-5">
            <div className="relative w-16 h-16 rounded-full bg-[#96F7D2]">
              <ZuFlash className="w-14 h-14 absolute -bottom-3 md:-bottom-5 -right-4" />
            </div>
            <h6 className="font-bold">Communicate Fast</h6>
            <h6 className="w-2/3 md:w-full">
              Amet minim mollit non deserunt ullamco est sit aliqua
            </h6>
          </div>
          <div className="w-full flex flex-col items-center justify-center space-y-3 md:space-y-5">
            <div className="relative w-16 h-16 rounded-full bg-[#A9D2FF]">
              <ZuMoneyCoins className="w-14 h-14 absolute -bottom-3 md:-bottom-5 -right-4" />
            </div>
            <h6 className="font-bold">Save Costs</h6>
            <h6 className="w-2/3 md:w-full">
              Amet minim mollit non deserunt ullamco est sit aliqua
            </h6>
          </div>
        </div>
      </div>

      <div className="py-20 px-5 lg:px-20 w-full flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-5">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img src={ZUimages.aboutValue} className="" />
        </div>
        <div className="w-full lg:w-1/2 space-y-5">
          <div className="mb-5 flex items-center space-x-2">
            <ZuDiamondHand size={60} />
            <h2>Value</h2>
          </div>

          <div className="w-full flex items-start space-x-3">
            <div className="w-fit">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FFD166]">
                <img src={ZUimages.ingenuity} />
              </div>
            </div>
            <h6 className="w-full">
              <span className="font-bold">Ingenuity:</span> At Zumaridi, ingenuity is key to solving
              complex problems and overcoming obstacles. We encourage our team members to think
              outside the box and to come up with creative solutions to the challenges we face.
            </h6>
          </div>
          <div className="w-full flex items-start space-x-3">
            <div className="w-fit">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FFD166]">
                <img src={ZUimages.teamwork} />
              </div>
            </div>
            <h6 className="w-full">
              <span className="font-bold">Teamwork:</span> We believe that teamwork is essential to
              achieving our goals. By working together and supporting one another, we are able to
              accomplish more than we could on our own. We encourage collaboration and open
              communication within our team, and we strive to create a positive and inclusive
              working environment.
            </h6>
          </div>
          <div className="w-full flex items-start space-x-3">
            <div className="w-fit">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FFD166]">
                <img src={ZUimages.truck} />
              </div>
            </div>
            <h6 className="w-full">
              <span className="font-bold">Simplicity:</span> We believe in simplicity to make a
              difference, solve problems, and drive positive changes in the world. This simplicity
              is reflected in our mode of operation, our programs, and our communications with our
              stakeholders & partners.
            </h6>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-10 py-10 mb-40 bg-[#F3F4F6] w-full flex flex-col items-center justify-center space-y-10">
        <h3 className="font-bold">Our Patnerships</h3>

        <div className="w-full flex flex-col lg:flex-row items-center justify-center overflow-scroll scroll-smooth snap-start no-scrollbar space-y-3 lg:space-y-0 lg:space-x-5">
          <img src={ZUimages.bmhm} />
          <img src={ZUimages.ahm} />
          <img src={ZUimages.sakaivms} />
          <img src={ZUimages.usaf} />
          <img src={ZUimages.swWestPapua} />
          <img src={ZUimages.mwata} />
        </div>
      </div>
    </div>
  );
};

export default AboutView;
