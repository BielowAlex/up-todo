import React from "react";
import style from "./style.module.scss";
import { Logo } from "../Logo";
import { TextButton } from "../UI";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  console.log(window.location.pathname);

  return (
    <header className={style.container}>
      {window.location.pathname !== "/" && (
        <TextButton handleClick={() => navigate(-1)} className={style.backBtn}>
          <FontAwesomeIcon icon={faHandPointLeft} />
        </TextButton>
      )}
      <Logo />
    </header>
  );
};

export { Header };
