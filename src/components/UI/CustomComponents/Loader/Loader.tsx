import React from "react";
import style from "./style.module.scss";
import { Logo } from "../../../Logo";

const Loader: React.FC = () => {
  return (
    <div className={style.ring}>
      <Logo />
      <span className={style.obj}></span>
    </div>
  );
};

export { Loader };
