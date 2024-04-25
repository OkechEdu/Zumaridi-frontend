import { Form, Formik } from "formik";
import { newMeetingSchema } from "validations";
import InputFormGroup from "./InputFormGroup";
import SelectFormGroup from "./SelectFormGroup";
import TextareaFormGroup from "./TextAreaFormGroup";

interface NewMeetingValues {
  conferenceTitle: string;
  description: string;
  date: string;
  time: string;
  event: string;
  allDay: boolean;
}

const NewMeetingForm = () => {
  const formikInitialValues = {
    conferenceTitle: "",
    description: "",
    date: "",
    time: "",
    event: "",
    allDay: false
  };

  const handleSubmit = (values: NewMeetingValues) => {
    console.log(values);
  };

  return (
    <div className="md:px-8 px-2">
      <Formik
        initialValues={formikInitialValues}
        onSubmit={handleSubmit}
        validate={newMeetingSchema}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4">
            <InputFormGroup
              nameAndId="conferenceTitle"
              placeholder="My meeting"
              label="Conference Title"
              type="text"
            />

            <TextareaFormGroup
              nameAndId="description"
              placeholder="Add description"
              label="Add description"
            />
            <div>
              <label htmlFor="when" className="text-black pb-2 text-[18px]">
                When?
              </label>
              <div className="flex gap-2">
                <input
                  type="date"
                  name="date"
                  placeholder="Select a date"
                  className=" w-full border-2 border-[#D1D1D6] rounded-md px-4 py-3"
                />
                <input
                  type="time"
                  name="time"
                  placeholder="Choose a time"
                  className=" w-full border-2 border-[#D1D1D6] rounded-md px-4 py-3"
                />
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <SelectFormGroup nameAndId="event">
                <option value="">Repeat Event</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </SelectFormGroup>
              <input type="checkbox" name="allDay" className="h-8 w-8" />
            </div>

            <div className="flex justify-between items-center">
              <button
                className="border-2 rounded-md p-2 border-[#D1D1D6] text-[#D1D1D6]"
                // onClick={() => setOpenModal(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green py-2 px-4 text-white text-[18px] rounded-md"
              >
                Save Conferencing
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewMeetingForm;
