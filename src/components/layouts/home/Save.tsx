import { ZUimages } from "assets";

const Save = () => {
  return (
    <div className="bg-[#F8F9FC] flex md:flex-row flex-col md:gap-0 gap-8 justify-between px-5 md:px-10 xl:px-20 md:py-20 py-12 ">
      <div className="mt-[35px]">
        <p className="md:text-[59px] text-[24px] font-normal md:leading-[80px] leading-[50px] md:w-[420px] w-full">
          Save your extra money by using
          <span className="text-[#07AA3D]"> Zumaridi.</span>
        </p>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-between bg-white md:h-[515px] h-[390px] md:w-[379px] w-[287px] p-8 shadow-2xl rounded-md z-10 mt-[35px] ">
          <div className="flex flex-col md:gap-4 gap-2 rounded-lg">
            <p className="md:text-[48px] text-[35px] text-gray">$271,284</p>
            <p className="text-lg text-gray-200">Annual Revenue</p>
          </div>
          <div className="bg-white text-gray-200 flex text-3xl gap-12">
            . . . . . . . . . . . . . . . . . . . .
          </div>
          <div className="flex flex-col md:gap-4 gap-2 rounded-lg ">
            <p className="md:text-[48px] text-[35px] text-gray">$4,249</p>
            <p className="text-lg text-gray-200">Savings Using Other Services</p>
          </div>
          <div className="flex flex-col md:gap-4 gap-2 justify-around text-white bg-[#22CC74] my-6 rounded-lg  md:p-6 py-2 px-2">
            <p className="md:text-[48px] text-[35px]">$21,947</p>
            <p className="text-lg">Savings Using Zumaridi</p>
          </div>
        </div>
        <div className="mt-0 -ml-[85px]">
          <img src={ZUimages.dots} className=""></img>
        </div>
      </div>
    </div>
  );
};

export default Save;
