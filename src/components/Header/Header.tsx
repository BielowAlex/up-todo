import React from "react";
import style from "./style.module.scss";
import { Logo } from "../Logo";
import { AuthSection } from "../AuthSection";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <header className={style.container}>
      <Logo />
      {!location.pathname.includes("auth") && <AuthSection />}
    </header>
  );
};

export { Header };
