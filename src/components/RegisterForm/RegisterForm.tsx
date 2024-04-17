import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import style from "./style.module.scss";
import { FormikHelpers } from "formik/dist/types";
import { Button, FormInput } from "../UI";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .matches(emailRegex, "Invalid email format")
    .required("Field is required"),
  password: Yup.string()
    .min(8, "Password min length 8 letters")
    .matches(
      passRegex,
      "Your password does not meet the required criteria. Please ensure that your password:\n" +
        "\n" +
        "Is at least 8 characters long.\n" +
        "Contains at least one uppercase letter (A-Z).\n" +
        "Contains at least one lowercase letter (a-z).\n" +
        "Includes at least one digit (0-9).\n" +
        "Has at least one special character from the following set: !@#$%^&*()\n" +
        "Please adjust your password to comply with these requirements.",
    )
    .required("Field is required"),
  firstName: Yup.string().min(2).required(),
  lastName: Yup.string().min(2).required(),
  username: Yup.string().min(2).required(),
});

type RegisterDate = {
  email: string;
  password: string;
  passwordRepeat: string;
  username: string;
  firstName: string;
  lastName: string;
};

const RegisterForm: React.FC = () => {
  const initialValue: RegisterDate = {
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    passwordRepeat: "",
  };
  const [loginError, setLoginError] = React.useState<string>("");

  const handleSubmit = React.useCallback(
    async (values: RegisterDate, actions: FormikHelpers<RegisterDate>) => {
      try {
        console.log(values);
      } catch (error) {
        setLoginError("An error occurred. Please try again later.");
      } finally {
        actions.setSubmitting(false);
      }
    },
    [],
  );
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={style.container}>
          {loginError && <div className={style.error}>{loginError}</div>}
          <FormInput type="text" name="firstName" label="First name" />
          <FormInput type="text" name="lastName" label="Last name" />
          <FormInput type="text" name="username" label="Username" />
          <FormInput type="email" name="email" label="Email" />
          <FormInput type="password" name="password" label="Password" />
          <FormInput
            type="password"
            name="passwordRepeat"
            label="Repeat password"
          />
          <Button disabled={isSubmitting} type="submit">
            Sign-up
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export { RegisterForm };
