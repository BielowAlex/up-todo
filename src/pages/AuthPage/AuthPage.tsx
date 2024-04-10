import React from "react";
import style from "./style.module.scss";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Button, LinkButton, SignUpMessage } from "../../components";
import { authActions, userActions } from "../../store";
import { hardcodeUser } from "../../constant/user.constant.ts";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useNavigate } from "react-router-dom";

const AuthPage: React.FC = () => {
  const isLogin = useAppSelector((state) => state.authReducer.isLogin);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleGmailAuthButton = () => {
    localStorage.setItem("token", "true");
    dispatch(authActions.setAuthStatus(!isLogin));
    dispatch(userActions.setUser(hardcodeUser));

    navigate("/");
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Choose sign-in method </h2>
      <SignUpMessage />
      <nav className={style.navigation}>
        <Button handleClick={handleGmailAuthButton}>
          <FontAwesomeIcon icon={faGoogle} />
          <span>Sign-in</span>
        </Button>
        <LinkButton to={"email"}>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Sign-in</span>
        </LinkButton>
      </nav>
    </div>
  );
};

export default AuthPage;
