import * as Yup from "yup";
import { useFormik } from "formik";

import { Auth } from "components";
import { useAppDispatch, useAppSelector } from "hooks";
import { forgotPassword } from "redux/slices/auth.slice";
import ForgetPasswordView from "./ForgetPasswordView";

export const ForgetPasswordContainer = () => {
  const dispatch = useAppDispatch();
  const { isLoading, passwordReset, user } = useAppSelector((state) => state.auth);
  const email = user?.email && user.email.replace(/((?<=^.{1})(([a-zA-Z0-9.]{1,})(?!@)))/, "*****");
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email address").required("Email is required")
    }),
    onSubmit: (details) => {
      void dispatch(forgotPassword(details));
    }
  });

  return (
    <Auth>
      <ForgetPasswordView loading={isLoading} formik={formik} reset={passwordReset} email={email} />
    </Auth>
  );
};
