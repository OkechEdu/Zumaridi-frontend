import { Form, Formik } from "formik";
import { joinMeetingSchema } from "validations";

interface JoinMeetingValues {
  meetingId: string;
  name: string;
}

const JoinMeetingForm = () => {
  const formikInitialValues = {
    meetingId: "",
    name: ""
  };

  const handleSubmit = (values: JoinMeetingValues) => {
    console.log(values);
  };
  return (
    <div className="h-[400px] px-4">
      <Formik
        initialValues={formikInitialValues}
        onSubmit={handleSubmit}
        validate={joinMeetingSchema}
      >
        <Form className="flex flex-col gap-4 py-4 px-2">
          <label htmlFor="Meeting I.D" className="text-black text-[18px]">
            Meeting I.D
            <input
              type="text"
              name="meetingId"
              placeholder="My Meeting ID"
              className="p-2 border-2 border-gray-200 rounded-md w-full"
            />
          </label>
          <label htmlFor="Name" className="text-black text-[18px]">
            Name
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="p-2 border-2 border-gray-200 rounded-md w-full"
            />
          </label>
          <label className="text-black flex gap-2">
            <input type="checkbox" />
            Retain name for future use
          </label>
          <p className="text-12px text-black">
            By clicking “Join”, you agree to our{" "}
            <span className="text-green">Terms of Service</span> and{" "}
            <span className="text-green">Privacy Statement</span>.
          </p>
          <div className="flex justify-between pt-8">
            <button
              // onClick={() => {
              //   setOpenModal(false);
              // }}
              className="bg-white text-gray-200 border-2 border-gray-200 rounded-md p-2"
            >
              Cancel
            </button>
            <button className="bg-green p-2 rounded-md">Join Meeting</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default JoinMeetingForm;
