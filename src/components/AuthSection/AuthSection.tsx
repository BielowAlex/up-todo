import React from "react";
import style from "./style.module.scss";
import { Button } from "../UI";

const AuthSection: React.FC = () => {
  const [isLogin, setIsLogin] = React.useState<boolean>(false);

  const handleLogin = () => {
    // window.alert(isLogin ? "logged out" : "logged in");
    setIsLogin((prev) => !prev);
  };

  if (isLogin) {
    return (
      <div className={style.container}>
        <div className={style.avatar}>
          <img
            src="https://lh6.googleusercontent.com/proxy/Y6SwCoxLrC_a3oceaR4g5gEh0fB3I1-FQz1NQiom9CDh39Dgo_ItnUKiK6Vahe8eZrY3dteV6ve44SOK1UpZDTZfk6ayM5qN4g5OCThC"
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
