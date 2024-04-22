import React from "react";
import style from "./style.module.scss";
import { ApiErrorDetails, User } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { FormikHelpers } from "formik/dist/types";
import { userActions } from "../../store";
import { passwordSchema, transformErrorData } from "../../utils";
import { Form, Formik } from "formik";
import { Button, FormInput } from "../UI";
import {
  useUpdateMeMutation,
  useUpdatePasswordMutation,
} from "../../core/api/userPrivateApi.ts";

export type PasswordData = {
  currentPassword?: string;
  password: string;
  passwordRepeat: string;
};

const PasswordForm: React.FC = () => {
  const userPassword = useAppSelector(
    (state) => state.userReducer.user.password,
  );

  //state
  const [loginError, setLoginError] = React.useState<string>("");
  const initialValue: PasswordData = {
    currentPassword: "",
    password: "",
    passwordRepeat: "",
  };

  //tools
  const dispatch = useAppDispatch();

  //api
  const [updateMe] = useUpdateMeMutation();
  const [updatePassword] = useUpdatePasswordMutation();

  //logic

  const handleSubmit = React.useCallback(
    async (
      { currentPassword, passwordRepeat, password }: PasswordData,
      actions: FormikHelpers<PasswordData>,
    ) => {
      const saveUpdate = (data: User) => {
        dispatch(userActions.setUser(data));
        setLoginError("Successfully changed");
      };

      try {
        if (password !== passwordRepeat) {
          setLoginError("Password does not match");
          return;
        }

        if (userPassword && currentPassword) {
          const data: User = await updatePassword({
            currentPassword,
            newPassword: password,
          }).unwrap();
          saveUpdate(data);

          return;
        }

        const data: User = await updateMe({ password }).unwrap();
        saveUpdate(data);
      } catch (error) {
        const errorDetails: ApiErrorDetails = transformErrorData(error);
        setLoginError(errorDetails.message);
      } finally {
        actions.setSubmitting(false);
      }
    },
    [dispatch, updateMe, updatePassword, userPassword],
  );
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={passwordSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={style.container}>
          {loginError && <div className={style.error}>{loginError}</div>}
          {userPassword && (
            <FormInput
              type="password"
              name="currentPassword"
              label="Current Password"
            />
          )}
          <FormInput type="password" name="password" label="Password" />
          <FormInput
            type="password"
            name="passwordRepeat"
            label="Repeat password"
          />
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? "Loading..." : "Save"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export { PasswordForm };
