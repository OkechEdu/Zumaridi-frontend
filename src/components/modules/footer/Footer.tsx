import { Link } from "react-router-dom";

import { ZUimages } from "assets";
import { Button } from "components/widgets";
import { ZuEmail, ZuPhone, ZuLocation, ZuFacebook, ZuTwitter } from "components/icons";
import { SIGNUP } from "routes/CONSTANTS";

const Footer = () => {
  return (
    <div className="relative w-full px-5 md:px-10 pt-10 flex flex-col items-center justify-center bg-no-repeat bg-cover text-white bg-black-100 overflow-hidden">
      <div className="absolute -left-[150px] -top-[200px] w-[300px] h-[300px] md:-left-[312px] md:-top-[560px] md:w-[750px] md:h-[750px] rounded-full bg-[#FFD166]"></div>
      <div className="relative lg:w-3/4 space-y-10">
        <div className="w-full flex flex-col py-5 items-center justify-center">
          <h1 className="text-center text-[40px] md:text-[60px]">
            It's easy to get <br /> started. Start now.
          </h1>
          <Button to={SIGNUP}>Start for free</Button>
        </div>

        <div className="w-full py-5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-5 justify-around">
          <div className="space-y-5 col-span-2 md:col-span-3 xl:col-span-2">
            <img src={ZUimages.logo} alt="logo" />
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
          </div>

          <div className="space-y-5">
            <p>Company</p>

            <div className="flex flex-col space-y-2">
              <Link to="#">About us</Link>
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms & Condition</Link>
              <Link to="#">Contact</Link>
            </div>
          </div>

          <div className="space-y-5">
            <p>More Links</p>

            <div className="flex flex-col space-y-2">
              <Link to="#">Home</Link>
              <Link to="#">Products</Link>
              <Link to="#">Downloads</Link>
              <Link to="#">Services</Link>
              <Link to="#">Pricing</Link>
            </div>
          </div>

          <div className="space-y-5 col-span-2 md:col-span-1">
            <p>Contact Details</p>

            <div className="flex flex-col space-y-2">
              <div className="inline-flex items-center gap-3">
                <ZuLocation size={20} />
                <p>Texas, USA</p>
              </div>
              <div className="inline-flex items-center gap-3">
                <ZuPhone size={20} />
                <div>
                  <p>+31 62 19 22 705 </p>
                  <p>7 Days - 8am - 10pm</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-3">
                <ZuEmail size={20} />
                <p>info@zumaridi.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-between border-t-2 py-3">
          <div>© 2022 ZUMARIDI, All Rights Reserved</div>

          <div className="inline-flex items-center gap-5">
            <ZuFacebook size={16} />
            <ZuTwitter size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
