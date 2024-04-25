import * as Yup from "yup";
import { useFormik } from "formik";
import { FormInput, ZuMinus } from "components";

import { SetStateAction } from "react";

interface Props {
  emails: string[];
  setEmails: (value: SetStateAction<string[]>) => void;
}

const SendInvite = ({ emails, setEmails }: Props) => {
  // useEffect(() => {
  //   formik.validateField("member");
  // }, [formik.errors.member]);
  // console.log(formik.errors.member);
  // const addMember = () => {
  //   formik.validateField("member");
  //   formik.errors.member === undefined &&
  //     !emails.includes(formik.values.member) &&
  //     setEmails([...emails, formik.values.member]);
  // };

  const removeEmail = (key: number) => {
    setEmails(emails.filter((email) => email !== emails[key]));
  };

  const formik = useFormik({
    initialValues: {
      member: ""
    },
    validationSchema: Yup.object().shape({
      member: Yup.string().email("Invalid email address").required()
    }),
    onSubmit: ({ member }) => {
      !emails.includes(member) && setEmails([...emails, member]);
    }
  });

  return (
    <div>
      <FormInput
        size="lg"
        type="email"
        id="member"
        name="member"
        label="Invite Team member"
        placeholder="Enter team member email"
        value={formik.values.member}
        errors={formik.errors.member}
        touched={formik.touched.member}
        onChange={formik.handleChange}
        end={
          <button
            type="button"
            onClick={() => formik.handleSubmit()}
            className="p-2 rounded-[6px] border border-green bg-green-100 text-green text-sm"
          >
            Add Member
          </button>
        }
      />

      {emails.length !== 0 && (
        <div className="py-2 space-y-2">
          {emails?.map((email, key) => (
            <div key={key} className="w-full flex items-center justify-between">
              <p className="text-gray-200">{email}</p>
              <button type="button" onClick={() => removeEmail(key)} className="mr-3">
                <ZuMinus />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SendInvite;
