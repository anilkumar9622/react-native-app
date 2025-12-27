import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Please enter a email address."),
  password: Yup.string().required('Please Enter your password')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "Must Contain atleast 4 Characters."
  )
});

export {
  loginSchema
}