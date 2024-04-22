import React from "react";
import style from "./style.module.scss";
import { ApiErrorDetails, TaskStatusEnum } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { FormikHelpers } from "formik/dist/types";
import {
  formatDateToYYYYMMDD,
  taskSchema,
  transformErrorData,
} from "../../utils";
import { Form, Formik } from "formik";
import { Button, FormInput } from "../UI";
import {
  useCreateTaskMutation,
  useGetUserTaskQuery,
} from "../../core/api/taskPrivateApi.ts";
import { TaskAction } from "../../store";

export type CreateTaskDate = {
  title: string;
  description: string;
  date: string;
};

const CreateTaskForm: React.FC = () => {
  //state
  const selectedDate = useAppSelector(
    (state) => state.dateReducer.selectedDate,
  );
  const [loginError, setLoginError] = React.useState<string>("");
  const initialValues: CreateTaskDate = {
    title: "",
    description: "",
    date: formatDateToYYYYMMDD(new Date(selectedDate)),
  };

  //tools
  const dispatch = useAppDispatch();
  const formattedDate = formatDateToYYYYMMDD(new Date(selectedDate));

  //api
  const [createTask, { isLoading }] = useCreateTaskMutation();
  const { refetch } = useGetUserTaskQuery({
    status: TaskStatusEnum.InProgress,
    date: formattedDate,
  });

  //methods
  const handleSubmit = React.useCallback(
    async (values: CreateTaskDate, actions: FormikHelpers<CreateTaskDate>) => {
      try {
        await createTask(values).unwrap();
        dispatch(TaskAction.setIsCreateTaskModalOpen(false));

        refetch();
      } catch (error) {
        const errorDetails: ApiErrorDetails = transformErrorData(error);
        setLoginError(errorDetails.message);
      } finally {
        actions.setSubmitting(false);
      }
    },
    [createTask, dispatch, refetch],
  );
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={taskSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={style.container}>
          {loginError && <div className={style.error}>{loginError}</div>}
          <FormInput type="text" name="title" label="Title" />
          <FormInput type="text" name="description" label="Description" />
          <Button disabled={isSubmitting} type="submit">
            {isLoading ? "Loading..." : "Add"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export { CreateTaskForm };
