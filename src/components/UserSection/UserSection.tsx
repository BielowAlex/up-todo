import React from "react";
import style from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { SelectMenu, TextButton } from "../UI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useSignOutMutation } from "../../core";
import { authActions, userActions } from "../../store";
import { transformErrorData } from "../../utils";

const defaultAvatar: string =
  "https://a0.anyrgb.com/pngimg/1236/14/no-facial-features-no-avatar-no-eyes-expressionless-avatar-icon-delayering-avatar-user-avatar-men-head-portrait-thumbnail.png";

const UserSection: React.FC = () => {
  const { avatar, lastName, firstName } = useAppSelector(
    (state) => state.userReducer.user,
  );
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();
  const [signOut] = useSignOutMutation();

  const handleLogout = async () => {
    try {
      dispatch(authActions.logout());
      dispatch(userActions.clearData());

      await signOut().unwrap();

      navigate("/auth");
    } catch (e) {
      console.log(transformErrorData(e));
    }
  };

  return (
    <div className={style.container}>
      <div className={style.greeting}>
        <h3 className={style.greetingTitle}>Welcome back!</h3>
        <span className={style.greetingUsername}>
          {firstName} {lastName}
        </span>
      </div>
      <div className={style.avatar}>
        <SelectMenu
          buttonIcon={<FontAwesomeIcon icon={faGear} />}
          className={style.settings}
        >
          <TextButton handleClick={() => navigate("settings")}>
            Settings
          </TextButton>
          <TextButton handleClick={handleLogout}>Logout</TextButton>
        </SelectMenu>
        <img
          width={100}
          height={100}
          src={avatar || defaultAvatar}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export { UserSection };
