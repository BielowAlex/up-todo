import React from "react";
import cn from "classnames";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

type Props = {
  to?: string;
  handleClick?: () => void;
  disabled?: boolean;
  variant?: "default" | "none" | "link";
  className?: string;
  tooltip?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({
  handleClick,
  children,
  variant = "default",
  disabled = false,
  type = "button",
  className,
  to,
  tooltip,
}) => {
  if (to) {
    return (
      <Link
        to={to}
        className={cn(style.btn, style[variant], className)}
        onClick={handleClick}
        type={type}
        title={tooltip}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cn(style.btn, style[variant], className)}
      onClick={handleClick}
      disabled={disabled}
      type={type}
      title={tooltip}
    >
      {children}
    </button>
  );
};

export { Button };
