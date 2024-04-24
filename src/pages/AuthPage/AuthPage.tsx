import React from "react";
import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Button, GoogleButton, SignUpMessage } from "../../components";

const AuthPage: React.FC = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Choose sign-in method </h2>
      <SignUpMessage />
      <nav className={style.navigation}>
        <GoogleButton text="Sign-in" />
        <Button to={"email"}>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Sign-in</span>
        </Button>
      </nav>
    </div>
  );
};

export default AuthPage;
