import * as Yup from "yup";
import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { LOGIN } from "routes/CONSTANTS";
import { inviteTeam, update } from "redux/slices/organization.slice";
import { useAppDispatch, useAppSelector, useQuery } from "hooks";

import BusinessDetailsView from "./BusinessDetailsView";

export const BusinessDetailsContainer = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    image: { imageId },
    organization: { isLoading }
  } = useAppSelector((state) => state);
  const [emails, setEmails] = useState<string[]>([]);

  const formik = useFormik({
    initialValues: {
      size: 1
    },
    validationSchema: Yup.object().shape({
      size: Yup.number()
    }),

    onSubmit: (details) => {
      void dispatch(
        inviteTeam({
          emails,
          ownerId: query.get("owner") as string,
          id: query.get("organization") as string
        })
      )
        .unwrap()
        .then(() => {
          void dispatch(
            update({
              logo: imageId,
              size: details.size,
              ownerId: query.get("owner") as string,
              id: query.get("organization") as string
            })
          )
            .unwrap()
            .then(() => {
              setTimeout(() => {
                navigate({
                  pathname: LOGIN
                });
              }, 1000);
            });
        });
    }
  });

  return (
    <BusinessDetailsView
      emails={emails}
      setEmails={setEmails}
      formik={formik}
      loading={isLoading}
    />
  );
};
