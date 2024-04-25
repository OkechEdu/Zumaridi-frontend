import { FormikProps } from "formik";
import { Link } from "react-router-dom";

import { ZUimages } from "assets";
import { SIGNUP, FORGOT_PASSWORD } from "routes/CONSTANTS";
import { Button, Input, Loader } from "components";
import { useState } from "react";

interface Props {
  loading: boolean;
  linkedLogin: () => void;
  googleLogin: () => void;
  microsoftLogin: () => void;
  formik: FormikProps<{ email: string; remember: boolean; password: string }>;
}

const LoginView = ({ googleLogin, linkedLogin, microsoftLogin, loading, formik }: Props) => {
  const [emailError, setEmailError] = useState("");

  // Validating User Email Provided On Mouse Leave
  const validateEmail = () => {
    if (formik.values.email) {
      const email = formik.values.email;
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(email)) {
        setEmailError("Ensure a valid email is provided.");
      } else {
        setEmailError("");
      }
    }
  };

  return (
    <div className="w-full">
      <div className="w-full xl:w-2/3">
        <div className="w-full space-y-1">
          <h4 className="font-bold">Login your Account!</h4>
          <p className="text-lg text-gray-200 capitalize">
            For the purpose of industry regulation, your details are .
          </p>
        </div>

        <div className="w-full h-px my-5 bg-gray-100 shadow" />
        <form onSubmit={formik.handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="email" className="block text-lg text-gray-200">
              Email address
            </label>
            <Input
              size="lg"
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              placeholder="Enter email address"
              onChange={formik.handleChange}
              onMouseLeave={() => validateEmail()}
              className="w-full"
            />
            {formik.touched.email && formik.errors.password && (
              <p className="text-red text-base ">{formik.errors.email}</p>
            )}
            {emailError && <p className="text-red text-base ">{emailError}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-lg text-gray-200">
              Password
            </label>
            <Input
              size="lg"
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              onChange={formik.handleChange}
              autoComplete="on"
              className="w-full"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red text-base ">{formik.errors.password}</p>
            )}
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Input
                size="sm"
                id="remember"
                name="remember"
                type="checkbox"
                className="accent-green"
                onChange={formik.handleChange}
              />
              <label htmlFor="remember" className="capitalize text-lg text-gray-200">
                Remember me
              </label>
            </div>
            <Link to={FORGOT_PASSWORD} className="text-lg text-gray-200 hover:text-green">
              Forgot password?
            </Link>
          </div>
          <Button
            size="lg"
            type="submit"
            className="w-full flex items-center justify-center bg-green"
          >
            {loading ? <Loader /> : "Login"}
          </Button>
        </form>
        <div className="my-5 w-full flex items-center">
          <div className="w-full h-px bg-gray-100 shadow" />
          <p className="px-5 text-base text-gray-200">Or</p>
          <div className="w-full h-px bg-gray-100 shadow" />
        </div>
        <div className="space-y-3">
          <h6 className="text-lg capitalize text-center">Login with social Accounts</h6>

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
          Don't have an account?{" "}
          <Link to={SIGNUP}>
            <span className="text-primary">Create An Account</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginView;
