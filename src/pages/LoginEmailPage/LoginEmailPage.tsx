import React from "react";
import style from "./style.module.scss";
import { LoginForm } from "../../components/UI/Forms";

const LoginEmailPage: React.FC = () => {
  return (
    <div className={style.container}>
      <LoginForm />
    </div>
  );
};

export default LoginEmailPage;
