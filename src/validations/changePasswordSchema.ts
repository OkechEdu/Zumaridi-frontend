const validation = (values: {
  currentPassword: string;
  confirmPassword: string;
  newPassword: string;
}) => {
  const errors = {
    currentPassword: "",
    confirmPassword: "",
    newPassword: ""
  };
  if (!values.currentPassword) {
    errors.currentPassword = "Password is required";
  } else if (
    !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(values.currentPassword)
  ) {
    errors.currentPassword = "Weak Password";
  } else if (values.currentPassword.length > 12) {
    errors.currentPassword = "Password length exceeded";
  }
  if (!values.newPassword) {
    errors.newPassword = "New password is required";
  } else if (
    !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(values.newPassword)
  ) {
    errors.newPassword =
      "Weak Password. Password must have at least: 1 upper case, 1 digit, 1 special character, Minimum eight in length";
  } else if (values.newPassword.length > 25) {
    errors.newPassword = "Password length exceeded";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Invalid password";
  } else if (values.confirmPassword !== values.newPassword) {
    errors.confirmPassword = "Passwords don't match";
  }
  return errors;
};

export default validation;
