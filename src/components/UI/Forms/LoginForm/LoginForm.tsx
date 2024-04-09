import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { FormikHelpers } from "formik/dist/types";
import { FormInput } from "../../Inputs";
import style from "./style.module.scss";
import { Button } from "../../Buttons";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { authActions } from "../../../../store";
import { SignUpMessage } from "../../../SignUpMessage";

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
  const isLogin: boolean = useAppSelector((state) => state.authReducer.isLogin);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = React.useState<string>("");

  const handleSubmit = React.useCallback(
    async (values: LoginDate, actions: FormikHelpers<LoginDate>) => {
      try {
        if (
          values.email !== "test@gmail.com" ||
          values.password !== "adminadmin"
        ) {
          setLoginError("Invalid email or password");
          actions.setSubmitting(false);
          return;
        }

        localStorage.setItem("token", "true");
        dispatch(authActions.setAuthStatus(!isLogin));
        setLoginError("");

        navigate("/");
      } catch (error) {
        setLoginError("An error occurred. Please try again later.");
      } finally {
        actions.setSubmitting(false);
      }
    },
    [dispatch, isLogin, navigate],
  );
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={style.container}>
          {loginError && <div className={style.error}>{loginError}</div>}
          <FormInput type="email" name="email" label="Email" />
          <FormInput type="password" name="password" label="Password" />
          <SignUpMessage />
          <Button disabled={isSubmitting} type="submit">
            Sign-in
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export { LoginForm };
