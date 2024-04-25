import { Link } from "react-router-dom";
import { ZUimages } from "assets";
import { LOGIN, SIGNUP_BUSINESS, SIGNUP_INDIVIDUAL } from "routes/CONSTANTS";
import { ZuArrowRight } from "components";

const SignupView = () => {
  return (
    <div className="mt-5 w-full space-y-10">
      <div className="w-full flex justify-end">
        <p>
          Already have an account?{" "}
          <Link to={LOGIN} className="text-primary">
            Sign in
          </Link>
        </p>
      </div>
      <div className="w-full xl:w-2/3">
        <div className="w-full lg:w-3/4">
          <h4>Join Us!</h4>
          <p className="text-lg capitalize text-gray-200">
            To begin this journey, tell us what type of account you’d be opening.
          </p>
        </div>

        <Link to={SIGNUP_INDIVIDUAL}>
          <div className="mt-10 w-full p-5 group bg-white hover:bg-green-100/20 flex items-center rounded-md space-x-5 hover:border-1 hover:border-green shadow">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <img src={ZUimages.firstPolygon} className="" alt="" />
              <img src={ZUimages.polyUser} className="absolute" alt="" />
            </div>
            <div className="w-full space-y-2">
              <h6 className="text-lg font-bold">Individual</h6>
              <p className="text-base text-gray-200">
                Personal account to manage all you activities.
              </p>
            </div>
            <ZuArrowRight size={30} className="text-green hidden group-hover:block" />
          </div>
        </Link>

        <Link to={SIGNUP_BUSINESS}>
          <div className="mt-10 w-full p-5 group bg-white hover:bg-green-100/20 flex items-center rounded-md space-x-5 hover:border-1 hover:border-green shadow">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <img src={ZUimages.secondPolygon} alt="" />
              <img src={ZUimages.briefcase} className="absolute" alt="" />
            </div>
            <div className="w-full space-y-2">
              <h6 className="text-lg font-bold">Business</h6>
              <p className="text-base text-gray-200">
                Own or belong to a company, this is for you.
              </p>
            </div>
            <ZuArrowRight size={30} className="text-green hidden group-hover:block" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SignupView;
