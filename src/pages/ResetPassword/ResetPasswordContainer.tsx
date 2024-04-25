import { useFormik } from "formik";

import * as Yup from "yup";
import { Auth } from "components";
import ResetPasswordView from "./ResetPasswordView";
import { useAppDispatch, useAppSelector } from "hooks";
import { useNavigate, useParams } from "react-router-dom";
import { LOGIN } from "routes/CONSTANTS";
import { resetPassword } from "redux/slices/auth.slice";

export const ResetPasswordContainer = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: ""
    },

    validationSchema: Yup.object().shape({
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          "Weak Password. Password must have at least: 1 upper case, 1 digit, 1 special character, Minimum eight in length"
        )
        .max(25, "Password length exceeded"),
      confirmPassword: Yup.string()
        .required("Password is required")
        .oneOf([Yup.ref("password"), null], "Passwords don't match.")
    }),
    onSubmit: (details) => {
      dispatch(
        resetPassword({
          token,
          password: details.password
        })
      )
        .unwrap()
        .then(() => {
          navigate(LOGIN);
        })
        .catch((err) => console.error(err));
    }
  });
  return (
    <Auth>
      <ResetPasswordView loading={isLoading} formik={formik} />
    </Auth>
  );
};
