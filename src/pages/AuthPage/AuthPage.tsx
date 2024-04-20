import React from "react";
import style from "./style.module.scss";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Button, LinkButton, SignUpMessage } from "../../components";

const AuthPage: React.FC = () => {
  const handleGmailAuthButton = () => {
    window.location.href = "http://localhost:4000/auth/google";
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
