import React from "react";
import { Form, Formik } from "formik";
import style from "./style.module.scss";
import { FormikHelpers } from "formik/dist/types";
import { Button, FormInput } from "../UI";
import { registerSchema } from "../../utils";

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
