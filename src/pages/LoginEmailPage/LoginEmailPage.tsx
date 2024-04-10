import React from "react";
import style from "./style.module.scss";
import { LoginForm } from "../../components";

const LoginEmailPage: React.FC = () => {
  return (
    <div className={style.container}>
      <h2>Email sign-in form</h2>
      <LoginForm />
    </div>
  );
};

export default LoginEmailPage;
