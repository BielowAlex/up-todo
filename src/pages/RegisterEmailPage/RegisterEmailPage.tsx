import React from "react";
import style from "./style.module.scss";
import { RegisterForm } from "../../components/RegisterForm";
import { GoogleButton } from "../../components";

const RegisterEmailPage: React.FC = () => {
  return (
    <div className={style.container}>
      <h2>Sign-up form</h2>
      <RegisterForm />
      <span>Also you can use Google Sign-up</span>
      <GoogleButton text="Sign - up" />
    </div>
  );
};

export default RegisterEmailPage;
