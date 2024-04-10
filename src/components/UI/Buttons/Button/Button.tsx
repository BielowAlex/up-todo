import React from "react";
import cn from "classnames";
import style from "./style.module.scss";

type Props = {
  handleClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({
  handleClick,
  children,
  disabled = false,
  type = "button",
  className,
}) => {
  return (
    <button
      className={cn(style.btn, className)}
      onClick={handleClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export { Button };
