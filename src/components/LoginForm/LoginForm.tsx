import React from "react";
import { Form, Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { SignUpMessage } from "../SignUpMessage";
import { Button, FormInput } from "../UI";
import { useSignInMutation } from "../../core";
import { loginSchema, transformErrorData } from "../../utils";
import { ApiErrorDetails, LoginDate, User } from "../../types";
import { authActions, userActions } from "../../store";

const LoginForm: React.FC = () => {
  //state
  const [loginError, setLoginError] = React.useState<string>("");
  const initialValues: LoginDate = { email: "", password: "" };

  //tools
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //api
  const [signIn, { isLoading }] = useSignInMutation();

  //methods
  const handleSubmit = React.useCallback(
    async (values: LoginDate, actions: FormikHelpers<LoginDate>) => {
      try {
        const data: User = await signIn(values).unwrap();

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
    [dispatch, navigate, signIn],
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
            {isLoading ? "Loading..." : "Sign - in"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export { LoginForm };
