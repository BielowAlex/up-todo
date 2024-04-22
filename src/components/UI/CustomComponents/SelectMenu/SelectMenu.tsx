import React from "react";
import style from "./style.module.scss";
import cn from "classnames";

type Props = {
  children: React.ReactNode;
  buttonIcon: React.ReactNode;
  className?: string;
};

const SelectMenu: React.FC<Props> = ({ buttonIcon, children, className }) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const handleToggleVisible = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className={cn(style.container, className)}>
      <button className={style.btn} onClick={handleToggleVisible}>
        {buttonIcon}
      </button>
      {isVisible && (
        <nav className={style.nav} onClick={handleToggleVisible}>
          {children}
        </nav>
      )}
    </div>
  );
};

export { SelectMenu };
