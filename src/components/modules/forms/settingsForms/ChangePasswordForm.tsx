import { Form, Formik } from "formik";
import { changePasswordSchema } from "validations";
import { Button } from "components";
import { useState } from "react";
import { ZuEye } from "components/icons";

// interface Props {
//   loading: boolean;
//   formik: FormikProps<{ newPassword: string; confirmPassword: string }>;
// }
interface ChangePasswordValues {
  currentPassword: string;
  confirmPassword: string;
  newPassword: string;
}

const ChangePasswordForm = () => {
  const formikInitialValues = {
    currentPassword: "",
    confirmPassword: "",
    newPassword: ""
  };

  // Reveal passwords variables, not sure if their is a better way to declare this
  // in one data structure
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  /*
    TODO:::
    Instead of three separate functions of revealing the passwords we can have one function
    taking an argument from the input id/name and returning the it's passwords
  */
  const togglePassword1 = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };
  const togglePassword2 = () => {
    setShowNewPassword(!showNewPassword);
  };
  const togglePassword3 = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (values: ChangePasswordValues) => {
    console.log(values);
  };
  return (
    <div className="h-[400px] px-4">
      <h4 className="font-bold">Change Your Password</h4>
      <p className="text-lg text-black-200 capitalize">
        Keep your account extra secure by changing password every 90 days with a password that does
        not include your names, age and date of birth
      </p>
      <Formik
        initialValues={formikInitialValues}
        onSubmit={handleSubmit}
        validate={changePasswordSchema}
      >
        <Form className="flex flex-col gap-4 py-4 px-2">
          <label
            htmlFor="Current Password"
            className="flex text-black text-[18px] relative w-full mb-3"
          >
            <input
              required
              type={showCurrentPassword ? "text" : "password"}
              id="currentPassword"
              name="currentPassword"
              placeholder="Current Password"
              autoComplete="on"
              className="p-2 border-2 border-green-200 rounded-md w-full"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 ">
              <p className="mt-2 mb-2 mr-0 ml-0 text-gray-200" onClick={togglePassword1}>
                {<ZuEye />}
              </p>
            </div>
          </label>
          <label htmlFor="New Password" className="text-black text-[18px] relative w-full mb-3">
            <input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              name="newPassword"
              placeholder="New Password"
              className="p-2 border-2 border-green-200 rounded-md w-full"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 ">
              <p className="mt-2 mb-2 mr-0 ml-0 text-gray-200" onClick={togglePassword2}>
                {<ZuEye />}
              </p>
            </div>
          </label>
          <label
            htmlFor="Confirm New Password"
            className="text-black text-[18px] relative w-full mb-3"
          >
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="p-2 border-2 border-green-200 rounded-md w-full text-green text-[18px]"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 ">
              <p className="mt-2 mb-2 mr-0 ml-0 text-gray-200" onClick={togglePassword3}>
                {<ZuEye />}
              </p>
            </div>
          </label>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%"
            }}
          >
            <Button
              size="sm"
              variant="outline"
              className="mt-5 align-center"
              style={{ marginRight: "50px" }}
            >
              Cancel
            </Button>
            <Button size="sm" className="mt-5 align-center bg-green">
              {/* {loading ? <Loader /> : "Change"} */} Change
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default ChangePasswordForm;
