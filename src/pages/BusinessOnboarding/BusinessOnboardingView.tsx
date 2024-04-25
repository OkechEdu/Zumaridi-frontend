/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { FormikProps } from "formik";
import { Link } from "react-router-dom";

import { industriesList } from "utils";
import { SIGNUP, TERMS } from "routes/CONSTANTS";
import { Button, FormInput, FormSelect, Input, Loader, ZuAngleLeft } from "components";

interface Props {
  loading: boolean;
  formik: FormikProps<{
    name: string;
    industry: string;
    email: string;
    phoneNumber: string;
    address: string;
    website: string;
    terms: boolean;
  }>;
}

const BusinessOnboardingView = ({ loading, formik }: Props) => {
  return (
    <div className="w-full">
      <Link
        to={SIGNUP}
        className="mb-5 lg:mb-0 lg:absolute top-10 left-5 md:left-10 z-20 flex items-center space-x-2"
      >
        <ZuAngleLeft size={16} />
        <p className="font-bold">Back</p>
      </Link>
      <div className="w-full xl:w-2/3 mb-5">
        <div className="w-full space-y-1">
          <h4 className="font-bold">Register Business Account!</h4>
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
            id="name"
            name="name"
            label="Busines Name"
            placeholder="Enter Business Name"
            errors={formik.errors.name}
            touched={formik.touched.name}
            onChange={formik.handleChange}
          />
          <FormSelect
            required
            size="lg"
            id="industry"
            name="industry"
            options={industriesList}
            label="Busines Industry"
            placeholder="Enter Business Industry"
            errors={formik.errors.industry}
            touched={formik.touched.industry}
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
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            label="Phone number"
            placeholder="Enter Phone number"
            errors={formik.errors.phoneNumber}
            touched={formik.touched.phoneNumber}
            onChange={formik.handleChange}
          />
          <FormInput
            required
            size="lg"
            type="text"
            id="address"
            name="address"
            label="Address"
            placeholder="Enter Address"
            errors={formik.errors.address}
            touched={formik.touched.address}
            onChange={formik.handleChange}
          />
          <FormInput
            required
            size="lg"
            type="text"
            id="website"
            name="website"
            label="Website"
            placeholder="Enter Website"
            errors={formik.errors.website}
            touched={formik.touched.website}
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
            {loading ? <Loader /> : "Sign Up"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BusinessOnboardingView;
