import React from "react";
import style from "./style.module.scss";
import { Logo } from "../Logo";
import { Button } from "../UI";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const isShow =
    window.location.pathname !== "/" && window.location.pathname !== "/auth";

  return (
    <header className={style.container}>
      {isShow && (
        <Button
          variant="none"
          handleClick={() => navigate(-1)}
          className={style.backBtn}
        >
          <FontAwesomeIcon icon={faHandPointLeft} /> Back
        </Button>
      )}
      <Logo />
    </header>
  );
};

export { Header };
