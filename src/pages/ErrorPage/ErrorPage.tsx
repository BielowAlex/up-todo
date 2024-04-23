import React from "react";
import style from "./style.module.scss";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";
import { useErrorBoundary } from "react-error-boundary";

type Props = {
  error: Error;
};
const ErrorPage: React.FC<Props> = ({ error }) => {
  const navigate = useNavigate();
  const { resetBoundary } = useErrorBoundary();

  const handleNavigate = () => {
    navigate("/");
    resetBoundary();
  };
  return (
    <div className={style.container}>
      <div className={style.message}>
        <h2>Oopsi something went wrong (0_o)</h2>
        {error.message && (
          <p className={style.messageContent} data-testid="detail">
            Details: {error.message}
          </p>
        )}
        <p className={style.messageContent} data-testid="message">
          Sorry for wasted time, please return back. Also you can send feedback
          about this bug.
        </p>
        <Button handleClick={handleNavigate}>Back</Button>
      </div>
    </div>
  );
};

export default ErrorPage;
