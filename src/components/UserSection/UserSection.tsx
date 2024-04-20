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
        <img
          width={100}
          height={100}
          src={
            avatar ||
            "https://a0.anyrgb.com/pngimg/1236/14/no-facial-features-no-avatar-no-eyes-expressionless-avatar-icon-delayering-avatar-user-avatar-men-head-portrait-thumbnail.png"
          }
          alt="avatar"
        />
      </div>
    </div>
  );
};

export { UserSection };
