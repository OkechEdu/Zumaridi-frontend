import * as Yup from "yup";
import { useFormik } from "formik";
import { createSearchParams, useNavigate } from "react-router-dom";

import { SIGNUP_BUSINESS } from "routes/CONSTANTS";
import { useAppDispatch, useAppSelector } from "hooks";
import { register } from "redux/slices/organization.slice";

import BusinessOnboardingView from "./BusinessOnboardingView";

interface Props {
  ownerId: string;
}

export const BusinessOnboardingContainer = ({ ownerId }: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.organization);

  const formik = useFormik({
    initialValues: {
      name: "",
      industry: "",
      email: "",
      phoneNumber: "",
      address: "",
      website: "",
      terms: false
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Business name is required"),
      industry: Yup.string().required("Business Industry is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
      address: Yup.string().required("Address is required"),
      website: Yup.string().url("Invalid website").required("Website is required"),
      terms: Yup.boolean().isTrue("Terms and condition not accepted")
    }),

    onSubmit: (details) => {
      void dispatch(
        register({
          ownerId,
          ...details
        })
      )
        .unwrap()
        .then((res) => {
          navigate({
            pathname: SIGNUP_BUSINESS,
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            search: createSearchParams({
              organization: res.organization._id,
              owner: res.organization.owner,
              next: "onboarding_details"
            }).toString()
          });
        });
    }
  });

  return <BusinessOnboardingView formik={formik} loading={isLoading} />;
};
