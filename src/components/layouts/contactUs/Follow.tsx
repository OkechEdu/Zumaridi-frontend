import { ZUimages } from "assets";

const Follow = () => {
  return (
    <div className=" w-full bg-white flex items-center justify-center px-8 ">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3 flex-row  rounded-md px-12 py-8 shadow-lg md:w-3/4 w-full bg-white md:absolute md:-mt-0 -mt-8">
        <div className="md:border-r-2 border-r-none md:border-b-0 border-b-2  border-gray-100  md:p-4 py-8 px-4 flex flex-col items-center justify-center">
          <div className="text-lg mx-auto font-normal">Follow us</div>
          <div className="flex items-center p-4 justify-center space-x-1 ">
            <button className="w-9 h-9 flex items-center justify-center rounded-full  shadow-lg bg-white">
              <img src={ZUimages.zuFacebook} className="w-4 h-4" alt="linkedin" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full  shadow-lg bg-white">
              <img src={ZUimages.zuInstagram} className="w-4 h-4" alt="linkedin" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full  shadow-lg bg-white">
              <img src={ZUimages.zuTwitter} className="w-4 h-4" alt="linkedin" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full  shadow-lg bg-white">
              <img src={ZUimages.zuLinkedin} className="w-4 h-4" alt="linkedin" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full  shadow-lg bg-white">
              <img src={ZUimages.zuYouTube} className="w-4 h-4" alt="linkedin" />
            </button>
          </div>
        </div>
        <div className="md:border-r-2 border-r-none md:border-b-0 border-b-2 border-gray-100 md:p-4 py-8 px-4 flex flex-col gap-4 justify-center">
          <div className="flex md:flex-row flex-col text-[#25373F] items-center justify-center md:gap-4 gap-2">
            <img src={ZUimages.zuPhoneCall} className="w-5 h-5" alt="linkedin" />
            <a href="tel:+31621922705">
              <p>+31621922705</p>
            </a>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-center md:gap-4 gap-2">
            <img src={ZUimages.envelope} className=" w-5  h-5" alt="linkedin" />
            <a href="mailto:info@zumaridi.io">
              <p className="text-lg text-[#25373F] font-light">info@zumaridi.io</p>
            </a>
          </div>
        </div>
        <div className="md:p-4 py-8 flex items-center justify-center">
          <div className="flex items-center text-black py-5 md:flex-row flex-col md:gap-4 gap-2">
            <img src={ZUimages.location} className=" w-5 h-5" alt="linkedin" />
            <p className="text-center text-lg text-[#25373F] font-light">
              Mombasa Road, Mavoko 22A Everest Park, Court 2, Athi River, Nairobi - Kenya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Follow;
