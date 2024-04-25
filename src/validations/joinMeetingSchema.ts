interface ValidationType {
  meetingId: string;
  name: string;
}

const validation = (values: ValidationType) => {
  const errors = {
    meetingId: "",
    name: ""
  };

  if (values.meetingId.length === 0) {
    errors.meetingId = "A meeting ID is required";
  } else if (values.meetingId.length < 2) {
    errors.meetingId = "Invalid meeting ID";
  }

  if (values.name.length === 0) {
    errors.name = "A name is required";
  } else if (values.name.length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  return errors;
};
export default validation;
