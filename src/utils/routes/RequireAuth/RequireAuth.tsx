import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks";

type Props = {
  children: React.ReactNode;
};
const RequireAuth: React.FC<Props> = ({ children }) => {
  const isLogin: boolean = useAppSelector((state) => state.authReducer.isLogin);
  const location = useLocation();

  if (!isLogin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export { RequireAuth };
