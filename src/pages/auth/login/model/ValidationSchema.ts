import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().required("email is required"),
  password: Yup.string().required("password is required"),
});

export const LoginDefaultValues = {
  email: "",
  password: "",
};
