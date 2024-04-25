/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Link } from "react-router-dom";

import { LOGIN, SIGNUP } from "routes/CONSTANTS";
import { Button, Dropzone, FormInput, Loader, SendInvite, ZuAngleLeft } from "components";

import type { FormikProps } from "formik";
import type { SetStateAction } from "react";

interface Props {
  loading: boolean;
  emails: string[];
  setEmails: (value: SetStateAction<string[]>) => void;
  formik: FormikProps<{
    size: number;
  }>;
}

const BusinessDetailsView = ({ emails, setEmails, loading, formik }: Props) => {
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
          <h4 className="font-bold">Business Details</h4>
          <p className="text-lg text-gray-200 capitalize">
            Fill in basic details on your business (logo, Team size). You can also invite team
            members
          </p>
        </div>

        <div className="w-full h-px my-5 bg-gray-100 shadow" />
        <form onSubmit={formik.handleSubmit} className="space-y-3">
          <Dropzone />
          <FormInput
            size="lg"
            type="text"
            id="size"
            name="size"
            label="Team Size"
            placeholder="Enter the no. of team member"
            errors={formik.errors.size}
            touched={formik.touched.size}
            onChange={formik.handleChange}
          />

          <SendInvite emails={emails} setEmails={setEmails} />

          <Button
            size="lg"
            type="submit"
            className="w-full flex items-center justify-center bg-green"
          >
            {loading ? <Loader /> : "Continue"}
          </Button>
        </form>

        <div className="my-5 w-full text-center">
          <Link to={LOGIN}>
            <span className=" text-lg text-primary underline underline-offset-2">
              Skip for later
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetailsView;
