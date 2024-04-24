import React from "react";
import style from "./style.module.scss";
import { v4 } from "uuid";
import { useField } from "formik";
import TextareaAutosize from "react-textarea-autosize";

type Props = {
  name: string;
  label: string;
};
const TextArea: React.FC<Props> = ({ name, label }) => {
  const id = v4();
  const [field, meta, helpers] = useField(name);

  const handleChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    await helpers.setValue(value);
  };
  return (
    <div className={style.container}>
      <label htmlFor={id}>{label}</label>
      <TextareaAutosize
        id={id}
        {...field}
        name={name}
        onChange={handleChange}
      />
      {meta.touched && meta.error ? (
        <span className={style.error}>{meta.error}</span>
      ) : null}
    </div>
  );
};

export { TextArea };
