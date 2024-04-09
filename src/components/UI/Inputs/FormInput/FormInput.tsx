import React from "react";
import { ErrorMessage, Field } from "formik";
import { v4 } from "uuid";
import style from "./style.module.scss";

type Props = {
  label: string;
  type?: string;
};

const FormInput: React.FC<Props> = ({ label, type = "text" }) => {
  const id = v4();
  return (
    <div className={style.container}>
      <label htmlFor={label}>{label}</label>
      <Field id={id} name={id} type={type} />
      <ErrorMessage name={id} component="div" />
    </div>
  );
};

export { FormInput };
