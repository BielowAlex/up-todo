import React from "react";
import style from "./style.module.scss";

type Props = {
  handleClick?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ handleClick, children }) => {
  return (
    <button className={style.btn} onClick={handleClick}>
      {children}
    </button>
  );
};

export { Button };
