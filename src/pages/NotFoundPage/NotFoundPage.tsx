import React from "react";
import style from "./style.module.scss";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className={style.container}>
      <div className={style.message}>
        <h2>Oopsi 404 (0_o)</h2>
        <p className={style.messageContent} data-testid="message">
          Current page does not exist, please return back. Also you can send
          feedback about this bug.
        </p>
        <Button handleClick={handleNavigate}>Back</Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
