import React from "react";
import style from "./style.module.scss";
import { RegisterForm } from "../../components/RegisterForm";

const RegisterEmailPage: React.FC = () => {
  return (
    <div className={style.container}>
      <h2>Sign-up form</h2>
      <RegisterForm />
    </div>
  );
};

export default RegisterEmailPage;
