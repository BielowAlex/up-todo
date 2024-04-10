import React from "react";
import style from "./style.module.scss";
import cn from "classnames";

type Props = {
  handleClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
};
const TextButton: React.FC<Props> = ({
  handleClick,
  children,
  disabled = false,
  type = "button",
  className,
}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={cn(style.btn, className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export { TextButton };
