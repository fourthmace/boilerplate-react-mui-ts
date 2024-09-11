import * as Yup from "yup";

export const ProfileUpdateSchema = Yup.object().shape({
  email: Yup.string().required("email is required"),
  password: Yup.string(),
});

export const ProfileUpdateDefaultValues = {
  email: "",
  password: "",
};
