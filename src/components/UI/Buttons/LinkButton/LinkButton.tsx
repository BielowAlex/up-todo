import React from "react";
import style from "./style.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";

type Props = {
  handleClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  to: string;
};
const LinkButton: React.FC<Props> = ({
  handleClick,
  children,
  type = "button",
  className,
  to,
}) => {
  return (
    <Link
      to={to}
      className={cn(style.btn, className)}
      onClick={handleClick}
      type={type}
    >
      {children}
    </Link>
  );
};

export { LinkButton };
