import { ZUimages } from "assets";
import { ZuArcheryTarget, ZuAthletics, ZuMoneyCoins } from "components/icons";
const AcheiveMore = () => {
  return (
    <div className="py-20">
      <div className="flex md:flex-row flex-col md:gap-20 gap-8 md:justify-start justify-center items-center">
        <div className="flex md:gap-56 gap-4">
          <img src={ZUimages.dots} className="md:m-0 -ml-24" />

          <div className="md:pl-0 pl-4 pr-5">
            <h4 className="md:text-[61px] text-[24px] font-normal md:leading-[90px] leading-[40px] md:w-[530px] w-full">
              Achieve more with the Zumaridi Video Conferencing
            </h4>
          </div>
        </div>
        <div className="text-justify md:pt-10 pt-2">
          <p className="md:text-[21px] text-lg font-normal opacity-70 leading-[35px] md:w-[350px] w-full md:px-0 pl-12 pr-5 text-left">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:gap-0 gap-24 justify-center items-center pl-20 pr-5 md:px-20 pt-8 ">
        <div className="w-[390px] pl-8">
          <div>
            <div className="relative w-16 h-16 rounded-full bg-[#FFD166]">
              <ZuAthletics className="w-14 h-14 absolute -bottom-3 -right-3" />
            </div>
          </div>
          <p className="font-bold pt-8 text-[21px]">Manage Smartly</p>
          <p className="opacity-70 pt-3 md:text-[21px] text-lg">
            Amet minim mollit non
            <br />
            deserunt ullamco est sit aliqua
          </p>
        </div>
        <div className="flex-col w-[390px] pl-8">
          <div>
            <div className="relative w-16 h-16 rounded-full bg-[#96F7D2]">
              <ZuArcheryTarget className="w-14 h-14 absolute -bottom-3 -right-3" />
            </div>
          </div>
          <p className="font-bold pt-8 text-[21px]">Communicate Fast</p>
          <p className="opacity-70 pt-3 md:text-[21px] text-lg">
            Amet minim mollit non
            <br />
            deserunt ullamco est sit aliqua
          </p>
        </div>
        <div className="flex-col w-[390px] pl-8">
          <div>
            <div className="relative w-16 h-16 rounded-full bg-[#A9D2FF]">
              <ZuMoneyCoins className="w-14 h-14 absolute -bottom-3 -right-3" />
            </div>
          </div>
          <p className="font-bold pt-8 text-[21px]">Save Costs</p>
          <p className="opacity-70 pt-3 md:text-[21px] text-lg">
            Amet minim mollit non
            <br />
            deserunt ullamco est sit aliqua
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcheiveMore;
