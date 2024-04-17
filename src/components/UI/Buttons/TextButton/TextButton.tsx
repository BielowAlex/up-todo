import React from "react";
import style from "./style.module.scss";
import cn from "classnames";

type Props = {
  handleClick?: () => void;
  disabled?: boolean;
  className?: string;
  tooltip?: string;
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
};
const TextButton: React.FC<Props> = React.memo(
  ({
    handleClick,
    children,
    disabled = false,
    tooltip,
    type = "button",
    className,
  }) => {
    return (
      <button
        type={type}
        onClick={handleClick}
        className={cn(style.btn, className)}
        title={tooltip}
        disabled={disabled}
      >
        {children}
      </button>
    );
  },
);

export { TextButton };
