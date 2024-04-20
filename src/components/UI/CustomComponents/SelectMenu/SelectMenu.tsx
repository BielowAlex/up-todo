import React from "react";
import style from "./style.module.scss";

type Props = {
  children: React.ReactNode;
  buttonIcon: React.ReactNode;
};

const SelectMenu: React.FC<Props> = ({ buttonIcon, children }) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const handleToggleVisible = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className={style.container}>
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
