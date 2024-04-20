import React from "react";
import style from "./style.module.scss";
import { Logo } from "../Logo";
import { SelectMenu, TextButton } from "../UI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { authActions, userActions } from "../../store";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
    dispatch(userActions.clearData());

    navigate("/auth");
  };

  return (
    <header className={style.container}>
      <Logo />
      <SelectMenu buttonIcon={<FontAwesomeIcon icon={faGear} />}>
        <TextButton>Settings</TextButton>
        <TextButton>Privacy</TextButton>
        <TextButton handleClick={handleLogout}>Logout</TextButton>
      </SelectMenu>
    </header>
  );
};

export { Header };
