import * as Yup from "yup";

const settingsSchema = Yup.object().shape({
  firstName: Yup.string().min(2).required(),
  lastName: Yup.string().min(2).required(),
});

export { settingsSchema };
