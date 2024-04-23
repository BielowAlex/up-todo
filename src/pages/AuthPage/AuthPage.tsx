import React from "react";
import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { GoogleButton, LinkButton, SignUpMessage } from "../../components";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks";

const AuthPage: React.FC = () => {
  const isLogin: boolean = useAppSelector((state) => state.authReducer.isLogin);
  const navigate: NavigateFunction = useNavigate();

  React.useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);
  return (
    <div className={style.container}>
      <h2 className={style.title}>Choose sign-in method </h2>
      <SignUpMessage />
      <nav className={style.navigation}>
        <GoogleButton text="Sign-in" />
        <LinkButton to={"email"}>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Sign-in</span>
        </LinkButton>
      </nav>
    </div>
  );
};

export default AuthPage;
