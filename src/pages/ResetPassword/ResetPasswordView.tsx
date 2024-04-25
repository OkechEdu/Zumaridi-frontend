import { Button, FormInput, Loader } from "components";
import { FormikProps } from "formik";
import { LOGIN } from "routes/CONSTANTS";

interface Props {
  loading: boolean;
  formik: FormikProps<{ password: string; confirmPassword: string }>;
}

const ResetPasswordView = ({ formik, loading }: Props) => {
  return (
    <div className="w-full lg:w-2/3 lg:mt-20 space-y-20">
      <div className="w-full space-y-1">
        <h4 className="font-bold">Reset Password</h4>
        <p className="text-lg text-gray-200 capitalize">Choose A New Password For Your Account</p>
      </div>
      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <FormInput
          required
          size="lg"
          type="password"
          id="password"
          name="password"
          label="Create password"
          placeholder="Your password"
          errors={formik.errors.password}
          touched={formik.touched.password}
          onChange={formik.handleChange}
        />

        <FormInput
          required
          size="lg"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm password"
          errors={formik.errors.confirmPassword}
          touched={formik.touched.confirmPassword}
          onChange={formik.handleChange}
        />

        <Button size="lg" className="w-full flex items-center justify-center bg-green">
          {loading ? <Loader /> : "Reset Password"}
        </Button>
        <Button to={LOGIN} size="lg" variant="outline" className="mt-5 w-full">
          Back To Login
        </Button>
      </form>
    </div>
  );
};

export default ResetPasswordView;
