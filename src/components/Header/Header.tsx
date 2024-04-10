import React from "react";
import style from "./style.module.scss";
import { Logo } from "../Logo";
import { AuthSection } from "../AuthSection";

const Header: React.FC = () => {
  return (
    <header className={style.container}>
      <Logo />
      <AuthSection />
    </header>
  );
};

export { Header };
