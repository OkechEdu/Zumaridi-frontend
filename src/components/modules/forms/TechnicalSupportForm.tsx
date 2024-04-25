import { useState } from "react";
import { Form, Formik } from "formik";
import { technicalSupportSchema } from "validations";
import InputFormGroup from "./InputFormGroup";
import TextareaFormGroup from "./TextAreaFormGroup";
// import { paperclip, volume, rotateRight, vectorOne, vectorTwo, vectorThree } from "assets/icons";
import { paperclip, timesCircle } from "assets/icons";
import { requestTechnicalSupport } from "services/contact.service";
import { toast } from "react-toastify";
import useAlertMessage from "hooks/useAlertMessage";
import { RESPONSE_ERROR, RESPONSE_SUCCESS, ZUMARIDI_USER_DATA } from "services/CONSTANTS";
import isEmptyObject from "utils/isEmptyObject";
import { Loader } from "components/widgets";
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const TechnicalSupportForm = () => {
  const { AlertMessage, setMessage } = useAlertMessage();

  const data = JSON.parse(localStorage.getItem(ZUMARIDI_USER_DATA) as string);
  const successMessage = "Your request has been received!";

  const formikInitialValues = {
    firstName: isEmptyObject(data?.user) ? "" : data.user.name?.firstName,
    lastName: isEmptyObject(data?.user) ? "" : data.user.name?.lastName,
    email: isEmptyObject(data?.user) ? "" : data.user.email,
    subject: "",
    message: ""
  };

  interface FormikBag {
    setSubmitting: (isSubmitting: boolean) => void;
    resetForm: () => void;
  }

  const handleSubmit = (values: FormValues, FormikBag: FormikBag) => {
    const formData: any = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });
    if (file != null) formData.append("file", file);
    requestTechnicalSupport(formData)
      .then((response: any) => {
        let responseMessage = {
          status: response?.STATUS,
          content: response?.MESSAGE
        };
        if (response?.STATUS === RESPONSE_SUCCESS) {
          toast.success(response?.MESSAGE);
          FormikBag.resetForm();
          FormikBag.setSubmitting(false);
          responseMessage = { ...responseMessage, content: successMessage };
          setFile(undefined);
        }
        setMessage({ ...responseMessage });
      })
      .catch((error) => {
        toast.error(error?.MESSAGE);
        setMessage({ ...{}, status: RESPONSE_ERROR, content: error });
      });
  };

  const [file, setFile] = useState<File | undefined>(undefined);

  const fileHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const fileData = evt.target.files?.[0];

    if (fileData != null) {
      setFile(fileData);
    }
  };

  const onClose = () => {
    setFile(undefined);
  };

  return (
    <div className="p-4">
      <Formik
        initialValues={formikInitialValues}
        onSubmit={handleSubmit}
        validate={technicalSupportSchema}
        enableReinitialize={true}
      >
        {({ isSubmitting }) => {
          return (
            <div>
              <AlertMessage />
              <Form className="flex flex-col gap-6">
                <div className="flex justify-between items-center gap-2 h-40px]">
                  <InputFormGroup
                    nameAndId="firstName"
                    label="First Name"
                    placeholder=""
                    type="text"
                    labelClassName="text-black font-medium text-[14px]"
                    className="border-[#D1D1D6] border-2 w-full rounded-lg placeholder-[#D1D1D6] text-black px-4 py-2"
                  />
                  <InputFormGroup
                    nameAndId="lastName"
                    label="Last Name"
                    placeholder=""
                    type="text"
                    labelClassName="text-black font-medium text-[14px]"
                    className="border-[#D1D1D6] border-2 w-full rounded-lg placeholder-[#D1D1D6] text-black px-4 py-2"
                  />
                </div>
                <InputFormGroup
                  nameAndId="email"
                  label="Email Address"
                  placeholder=""
                  type="email"
                  labelClassName="text-black font-medium text-[14px]"
                  className="border-[#D1D1D6] border-2 w-full rounded-lg placeholder-[#D1D1D6] text-black px-4 py-2"
                />
                <InputFormGroup
                  nameAndId="subject"
                  label="Subject"
                  placeholder=""
                  type="text"
                  labelClassName="text-black font-medium text-[14px]"
                  className="border-[#D1D1D6] border-2 w-full rounded-lg placeholder-[#D1D1D6] text-black px-4 py-2"
                />
                <TextareaFormGroup nameAndId="message" label="Message" placeholder="" />

                {file ? (
                  <div className="flex flex-wrap w-full items-center gap-5 cursor-pointer">
                    <span
                      onClick={onClose}
                      className="inline-flex font-base  gap-1 text-lg leading-[150%] text-[#F26021]"
                    >
                      <img src={timesCircle} /> Remove File
                    </span>
                    <span className="text-xl text-[rgba(37, 55, 63, 0.5)]">
                      {file != null ? file.name : null}
                    </span>
                  </div>
                ) : (
                  <div>
                    <label className="flex justify-between w-max items-center gap-1 text-lg text-green border-2 border-green p-2 rounded-md cursor-pointer">
                      <img src={paperclip} />
                      Attach file
                      <input type="file" name="file" className="hidden" onChange={fileHandler} />
                    </label>
                  </div>
                )}

                {/* <div className="flex">
                <div className="mr-8">
                  <div className="border p-[3px] mt-3">
                    <img src={volume} alt="" />
                  </div>
                  <div className="border p-[3px] mt-3">
                    <img src={rotateRight} alt="" />
                  </div>
                </div>
                <div className="mt-2 relative">
                  <div className="ml-4">
                    <div>
                      <img src={vectorOne} alt="" />
                    </div>
                    <div className="absolute left-[10px] bottom-[36px]">
                      <img src={vectorThree} alt="" />
                    </div>
                    <div className="absolute left-[10px] bottom-[31px] ">
                      <img src={vectorTwo} alt="" />
                    </div>
                  </div>
                  <div className="mt-6 text-[10px]">
                    <p className="text-[#A6A6A6] text-center"> reCAPTCHA </p>
                    <p className="text-[#A6A6A6]"> Privacy - Terms </p>
                  </div>
                </div>
              </div> */}
                {/* <InputFormGroup
                nameAndId="code"
                label="Enter the code here:"
                placeholder=""
                type="text"
                labelClassName="text-[#25373F] font-medium text-[20px]"
                className="border-[#D1D1D6] block border-2 w-[8em] rounded-lg placeholder-[#D1D1D6] text-black px-4 py-2"
              /> */}

                <div className="flex md:justify-end ">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className={`flex justify-center bg-green py-4 px-8 md:w-[20%] w-full text-white rounded-md
                    `}
                  >
                    {isSubmitting ? <Loader /> : "Submit"}
                  </button>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default TechnicalSupportForm;
