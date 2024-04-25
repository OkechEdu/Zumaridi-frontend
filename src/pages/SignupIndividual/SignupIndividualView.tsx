import { FormikProps } from "formik";
import { Link } from "react-router-dom";

import { ZUimages } from "assets";
import { LOGIN, SIGNUP, TERMS } from "routes/CONSTANTS";
import { Button, Input, FormInput, Loader, ZuAngleLeft } from "components";

interface Props {
  loading: boolean;
  linkedLogin: () => void;
  googleLogin: () => void;
  microsoftLogin: () => void;
  formik: FormikProps<{
    fullname: string;
    email: string;
    password: string;
    refId: string;
    terms: boolean;
  }>;
}

const SignupIndividualView = ({
  googleLogin,
  linkedLogin,
  microsoftLogin,
  loading,
  formik
}: Props) => {
  return (
    <div className="w-full">
      <Link
        to={SIGNUP}
        className="mb-5 lg:mb-0 lg:absolute top-10 left-5 md:left-10 z-20 flex items-center space-x-2"
      >
        <ZuAngleLeft size={16} />
        <p className="font-bold">Back</p>
      </Link>
      <div className="w-full xl:w-2/3">
        <div className="w-full space-y-1">
          <h4 className="font-bold">Register Individual Account!</h4>
          <p className="text-lg text-gray-200 capitalize">
            For the purpose of industry regulation, your details are required.
          </p>
        </div>

        <div className="w-full h-px my-5 bg-gray-100 shadow" />
        <form onSubmit={formik.handleSubmit} className="space-y-3">
          <FormInput
            required
            size="lg"
            type="text"
            id="fullname"
            name="fullname"
            label="Your fullname"
            placeholder="Enter full name"
            errors={formik.errors.fullname}
            touched={formik.touched.fullname}
            onChange={formik.handleChange}
          />
          <FormInput
            required
            size="lg"
            type="email"
            id="email"
            name="email"
            label="Email Address"
            placeholder="Enter email address"
            errors={formik.errors.email}
            touched={formik.touched.email}
            onChange={formik.handleChange}
          />
          <FormInput
            required
            size="lg"
            type="password"
            id="password"
            name="password"
            label="Create password"
            placeholder="Enter password"
            errors={formik.errors.password}
            touched={formik.touched.password}
            onChange={formik.handleChange}
          />
          <FormInput
            disabled={!!formik.values.refId}
            size="lg"
            type="text"
            id="refId"
            name="refId"
            label="Referral Id"
            placeholder="Referral ID"
            value={formik.values.refId}
            errors={formik.errors.refId}
            touched={formik.touched.refId}
            onChange={formik.handleChange}
          />
          <div>
            <div className="flex items-center space-x-3">
              <Input
                id="terms"
                name="terms"
                onChange={formik.handleChange}
                size="sm"
                type="checkbox"
                className="accent-green"
              />
              <p className="capitalize text-lg text-gray-200">
                I agree to{" "}
                <Link to={TERMS} className="text-primary hover:text-primary-100">
                  terms & condition
                </Link>
              </p>
            </div>
            {formik.touched.terms && formik.errors.terms && (
              <p className="text-red text-base ">{formik.errors.terms}</p>
            )}
          </div>
          <Button
            size="lg"
            type="submit"
            className="w-full flex items-center justify-center bg-green"
          >
            {loading ? <Loader /> : "Register Account"}
          </Button>
        </form>
        <div className="my-5 w-full flex items-center">
          <div className="w-full h-px bg-gray-100 shadow" />
          <p className="px-5 text-base text-gray-200">Or</p>
          <div className="w-full h-px bg-gray-100 shadow" />
        </div>
        <div className="space-y-3">
          <h6 className="text-lg capitalize text-center">Register with social Accounts</h6>

          <div className="w-full flex items-center justify-center space-x-5">
            <button
              onClick={googleLogin}
              className="w-12 h-12 flex items-center justify-center rounded-md shadow-lg bg-white"
            >
              <img src={ZUimages.gmail} className="w-6 h-6" alt="linkedin" />
            </button>
            <button
              onClick={microsoftLogin}
              className="w-12 h-12 flex items-center justify-center rounded-md shadow-lg bg-white"
            >
              <img src={ZUimages.micro} className="w-6 h-6" alt="linkedin" />
            </button>
            <button
              onClick={linkedLogin}
              className="w-12 h-12 flex items-center justify-center rounded-md shadow-lg bg-white"
            >
              <img src={ZUimages.link} className="w-6 h-6" alt="linkedin" />
            </button>
          </div>
        </div>
        <p className="my-5 text-lg text-gray-200 text-center">
          Already have an account?
          <Link to={LOGIN}>
            <span className="text-primary"> Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupIndividualView;
