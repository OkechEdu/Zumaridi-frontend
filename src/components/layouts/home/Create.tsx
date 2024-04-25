import { ZUimages } from "assets";
import { Button } from "components";
import { SIGNUP } from "routes/CONSTANTS";

const Create = () => {
  return (
    <div className=" py-20 md:px-36 px-5 w-full bg-white">
      <div
        style={{ backgroundImage: `url('${ZUimages.lastRowBackground}')` }}
        className="bg-cover bg-center h-80 w-full rounded-3xl md:px-28 px-5 flex md:flex-row flex-col md:justify-between items-center py-5"
      >
        <h5 className="text-white md:text-[45px] text-[24px] mb-12 md:leading-[60px] leading-[40px]">
          Get Started By Creating <br /> an Account
        </h5>
        <Button to={SIGNUP} className="mb-12 px-8">
          Create an Account
        </Button>
      </div>
    </div>
  );
};

export default Create;
