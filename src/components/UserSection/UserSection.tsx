import React from "react";
import style from "./style.module.scss";
import { useAppSelector } from "../../hooks";

const UserSection: React.FC = () => {
  const { avatar, lastName, firstName } = useAppSelector(
    (state) => state.userReducer.user,
  );
  return (
    <div className={style.container}>
      <div className={style.greeting}>
        <h3 className={style.greetingTitle}>Welcome back!</h3>
        <span className={style.greetingUsername}>
          {firstName} {lastName}
        </span>
      </div>
      <div className={style.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export { UserSection };
