import { ZUicons, ZUimages } from "assets";

const Testimonial = () => {
  return (
    <div>
      <div className="flex flex-col items-center bg-[#F3F4F6] gap-16 py-20 px-5 md:px-10 xl:px-20">
        <div className="items-center text-center">
          <h6 className="text-[#07AA3D] text-lg text-center">Testimonial</h6>
          <br />
          <h3 className="font-bold md:text-5xl text-[24px] md:leading-[70px] md:pb-0 pb-12">
            We Care About Our Customers <br />
            Experience Too
          </h3>
        </div>
        <div className="flex flex-col justify-between  items-center">
          <div className="flex md:flex-row flex-col md:gap-12 gap-20">
            <div className="flex flex-col justify-between h-[290px] md:w-[33%] w-full bg-[#07AA3D] rounded-lg text-justify py-12 pl-8 pr-4 text-white md:shadow-none shadow-green-100 shadow-2xl">
              <img src={ZUimages.circularUser1} className=" absolute -mt-[80px] rounded-full" />
              <p className="text-lg">
                There are many variations passages of <br /> Lorem lpsum available, but the majority
                <br /> have suffered alteration in some form, by injected or randomised.
              </p>
              <div className="flex justify-between border-t-[1px] border-gray-100 pt-4">
                <div>
                  <h6 className="font-bold text-lg">Gary Simon</h6>
                  <p className="text-base">Sholl’s Colonial Cafeteria</p>
                </div>
                <div className="flex flex-row space-between items-center items-justify">
                  <div className="flex flex-row item-end gap-2">
                    <img src={ZUicons.star} alt="" />
                    <img src={ZUicons.star} alt="" />
                    <img src={ZUicons.star} alt="" />
                    <img src={ZUicons.star} alt="" />
                    <img src={ZUicons.star} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between h-[290px] md:w-[33%] w-full bg-white rounded-lg text-justify text-black py-12 pl-8 pr-4 md:shadow-none shadow-green-100 shadow-2xl">
              <img src={ZUimages.circularUser3} className="absolute -mt-[80px] rounded-full" />
              <p className="text-lg">
                There are many variations passages of <br /> Lorem lpsum available, but the majority
                <br /> have suffered alteration in some form, by injected or randomised.
              </p>
              <div className="flex justify-between border-t-[1px] border-gray-100 pt-4">
                <div>
                  <h6 className="font-bold text-lg">Karla Lynn</h6>
                  <p className="text-base">Sholl’s Colonial Cafeteria</p>
                </div>
                <div className="flex flex-row space-between items-center items-justify">
                  <div className="flex flex-row item-end gap-2">
                    <img src={ZUicons.star} alt="" />
                    <img src={ZUicons.star} alt="" />
                    <img src={ZUicons.star} alt="" />
                    <img src={ZUicons.star} alt="" />
                    <img src={ZUicons.star} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[290px] md:w-[33%] w-full justify-between bg-white rounded-lg text-justify text-black py-12 pl-8 pr-4 md:shadow-none shadow-green-100 shadow-2xl">
              <img src={ZUimages.circularUser2} className="absolute -mt-[80px]  rounded-full"></img>
              <p className="text-lg">
                There are many variations passages of <br /> Lorem lpsum available, but the majority
                <br /> have suffered alteration in some form, by injected or randomised.
              </p>

              <div className="flex justify-between border-t-[1px] border-gray-100 pt-4">
                <div>
                  <h6 className="font-bold text-lg">Stella Jennifer</h6>
                  <p className="text-base">Sholl’s Colonial Cafeteria</p>
                </div>
                <div className="flex flex-row space-between items-center items-justify">
                  <div className="flex flex-row item-end gap-2">
                    <img src={ZUicons.star} alt="" />
                    <img src={ZUicons.star} alt="" />
                    <img src={ZUicons.star} alt="" />
                    <img src={ZUicons.star} alt="" />
                    <img src={ZUicons.star} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
