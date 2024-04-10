import React from "react";
import style from "./style.module.scss";
import logo from "../../assets/logo3.svg";

const Logo: React.FC = () => {
  return (
    <div className={style.container}>
      <img src={logo} alt="logo" />
      <h2>UpTodo</h2>
    </div>
  );
};

export { Logo };
