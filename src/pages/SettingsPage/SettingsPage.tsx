import React from "react";
import style from "./style.module.scss";
import { SettingsForm } from "../../components/SettingsForm";
import { PasswordForm } from "../../components/PasswordForm";

const SettingsPage: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.el}>
        <h2>Personal info:</h2>
        <SettingsForm />
      </div>
      <div className={style.el}>
        <h2>Password:</h2>
        <PasswordForm />
      </div>
    </div>
  );
};

export default SettingsPage;
