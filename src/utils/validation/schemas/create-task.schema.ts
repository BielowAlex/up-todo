import * as Yup from "yup";

export const taskSchema = Yup.object().shape({
  title: Yup.string().required("Field is required"),
  description: Yup.string().required("Field is required"),
});
