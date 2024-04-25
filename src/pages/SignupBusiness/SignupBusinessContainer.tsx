import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import { Auth } from "components";
import { registerBusiness } from "redux/slices/auth.slice";
import { useAppDispatch, useAppSelector, useQuery } from "hooks";
import { GOOGLE_END_POINT, LINKED_IN_END_POINT, MICROSOFT_END_POINT } from "services/CONSTANTS";

import BusinessDetails from "pages/BusinessDetails";
import SignupBusinessView from "./SignupBusinessView";
import BusinessOnboarding from "pages/BusinessOnboarding";

export const SignupBusinessContainer = () => {
  const query = useQuery();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      fullname: "",
      terms: false
    },
    validationSchema: Yup.object().shape({
      fullname: Yup.string().required("Fullname is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          "Weak Password. Password must have at least: 1 upper case, 1 digit, 1 special character, Minimum eight in length"
        ),
      terms: Yup.boolean().isTrue("Terms and condition not accepted")
    }),

    onSubmit: (details) => {
      void dispatch(
        registerBusiness({
          email: details.email,
          password: details.password,
          firstName: details.fullname.split(" ")[0],
          lastName: details.fullname.split(" ")[1]
        })
      )
        .unwrap()
        .then(() => {
          setTimeout(() => {
            toast.success(
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              `Verification Link has been sent to your email, kindly follow the instruction in the mail to verify your account`
            );
          }, 5000);
        });
    }
  });

  const googleLogin = () => {
    window.open(`${GOOGLE_END_POINT}?type=business`, "_self");
  };
  const microsoftLogin = () => {
    window.open(`${MICROSOFT_END_POINT}?type=business`, "_self");
  };
  const linkedLogin = () => {
    window.open(`${LINKED_IN_END_POINT}?type=business`, "_self");
  };
  return (
    <Auth>
      {query.get("next") === "onboarding" ? (
        <BusinessOnboarding ownerId={query.get("owner") as string} />
      ) : query.get("next") === "onboarding_details" ? (
        <BusinessDetails />
      ) : (
        <SignupBusinessView
          formik={formik}
          loading={isLoading}
          googleLogin={googleLogin}
          microsoftLogin={microsoftLogin}
          linkedLogin={linkedLogin}
        />
      )}
    </Auth>
  );
};
