const validation = (values: {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const errors: any = {};
  if (!values.firstName) {
    errors.firstName = "First Name is required";
  } else if (values.firstName.length < 3) {
    errors.firstName = "Invalid First Name";
  }
  if (!values.lastName) {
    errors.lastName = "Last Name is required";
  } else if (values.lastName.length < 3) {
    errors.lastName = "Invalid Last Name";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.subject) {
    errors.subject = "Subject is required";
  } else if (values.subject.length < 5) {
    errors.subject = "Invalid SUbject";
  }
  if (!values.message) {
    errors.message = "Message is required";
  } else if (values.message.length < 10) {
    errors.message = "Invalid Message";
  }
  return errors;
};
export default validation;
