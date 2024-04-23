import React from "react";
import { Button } from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

type Props = {
  text: string;
};

const GoogleButton: React.FC<Props> = ({ text }) => {
  const handleGmailAuthButton = () => {
    window.location.href = `${import.meta.env.VITE_BACK_URL}/auth/google`;
  };
  return (
    <Button handleClick={handleGmailAuthButton}>
      <FontAwesomeIcon icon={faGoogle} />
      <span>{text}</span>
    </Button>
  );
};

export { GoogleButton };
