import { FormikProps } from "formik";

import { LOGIN } from "routes/CONSTANTS";
import { Button, FormInput, Loader } from "components";

interface Props {
  loading: boolean;
  reset: boolean;
  email: string;
  formik: FormikProps<{ email: string }>;
}

const ForgetPasswordView = ({ formik, reset, email, loading }: Props) => {
  return (
    <div className="w-full xl:w-2/3 lg:mt-20 space-y-20">
      <div className="w-full space-y-1">
        <h4 className="font-bold">{reset ? "Check your Email" : "Forget Password"}</h4>
        <p className="text-lg text-gray-200 capitalize">
          {reset
            ? `We have sent an email with password reset information to ${email}.`
            : "Enter the email you used to create your account so we can send you instructions on how to reset your password."}
        </p>
      </div>
      <form onSubmit={formik.handleSubmit} className="space-y-5">
        {reset ? (
          <div className="flex mt-6">
            <p className="text-lg text-gray-200 capitalize">
              Didn’t receive the email? Check spam or promotion folder or.
            </p>
          </div>
        ) : (
          <FormInput
            required
            size="lg"
            type="email"
            id="email"
            name="email"
            label="Email"
            placeholder="Enter email address"
            errors={formik.errors.email}
            touched={formik.touched.email}
            onChange={formik.handleChange}
          />
        )}

        <Button
          size="lg"
          type="submit"
          className="w-full flex items-center justify-center bg-green"
        >
          {loading ? <Loader /> : reset ? "Resend Email" : "Send"}
        </Button>
        <Button to={LOGIN} size="lg" variant="outline" className="mt-5 w-full">
          Back To Login
        </Button>
      </form>
    </div>
  );
};

export default ForgetPasswordView;
