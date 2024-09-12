import * as Yup from "yup";

export const CrudUserSchema = Yup.object().shape({
  user_id: Yup.string(),
  user_level: Yup.object().required("user level is required"),
  email: Yup.string().required("email is required"),
  password: Yup.string().test(
    "password-required",
    "password is required",
    function (value) {
      const { user_id } = this.parent;
      if (!user_id || user_id === "") {
        return !!value;
      }
      return true;
    }
  ),
});

export const CrudUserDefaultValues = {
  user_id: "",
  user_level: null,
  email: "",
  password: "",
};
