import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const SignUpMessage: React.FC = () => {
  return (
    <p className={style.message}>
      If you don't have an account, please{" "}
      <Link to="/auth/email/sign-up">sign-up</Link>.
    </p>
  );
};

export { SignUpMessage };
