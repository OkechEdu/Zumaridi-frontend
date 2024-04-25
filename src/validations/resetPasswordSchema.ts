const validation = (values: { password: string; confirmPassword: string }) => {
  const errors = {
    password: "",
    confirmPassword: ""
  };
  if (!values.password) {
    errors.password = "Password is required";
  } else if (
    !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(values.password)
  ) {
    errors.password =
      "Weak Password. Password must have at least: 1 upper case, 1 digit, 1 special character, Minimum eight in length";
  } else if (values.password.length > 25) {
    errors.password = "Password length exceeded";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Invalid password";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords dont match";
  }
  return errors;
};
export default validation;
