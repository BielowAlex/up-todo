import React from "react";
import style from "./style.module.scss";
import { Logo } from "../Logo";

const Header: React.FC = () => {
  return (
    <header className={style.container}>
      <Logo />
    </header>
  );
};

export { Header };
