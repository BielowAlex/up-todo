import React from "react";
import style from "./style.module.scss";
import { Button } from "../UI";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { authActions } from "../../store";
import { useNavigate } from "react-router-dom";
import { User } from "../../types";
import { noAvatarUrl } from "../../constant/user.constant.ts";

const AuthSection: React.FC = () => {
  const isLogin: boolean = useAppSelector((state) => state.authReducer.isLogin);
  const user: User = useAppSelector((state) => state.userReducer.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    // window.alert(isLogin ? "logged out" : "logged in");
    if (isLogin) {
      localStorage.removeItem("token");
      navigate("/auth");
    } else {
      navigate("/");
      localStorage.setItem("token", "true");
    }
    dispatch(authActions.setAuthStatus(!isLogin));
  };

  if (isLogin) {
    return (
      <div className={style.container}>
        <div className={style.avatar}>
          <img
            src={user.avatar || noAvatarUrl}
            alt="asds"
            width={45}
            height={45}
          />
        </div>
        <Button handleClick={handleLogin}>Logout</Button>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <Button handleClick={handleLogin}>Sign-in</Button>
    </div>
  );
};

export { AuthSection };
