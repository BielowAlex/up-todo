import React from "react";
import style from "./style.module.scss";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/UI";

const AuthPage: React.FC = () => {
  const navigate = useNavigate();

  const handleEmailAuthButton = () => {
    navigate("email");
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Choose sign-in method </h2>
      <nav className={style.navigation}>
        <Button>
          <FontAwesomeIcon icon={faGoogle} />
          <span>Sign-in</span>
        </Button>
        <Button handleClick={handleEmailAuthButton}>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Sign-in</span>
        </Button>
      </nav>
    </div>
  );
};

export default AuthPage;
