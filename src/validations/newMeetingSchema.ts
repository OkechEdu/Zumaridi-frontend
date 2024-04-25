interface ValidationType {
  conferenceTitle: string;
  description: string;
  date: string;
  time: string;
}

const validation = (values: ValidationType) => {
  const errors = {
    conferenceTitle: "",
    description: "",
    date: "",
    time: ""
  };

  if (values.conferenceTitle.length === 0) {
    errors.conferenceTitle = "A conference Title is required";
  } else if (values.conferenceTitle.length < 4) {
    errors.conferenceTitle = "Invalid Conference Title";
  }

  if (values.description.length === 0) {
    errors.description = "A description is required";
  } else if (values.description.length < 10) {
    errors.description = "Description must be at least 10 characters";
  }
  if (values.date.length === 0) {
    errors.date = "Date is required";
  }

  if (values.time.length === 0) {
    errors.time = "Time is required";
  }

  return errors;
};
export default validation;
