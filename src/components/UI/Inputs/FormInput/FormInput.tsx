import React from "react";
import { useField } from "formik";
import { v4 } from "uuid";
import style from "./style.module.scss";

type Props = {
  name: string; // Змінено з label на name для кращого визначення поля
  type?: string;
  label: string;
};

const FormInput: React.FC<Props> = ({ name, label, type = "text" }) => {
  const id = v4();
  const [field, meta, helpers] = useField(name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    helpers.setValue(value.replace(/\s/g, ""));
  };

  return (
    <div className={style.container}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...field} type={type} onChange={handleChange} />
      {meta.touched && meta.error ? (
        <span className={style.error}>{meta.error}</span>
      ) : null}
    </div>
  );
};

export { FormInput };
