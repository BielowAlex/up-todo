import React from "react";
import style from "./style.module.scss";
import { ApiErrorDetails, RegisterDate, User } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { FormikHelpers } from "formik/dist/types";
import { authActions, userActions } from "../../store";
import { settingsSchema, transformErrorData } from "../../utils";
import { Form, Formik } from "formik";
import { Button, FormInput } from "../UI";
import { useUpdateMeMutation } from "../../core/api/userPrivateApi.ts";

export type SettingsData = Omit<
  RegisterDate,
  "email" | "passwordRepeat" | "username" | "password"
>;

const SettingsForm: React.FC = () => {
  const { firstName, lastName } = useAppSelector(
    (state) => state.userReducer.user,
  );

  //state
  const [loginError, setLoginError] = React.useState<string>("");
  const initialValue: SettingsData = {
    firstName,
    lastName,
  };

  //tools
  const dispatch = useAppDispatch();

  //api
  const [updateMe, { isLoading }] = useUpdateMeMutation();

  //logic
  const handleSubmit = React.useCallback(
    async (values: SettingsData, actions: FormikHelpers<SettingsData>) => {
      try {
        const data: User = await updateMe(values).unwrap();
        dispatch(authActions.setAuthStatus(true));
        dispatch(userActions.setUser(data));

        setLoginError("Successfully changed");
      } catch (error) {
        const errorDetails: ApiErrorDetails = transformErrorData(error);
        setLoginError(errorDetails.message);
      } finally {
        actions.setSubmitting(false);
      }
    },
    [dispatch, updateMe],
  );
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={settingsSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={style.container}>
          {loginError && <div className={style.error}>{loginError}</div>}
          <FormInput type="text" name="firstName" label="First name" />
          <FormInput type="text" name="lastName" label="Last name" />
          <Button disabled={isSubmitting} type="submit">
            {isLoading ? "Loading..." : "Save"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export { SettingsForm };
