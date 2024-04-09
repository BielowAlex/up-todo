import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { FormikHelpers } from "formik/dist/types";
import { FormInput } from "../../Inputs";
import style from "./style.module.scss";
import { Button } from "../../Buttons";
import { Link } from "react-router-dom";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .matches(emailRegex, "Invalid email format")
    .required("Field is required"),
  password: Yup.string()
    .min(8, "Password min length 8 letters")
    .required("Field is required"),
});

type LoginDate = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const initialValues: LoginDate = { email: "", password: "" };

  const handleSubmit = (
    values: LoginDate,
    actions: FormikHelpers<LoginDate>,
  ) => {
    console.log(values);
    actions.setSubmitting(false);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={style.container}>
          <FormInput type="email" label="Email" />
          <FormInput type="password" label="Password" />
          <p className={style.message}>
            If you don't have an account, please{" "}
            <Link to="/auth/email/sign-up">sign-up</Link>.
          </p>
          <Button disabled={isSubmitting}>Sign-in</Button>
        </Form>
      )}
    </Formik>
  );
};

export { LoginForm };
