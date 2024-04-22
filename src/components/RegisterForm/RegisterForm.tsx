import React from "react";
import { Form, Formik } from "formik";
import style from "./style.module.scss";
import { FormikHelpers } from "formik/dist/types";
import { Button, FormInput } from "../UI";
import { registerSchema, transformErrorData } from "../../utils";
import { ApiErrorDetails, RegisterDate, User } from "../../types";
import { useSignUpMutation } from "../../core";
import { authActions, userActions } from "../../store";
import { useAppDispatch } from "../../hooks";
import { useNavigate } from "react-router-dom";

const RegisterForm: React.FC = () => {
  //state
  const [loginError, setLoginError] = React.useState<string>("");
  const initialValue: RegisterDate = {
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    passwordRepeat: "",
  };

  //tools
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //api
  const [signUp, { isLoading }] = useSignUpMutation();

  //logic
  const handleSubmit = React.useCallback(
    async (values: RegisterDate, actions: FormikHelpers<RegisterDate>) => {
      try {
        const data: User = await signUp(values).unwrap();
        console.log(data);
        dispatch(authActions.setAuthStatus(true));
        dispatch(userActions.setUser(data));

        setLoginError("");
        navigate("/");
      } catch (error) {
        const errorDetails: ApiErrorDetails = transformErrorData(error);
        setLoginError(errorDetails.message);
      } finally {
        actions.setSubmitting(false);
      }
    },
    [dispatch, navigate, signUp],
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
            {isLoading ? "Loading..." : "Sign - up"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export { RegisterForm };
